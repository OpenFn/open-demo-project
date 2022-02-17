// Map person and service data to the DB
fn(state => {
  const campMapping = {
    1122: 'Yida',
    1123: 'Zaatari'
  }
  
  const mapping = {
    External_ID: dataValue('case_id')(state),
    consent: dataValue('consent')(state),
    age: dataValue('age')(state),
    camp: campMapping[dataValue('camp')(state)]
  }
  
  console.log(mapping);
  
  return state;
})