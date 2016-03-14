
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('student_feedback').del(), 

    // Inserts seed entries
    knex('student_feedback').insert({student_id: 1, curriculum_id: 1, feedbackDt: '2016-03-14', rating: 4}),
    knex('student_feedback').insert({student_id: 1, curriculum_id: 2, feedbackDt: '2016-03-14', rating: 3}),
    knex('student_feedback').insert({student_id: 1, curriculum_id: 3, feedbackDt: '2016-03-14', rating: 2}),
    knex('student_feedback').insert({student_id: 1, curriculum_id: 4, feedbackDt: '2016-03-14', rating: 3}),
    knex('student_feedback').insert({student_id: 1, curriculum_id: 5, feedbackDt: '2016-03-14', rating: 4}),
    knex('student_feedback').insert({student_id: 1, curriculum_id: 6, feedbackDt: '2016-03-14', rating: 5}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 1, feedbackDt: '2016-03-14', rating: 4}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 2, feedbackDt: '2016-03-14', rating: 3}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 3, feedbackDt: '2016-03-14', rating: 2}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 4, feedbackDt: '2016-03-14', rating: 3}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 5, feedbackDt: '2016-03-14', rating: 4}),
    knex('student_feedback').insert({student_id: 2, curriculum_id: 6, feedbackDt: '2016-03-14', rating: 5})
  );
};
