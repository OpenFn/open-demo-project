create("Account", fields(
  field("Name", dataValue("from")),
  field("Description", dataValue("sampleText")),
  field("Website", dataValue("website")),
  field("Phone", "867-5309")
));//

alterState(state => {
  return {...state, other: 1};
});