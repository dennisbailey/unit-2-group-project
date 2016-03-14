
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructors', function(table){
    table.increments();
    table.string('first');
    table.string('last');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructors');
};