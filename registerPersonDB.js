// Map person and service data to the DB
fn(state => {
  const campMapping = {
    1122: 'Yida',
    1123: 'Zaatari'
  }
  
  const mapping = {
    External_ID: dataValue('case_id')(state),
    consent: dataValue('consent')(state) === "yes" ? 1 : 0,
    age: undefined,
    camp: campMapping[dataValue('camp')(state)]
    // Person_ID : unknown
    // select from demo_person where External_ID = case_id
  }
  
  return {...state, mapping};
})

upsert('demo_person', 'External_ID', state => state.mapping, { setNull: "'undefined'", logValues: true }
)

fn(async state => {
  const mapping = [];
  for (service of state.data.services_section){
     mapping.push({
      Type: service.service_type,
      External_ID: service.unique_id,
      Person_ID: await findValue({
         uuid: 'Person_ID',
         relation: 'demo_person',
         where: { External_ID: dataValue('case_id')(state) },
       }),
      })
  }
  return upsertMany('demo_service', 'External_ID', mapping)(state);
})


