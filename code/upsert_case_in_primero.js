// Your job goes here.
 upsertCase({
    externalId: ['case_id'],
     data: state => state.data 
}, 
  state => {
    console.log(state.data);
    return state;
  });