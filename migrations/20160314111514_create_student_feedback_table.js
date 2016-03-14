
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_feedback', function(table){
    table.increments();
    table.integer('student_id').references('users', 'id');
    table.integer('curriculum_id').references('curricula', 'id');
    table.date('feedback_dt');
    table.integer('rating');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_feedback');
};