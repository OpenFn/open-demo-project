each(
  dataPath("data[*]"),
  create("vera__Beneficiary__c", fields(
    // distillery and eedeliver now!
    // and a master_support commit
    field("vera__GHI_ID_Number__c", dataValue("site_school_number")),
    field("name", dataValue("parent_surname")),
    field("vera__Gender__c", dataValue("head_of_household_gender")),
    field("vera__Country__c", function(state) {
        if (state.data.village == "Leicester") {
          return 'England'
        } else {
          return "Unknown"
        }
    }),
    relationship("vera__Parents_House__r", "vera__house_id__c", dataValue("parents_house")),
    field("vera__photo_url__c", dataValue("photo.url"))
  ))
);
// change from 'old' job inside openfn
// big change