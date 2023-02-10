create("vera__Beneficiary__c", fields(
  field('vera__Gender__c', dataValue("gender")),
  field('vera__Country__c', state => {
      // Or do anything in here...
      if (state.data.village == "Leicester") {
        console.log("Total number of patients");
        console.debug("Secret info about patients");
        return 'England';
      } else {
        setTimeout(() => {
          console.log("did i?");
        }, 50);
        console.log(Math.random());
        return "Far away";
      }
  }),
  field('vera__photo_url__c', dataValue("photo.url"))
));