// Your job goes here.
// test
fn(state => {
  const camps = {
    1122 : "Yida",
    1123 : "Zaatari"
  }
  
  const person = 
      {
        'External_ID': dataValue('case_id')(state),
        'Consent': (dataValue('consent')(state) === "yes" ? 1 : 0),
        'Age': dataValue('age')(state),
        'Camp': camps[dataValue('camp')(state)]
      };
    
    return {...state, person }
})

upsert('demo_person', 'External_ID', (state) => state.person);


