console.log("test job")
console.log(state)

create("Account", fields(
  field("Name", dataValue("from")),
  field("Description", dataValue("sampleText")),
  field("Website", dataValue("website")),
  field("Phone", "867-5309")
))

console.log("hi from openfn.org")
console.log("hi from github")
console.log("hi from openfn again?")
console.log("openfn to github")