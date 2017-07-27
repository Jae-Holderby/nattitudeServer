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

router.post("/", function(req, res, next) {
  let body = req.body;
  queries.postLog(body)
  .then((newAttitude) => {
    res.json(newAttitude[0])
  });
});

router.put("/:id", function(req, res, next) {
  let id = req.params.id;
  let edit = req.body;
  queries.editLog(id, edit)
    .then((editedLog) => {
      res.json(editedLog[0])
    });
});

router.delete("/:id", function(req, res, next){
  let id = req.params.id;
  queries.deleteLog(id)
  .then((deleted) => {
    res.json({message: 'Record Deleted'})
  });
});

module.exports = router;
