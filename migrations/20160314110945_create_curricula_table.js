
exports.up = function(knex, Promise) {
  return knex.schema.createTable('curricula', function(table){
    table.increments();
    table.integer('type_id').references('types', 'id');
    table.integer('topic_id').references('topics', 'id');
    table.integer('instructor_id').references('instructors', 'id');;
    table.string('title');
    table.string('link');
    table.date('assignment_dt');
    table.date('feedback_dt');
    table.date('dt_created');
    table.date('dt_modified'); 
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('curricula');
};