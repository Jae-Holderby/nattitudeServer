
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nick', (table) => {
    table.increments();
    table.date('date').notNullable();
    table.time('time').notNullable();
    table.text('situation');
    table.integer('scale').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('nick')
};
