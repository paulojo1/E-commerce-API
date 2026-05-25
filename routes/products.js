const router = require("express").Router();
const db = require("../database");

// ADD PRODUCT
router.post("/", (req, res) => {
  const product = {
    id: db.products.length + 1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  };

  db.products.push(product);

  res.json(product);
});

// GET ALL PRODUCTS
router.get("/", (req, res) => {
  res.json(db.products);
});

module.exports = router;