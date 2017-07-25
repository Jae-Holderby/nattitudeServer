const knex = require('../db/knex')

module.exports = {
  function getNick(){
    return knex('*').from('nick')
  }
}
