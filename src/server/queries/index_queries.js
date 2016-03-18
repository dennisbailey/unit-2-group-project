var knex = require("../../../db/knex");


module.exports = {
   allAssignments : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('assignmentDt', 'desc');
  },

   allAssignmentsSortByDate : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('assignmentDt');
  },

   allAssignmentsSortByInstructor : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('instructors.first');
  },

   allAssignmentsSortByType : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('types.type');
  },

   allAssignmentsSortbyTitle : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('curricula.title');
  },


   addNewUser : function(newUser){
    return knex('users')
    .insert(newUser);
  },

   checkIfUserExists : function(email){
    return knex('users')
    .where('email', email);
   }
};
