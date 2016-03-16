var knex = require("../../../db/knex");


module.exports = {
    
    // Find all completed assessments for all students
    allAssessments : function() {
      
        return knex('users')
        .innerJoin('student_feedback', 'student_feedback.student_id', 'users.id')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'curricula.type_id', 'types.id');
        
    },
    
    // Find the mean rating for each element of the curriculum for this type
    avgTypeAssessments : function(type) {
        
        return knex('student_feedback')
        .select('curricula.id','curricula.type_id', 'curricula.title', 'curricula.assignmentDt').avg('student_feedback.rating')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .where('curricula.type_id', type)
        .groupBy('curricula.id', 'curricula.type_id','curricula.title', 'curricula.assignmentDt')
        .orderBy('curricula.assignmentDt', 'desc');
        
    },
    
     // Find the mean rating for each element of the curriculum for this type
    allTypeAssessments : function(type, id) {
        
        return knex('users')
        .innerJoin('student_feedback', 'student_feedback.student_id', 'users.id')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .where('curricula.type_id', type)
        .andWhere('curricula.id', id)
        .orderBy('curricula.assignmentDt', 'curricula.id', 'desc');
        
    },
    
     // Find the mean rating for each learning experience type
    avgAssessments : function() {
        
      return knex('student_feedback').select('type', 'type_id').avg('rating').groupBy('type_id', 'type')
      .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
      .innerJoin('types', 'curricula.type_id', 'types.id');
      
    }

};