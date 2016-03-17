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


    showOneAssignment : function(id){
      return knex('curricula')
      .select('curricula.title', 'instructors.first', 'instructors.last', 'types.type', 'topics.topic', 'curricula.assignmentDt', 'curricula.link', 'curricula.feedbackDt','curricula.id as curriculum_id', 'curricula.topic_id', 'curricula.instructor_id', 'curricula.type_id')
      .innerJoin('types', 'types.id', 'curricula.type_id')
      .innerJoin('topics', 'topics.id', 'curricula.topic_id')
      .leftOuterJoin('instructors', 'instructors.id', 'curricula.instructor_id')
      .where('curricula.id', id)
   },
   
   editOneAssignment : function(id){
     return knex('curricula')
     .where('id', id)
     .delete();
   },
   
   deleteOneAssignments : function(id){
     
     return knex('curricula')
     .where('id', id)
     .delete();
   
   }




};