// Your job goes here.
 upsertCase({
    externalId: 'case_id', //upsert 1 case using case id
    data: {
       "age": 20,
       "sex": "female",
       "name": "Aicha",
       "status": "open",
       "case_id": "234bbac3-7278-430a-98b5-1abc460671ec",
 }}, 
  state => {
    console.log(state.data); //log data
    return state;
  });
  
