create("foo", fields(
  field("bar", "baz"),
  field("qux", (state) => {
    if (state.data.some_condition) {
      "everything's gonna be alright"
    } else {
      throw new Error("Fugees coming to the party tonight");
    }
  })
))
