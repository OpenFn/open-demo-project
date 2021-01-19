// alterState(state => {
//   setTimeout(function(){
//     return state;
//   }, 4);
// })
create("Account", fields(
  field("Name", dataValue("from")),
  // relationship("Business_Group__r", "BG_UUID__c", dataValue("DestAcct")),
  field("Description", dataValue("sampleText")),
  field("Website", dataValue("website")),
  field("Phone", "867-5309")
));