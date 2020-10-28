alterState(state => {
  console.log(state);
  setTimeout(() => { console.log("_something in here?"); }, 50);
  console.log("any other change");
  return { ...state, thing: 7 };
  // const xx = "after return";
  // const x = "other thing!";
  const x = 'thing here?';
  // very warning, many wow!
});

create("Account", fields(
  field("Name", dataValue("from")),
  // relationship("Business_Group__r", "BG_UUID__c", dataValue("DestAcct")),
  // ok there.
  field("Description", dataValue("sampleText")),
  field("Website", dataValue("website")),
  field("Phone", "867-5309")
));
