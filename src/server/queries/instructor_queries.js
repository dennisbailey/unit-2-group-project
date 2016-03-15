var knex = require("../../../db/knex");

// *** Helper Functions *** //
// function Students() {
//   return knex('users').select('first as fName', 'last as lName', 'id as student_id').as('users');
// }
// 
// function allAssessmentRatings() {
//       return knex('student_feedback').select('type').avg('rating').groupBy('type')
//       .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
//       .innerJoin('types', 'curricula.type_id', 'types.id');
// }


module.exports = {
  
    allAssessments : function() {
      
        return knex('users')
        .innerJoin('student_feedback', 'student_feedback.student_id', 'users.id')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'curricula.type_id', 'types.id');
        
    },
    
    allTypeAssessments : function(id) {
      
        return knex('users')
        .innerJoin('student_feedback', 'student_feedback.student_id', 'users.id')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'curricula.type_id', 'types.id')
        .where('types.id', id);
        
    },
    
    avgAssessments : function() {
        
      return knex('student_feedback').select('type', 'type_id').avg('rating').groupBy('type_id', 'type')
      .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
      .innerJoin('types', 'curricula.type_id', 'types.id');
      
    }

};