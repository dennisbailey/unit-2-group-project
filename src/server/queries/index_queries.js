var knex = require("../../../db/knex");






module.exports = {
   allAssignments : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('assignmentDt', 'desc');
  }
  
};