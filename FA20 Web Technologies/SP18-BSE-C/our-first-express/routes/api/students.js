var express = require("express");
var router = express.Router();

//This is your controller
router.get("/api/students", (req, res) => {
  return res.send(["Usman", "Noman", "Ali"]);
});
module.exports = router;
