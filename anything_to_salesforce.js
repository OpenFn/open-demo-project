// new source, old connection, round trip 123
console.log(this.version);
console.log(state);
create("vera__Beneficiary__c", {
  vera__Gender__c: dataValue("gender"),
  vera__Country__c: function(state) {
      // Or do anything in here...
      if (state.data.village == "Leicester") {
        return 'England';
      } else {
        setTimeout(() => {
          console.log("did i?");
        }, 50);
        console.log(Math.random());
        return "Far away";
      }
  },
  vera__photo_url__c: dataValue("photo.url")
});

console.log("Changes from GitHub succeeds with existing integrations 2 also.");
