const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get("/", (req, res, next) => {
  queries.getNick()
  .then((attitudes) => {
    res.json(attitudes)
  });
});

module.exports = router;
