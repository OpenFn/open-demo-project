// new source, old connection, round trip 456
// fail now!!!! github down? yes, but i hope they fix it soon.
// console.log(this.version);
// console.log(state);

fn(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait, and then return");
      resolve(state);
    }, 2000);   
  });
});

fn(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait, and then return 2");
      resolve(state);
    }, 2000);   
  });
});

fn(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait, and then return 3");
      resolve(state);
    }, 2000);   
  });
});

create("vera__Beneficiary__c", fields(
  field('vera__Gender__c', dataValue("gender")),
  field('vera__Country__c', state => {
      // Or do anything in here...
      if (state.data.village == "Leicester") {
        return 'England';
      } else {
        setTimeout(() => {
          console.log("did i?");
        }, 50);
        console.log(Math.random());
        return "ok";
        // return "star� � 2021-07-29";
      }
  }),
  field('vera__photo_url__c', dataValue("photo.url"))
));

// // console.log("Changes from GitHub succeeds with existing integrations 2 also.");
