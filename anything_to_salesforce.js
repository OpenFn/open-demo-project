each(
  dataPath("data[*]"),
  create("vera__Beneficiary__c", fields(
    field("vera__GHI_ID_Number__c", dataValue("site_school_number")),
    field("name", dataValue("parent_surname")),
    field("vera__Country__c", function(state) {
      console.log(state)
        if (state.data.village == "Leicester") {
          return 'England'
        } else {
          return "Unknown"
        }
    }),
    relationship("vera__Parents_House__r", "vera__house_id__c", dataValue("parents_house")),
    field("vera__Photo_URL__c", dataValue("photo.url"))
  ))
)
