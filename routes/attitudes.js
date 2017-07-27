const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get("/", (req, res, next) => {
  queries.getNick()
  .then((attitudes) => {
    res.json(attitudes)
  });
});

router.get("/:id", function(req, res, next) {
  queries.getNickById(req.params.id)
  .then((attitude) => {
    res.json(attitude)
  });
});

router.post("/", function(req, res) {
  let body = req.body;
  queries.postLog(body)
  .then((newAttitude) => {
    res.json(newAttitude[0])
  });
});

module.exports = router;
