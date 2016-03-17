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
    .select('curricula.title', 'instructors.first', 'types.type', 'curricula.assignmentDt', 'curricula.id as curriculum_id')
    .innerJoin('types', 'types.id', 'curricula.type_id')
    .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
    .orderBy('assignmentDt', 'desc');
  },


    deleteOneAssignments : function(id){
     return knex('curricula')
     .where('id', id)
     .delete();
   }




};