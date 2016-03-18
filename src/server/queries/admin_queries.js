var knex = require("../../../db/knex");


module.exports = {

   // *** Make it Dry *** //
    allFromTable : function(table) {
      return knex(table);
    },

    makeEdit : function(table, id, object) {
       return knex(table)
       .where ('id', id)
       .update(object);
    },

    deleteFrom : function(table, id) {
       return knex(table)
       .where('id', id)
       .delete();
    },

    addTo : function(table, object) {
        return knex(table)
       .insert(object);
    },


    // *** Assignment Queries *** //
    allAssignments : function() {
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
        .where('curricula.id', id);
    },


    // *** One offs *** //
    showOneInstructor : function(id){
       return knex('instructors')
       .where('id', id);
    },


    allUsers : function(){
      return knex('users')
      .orderBy('admin', 'desc','last', 'asc');
    },


    // *** Create and Delete Admins *** //
    removeAdmin : function(id){
       return knex('users')
       .where('id', id)
       .update({ admin : false});
    },


    makeAdmin : function(id){
       return knex('users')
       .where('id', id)
       .update({ admin : true });
    }

};
