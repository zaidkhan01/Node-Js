const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

//set the directory for the views
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      title: "product1",
    },
    {
      id: 2,
      title: "product2",
    },
    {
      id: 3,
      title: "product3",
    },
  ];

  res.render("home", { title: "home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running on port 3000");
});
