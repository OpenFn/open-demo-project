create("vera__Beneficiary__c", {
  vera__Gender__c: dataValue("super_change"),
  vera__Country__c: function(state) {
      // Or do anything in here...ok
      if (state.data.village == "Leicester") {
        return 'England'
      } else {
        // console.log(Math.random());
        return "Far away"
      }
  },
  vera__photo_url__c: dataValue("photo.url")
});