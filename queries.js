const knex = require('./db/knex')

module.exports = {
  getNick: function(){
    return knex('*').from('nick')
  },
  getNickById: function(attitude_id){
    return knex('nick').where ('id', attitude_id).first();
  }
}
