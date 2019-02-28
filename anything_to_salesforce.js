create("vera__Beneficiary__c", fields(
  // field("vera__GHI_ID_Number__c", state => {
  //   return Date.now();
  // }),
  // field("name", dataValue("parent_surname")),
  field("vera__Gender__c", dataValue("head_of_household_gender")),
  field("vera__Country__c", function(state) {
      // Or do anything in here...ok
      if (state.data.village == "Leicester") {
        return 'England'
      } else {
        return "Unknown"
      }
  }),
  // field("vera__Parents_House__c", state => {
  //   return state.references[0].records[0].Id;
  // }),
  field("vera__photo_url__c", dataValue("photo.url"))
))

alterState(state => {
  console.log(state)
  return state;
});
