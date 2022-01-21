// Your job goes here.
 upsertCase({
    externalId: "234bbac3-7278-430a-98b5-1abc460671ec", //upsert 1 case using case id
     data: state => state.data 
}, 
  state => {
    console.log(state.data);
    return state;
  });