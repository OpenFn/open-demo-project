create("vera__Beneficiary__c", {
  vera__Gender__c: dataValue("gender"),
  vera__Country__c: function(state) {
      // Or do anything in here... ok.
      if (state.data.village == "Leicester") {
        return 'England'
      } else {
        setTimeout(() => {
          console.log("did i?");
        }, 3000);
        console.log(Math.random());
        return "Far away"
      }
  },
  vera__photo_url__c: dataValue("photo.url")
});
console.log("Changes from GitHub succeed with existing integrations.");
