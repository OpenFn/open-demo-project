// Your job goes here.
 upsertCase({
    externalId: 'case_id', //upsert 1 case using case id
    data: state => state.data 
}, 
  state => {
    console.log(state.data); //log data
    return state;
  });