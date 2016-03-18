var knex = require("../../../db/knex");

// *** Helpers *** //
// Return all users that aren't admin
var students = knex('users').where('admin', false).as('students');


function StudentAvg() {
  return knex('student_feedback').avg('rating').groupBy('student_feedback.student_id').as('student_avg');
}

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
        .select('curricula.id','curricula.type_id', 'curricula.title', 'curricula.assignmentDt', 'types.type').avg('student_feedback.rating')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'types.id', 'curricula.type_id')
        .where('curricula.type_id', type)
        .groupBy('curricula.id', 'curricula.type_id','curricula.title', 'curricula.assignmentDt', 'types.type')
        .orderBy('curricula.assignmentDt', 'desc');

    },

    // Find ratings for each learning experience rof this type for one student
    avgTypeAssessmentsForOneStudent: function(type, id) {

        return knex('student_feedback')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'types.id', 'curricula.type_id')
        .innerJoin('users', 'student_feedback.student_id', 'users.id')
        .where('curricula.type_id', type)
        .andWhere('student_feedback.student_id', id)
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

    },

    // Find all students and their avg feedback for all learning experiences
    allStudents : function() {

        return knex('student_feedback')
        .select('students.id', 'students.first', 'students.last').avg('student_feedback.rating')
        .innerJoin(students, 'student_feedback.student_id', 'students.id')
        .groupBy('students.id', 'students.first', 'students.last')
        .orderBy('avg');

    },

    // Find all learning experiences and match them up with any feedback (if present)
    oneStudent : function(id) {

        // Find all the feedback for a student
        var student = knex('users')
                      .innerJoin('student_feedback', 'users.id', 'student_feedback.student_id')
                      .where('users.id', id).as('student');

        return knex('curricula')
        .innerJoin('types', 'curricula.type_id', 'types.id')
        .leftJoin(student, 'curricula.id', 'student.curriculum_id')
        .orderBy('curricula.assignmentDt', 'desc');

    },


    avgAssessmentsForOneStudent : function(studentID) {

        return knex('student_feedback').select('type', 'type_id').avg('rating').groupBy('type_id', 'type')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .innerJoin('types', 'curricula.type_id', 'types.id')
        .where('student_feedback.student_id', studentID);

    }

};
