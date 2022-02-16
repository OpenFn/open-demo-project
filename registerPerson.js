// Your job goes here.
fn(state => {
  const campMapping = {
    1122: "Yida",
    1123: "Zaatari"
  }
    
  return {...state, campMapping }
})

 upsert('Patient__c', 'External_ID__c', {
   External_ID__c: dataValue('case_id'),
   Consent__c : state => {
   //console.log(dataValue('consent')(state))
   return dataValue('consent')(state) ? 'yes' : 'no'
   },
  
   Age__c: dataValue('age'),
   Camp__c: state => {
     return state.campMapping[dataValue('camp')(state)];
    },
 })

// $.services_section[*] ==> state.services_section[*]
// state.data.FIELD === dataValue('FIELD')

// dataValue('FIELD') ==> state.data.FIELD == dataValue
// dataPath('FIELD') ==> PATH TO FIELD


each(dataPath('services_section[*]'),
  upsert("Service__c", 
    "Service_ID__c", 
    fields(
      field("Type__c", dataValue('service_type')), // dataValue('service_type') ==> state.data.service_type
      field("Service_ID__c", dataValue("unique_id"))
    )
  )
   /*fn(state => {
    console.log(state.data);
    return state;
  })*/
);
/*
   fields(
      field("Type__c", dataValue('service_type')), // dataValue('service_type') ==> state.data.service_type
      field("Service_ID__c", dataValue("unique_id"))
    )
    
    ||
    
    {
      Type__c: '',
      Service_ID__c: ''
    }
*/
/*fn(state => {
 const services = [
  {
    a: 1,
  },
  {
    a: 2,
  },
]

  return each(services, fn(state => {
    console.log('data', state.data);
    return state;
  }))(state)
})*/
