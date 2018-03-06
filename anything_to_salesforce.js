create("foo", fields(
  field("bar", "baz"),
  field("qux", (state) => {
    if (state.data.some_condition) {
      "everything is awesome!"
    } else {
      throw new Error("everything is the worst  ¯\\\_(ツ)_/¯");
    }
  })
))
