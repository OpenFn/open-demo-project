  upsert("vera__Beneficiary__c", "vera__GHI_ID_Number__c", fields(
    field("vera__GHI_ID_Number__c", "8675309"),
    field("name", sourceValue("$.data.name")),
    field("vera__Country__c", function(state) {
        return ''
    }),
    // field("vera__Country__c", "always Kenya"),
    relationship("vera__First_Hear_House__r", "vera__house_id__c", "7"),
    relationship("RecordType", "name", "other")
  ));
