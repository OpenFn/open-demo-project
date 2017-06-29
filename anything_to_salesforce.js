each(
  dataPath("data[*]"),
  // Use system-specific named functions...
  create("vera__Beneficiary__c", fields(
    field("vera__GHI_ID_Number__c", dataValue("site_school_number")),
    field("name", dataValue("parent_surname")),
    field("vera__Country__c", function(state) {
      // Or do what you want in here...
      console.log("Hi Mom!)
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
