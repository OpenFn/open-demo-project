query('SELECT Id from vera__Parents_House__c;');

alterState(state => {
  console.log(state);
  return state;
})

create("vera__Beneficiary__c", fields(
  field("vera__GHI_ID_Number__c", state => {
    return Date.now();
  }),
  field("name", dataValue("parent_surname")),
  field("vera__Gender__c", dataValue("head_of_household_gender")),
  field("vera__Country__c", function(state) {
      // Or do anything in here...ok
      // console.log("Hi, Dad!")
      if (state.data.village == "Leicester") {
        return 'England'
      } else {
        return "Unknown"
      }
  }),
  relationship("vera__Parents_House__r", "vera__house_id__c", dataValue("parents_house")),
  field("vera__photo_url__c", dataValue("photo.url"))
))