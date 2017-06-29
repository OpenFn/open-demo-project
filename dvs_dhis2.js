each(
  dataPath("data[*]"),
  dataValueSet(
    fields(
      field("dataSet", "pBOMPrpg1QX"),
      field("orgUnit", "DiszpKrYNg8"),
      field("period", "201401"),
      field("completeData", dataValue("today")),
      field("dataValues", function(state) {
        console.log("Do anything you want in here.");
        return [
          dataElement("qrur9Dvnyt5", state.data.site_school_number),
          dataElement("oZg33kd9taw", state.data.light_source),
          dataElement("msodh3rEMJa", state.data.number_of_children)
        ];
      })
    )
  );
);
