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
  }
  
  return {...state, mapping};
})

upsert('demo_person', 'External_ID', state => state.mapping, { setNull: "'undefined'", logValues: true })



