// Your job goes here.
updateReferrals(
  {
    externalId: 'case_id',
    id: '2a2cc932-4b6f-43a6-928d-40fc9949eb02',
    referral_id: 'c377bcb2-122d-46ee-a861-869e1b6476cd',
    data: {
       "age": 20,
       "sex": "female",
       "name": "Aicha",
       "status": "open",
       "case_id": "234bbac3-7278-430a-98b5-1abc460671ec",
 } },
  state => {
    console.log(state.data); //log data
    return state;
  }
);