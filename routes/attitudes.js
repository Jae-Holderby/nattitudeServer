const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', (req, res, next) => {
  getNick().then((attitudes) => {
    res.json(attitudes)
  });
});

function getNick(){
  return knex('*').from('nick')
}

module.exports = router;
