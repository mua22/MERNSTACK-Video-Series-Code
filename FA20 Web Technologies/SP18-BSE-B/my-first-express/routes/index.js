var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/api/students", function (req, res, next) {
  res.send(["x", "y", "z"]);
});

module.exports = router;
