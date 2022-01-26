const express = require("express"),
  app = express(),
  port = 3000;

//templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

const data = { name: "DevDoctor", hobbies: ["coding", "teaching", "travel"] };

app.get("/", (req, res) => {
  res.render("home", { data: data });
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
