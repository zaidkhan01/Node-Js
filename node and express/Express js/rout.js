const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to our home page");
});
// get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product1",
    },
    {
      id: 1,
      label: "Product1",
    },
    {
      id: 2,
      label: "Product2",
    },
    {
      id: 3,
      label: "Product3",
    },
  ];
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  console.log("req.params", req.params);
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "Product1",
    },
    {
      id: 1,
      label: "Product1",
    },
    {
      id: 2,
      label: "Product2",
    },
    {
      id: 3,
      label: "Product3",
    },
  ];
  const getSingleProduct = products.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("product is not found please try with different id");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
