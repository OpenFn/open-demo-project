dataValueSet(
  fields(
    field("dataSet", "pBOMPrpg1QX"),
    field("orgUnit", "DiszpKrYNg8"),
    field("period", "201401"),
    field("completeData", dataValue("form.date")),
    field("dataValues", function(state) {
      console.log("Do anything you want in here.");
      return [
        dataElement("qrur9Dvnyt5", state.data.prop_a),
        dataElement("oZg33kd9taw", state.data.prop_a),
        dataElement("msodh3rEMJa", state.data.prop_a)
      ];
    })
  )
);
