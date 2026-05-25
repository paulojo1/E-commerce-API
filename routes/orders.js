const router = require("express").Router();
const db = require("../database");

// CREATE ORDER
router.post("/", (req, res) => {
  const order = {
    id: db.orders.length + 1,
    userId: req.body.userId,
    products: req.body.products,
    total: req.body.total
  };

  db.orders.push(order);

  res.json(order);
});

// GET USER ORDERS
router.get("/:userId", (req, res) => {
  const orders = db.orders.filter(o => o.userId == req.params.userId);
  res.json(orders);
});

module.exports = router;