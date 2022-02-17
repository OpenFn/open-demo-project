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

upsertMany('demo_service', 'External_ID', state => state.data.services_section.map(service => {
  return {
    Type: service.service_type,
    External_ID: service.unique_id,
    Person_ID: findValue({
       uuid: 'Person_ID',
       relation: 'demo_person',
       where: { External_ID: dataValue('case_id')(state) },
     }),
  }
}) )

