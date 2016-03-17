var knex = require("../../../db/knex");


module.exports = {
   
    addLearningExperience : function(object) {
      
        return knex('curricula').insert(object);
      
    },
    
    
    allInstructors : function() {
        
        return knex('instructors');
      
    },
    
    
    allTypes : function() {
        
        return knex('types');
      
    },
    
    allTopics : function() {
        
        return knex('topics');
      
    },

    allAssignments : function(){
    return knex('curricula')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('assignmentDt', 'desc');
  }
};