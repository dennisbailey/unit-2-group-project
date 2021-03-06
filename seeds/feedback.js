
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('student_feedback').del(), 

    // Inserts seed entries
    knex('student_feedback').insert({student_id: 3, curriculum_id: 1, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 2, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 4, feedbackDt: '2016-02-19', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 5, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 7, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 8, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 9, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 1, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 2, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 3, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 4, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 6, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 1, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 2, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 3, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 4, feedbackDt: '2016-02-19', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 5, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 6, feedbackDt: '2016-02-19', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 7, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 8, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 9, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 1, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 2, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 3, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 4, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 5, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 6, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 7, feedbackDt: '2016-02-19', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 8, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 9, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 1, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 2, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 3, feedbackDt: '2016-02-19', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 4, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 6, feedbackDt: '2016-02-19', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 7, feedbackDt: '2016-02-19', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 8, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 9, feedbackDt: '2016-02-19', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 10, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 11, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 12, feedbackDt: '2016-02-20', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 13, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 14, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 15, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 10, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 11, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 13, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 14, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 15, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 10, feedbackDt: '2016-02-20', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 11, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 12, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 13, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 14, feedbackDt: '2016-02-20', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 15, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 10, feedbackDt: '2016-02-20', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 11, feedbackDt: '2016-02-20', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 12, feedbackDt: '2016-02-20', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 13, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 14, feedbackDt: '2016-02-20', rating: 4}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 10, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 11, feedbackDt: '2016-02-20', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 13, feedbackDt: '2016-02-20', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 14, feedbackDt: '2016-02-20', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 15, feedbackDt: '2016-02-20', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 16, feedbackDt: '2016-02-21', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 17, feedbackDt: '2016-02-21', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 18, feedbackDt: '2016-02-21', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 19, feedbackDt: '2016-02-21', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 16, feedbackDt: '2016-02-21', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 17, feedbackDt: '2016-02-21', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 18, feedbackDt: '2016-02-21', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 19, feedbackDt: '2016-02-21', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 16, feedbackDt: '2016-02-21', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 17, feedbackDt: '2016-02-21', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 19, feedbackDt: '2016-02-21', rating: 1}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 16, feedbackDt: '2016-02-21', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 18, feedbackDt: '2016-02-21', rating: 3}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 19, feedbackDt: '2016-02-21', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 19, feedbackDt: '2016-02-21', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 20, feedbackDt: '2016-02-22', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 21, feedbackDt: '2016-02-22', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 22, feedbackDt: '2016-02-22', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 23, feedbackDt: '2016-02-22', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 20, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 21, feedbackDt: '2016-02-22', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 22, feedbackDt: '2016-02-22', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 23, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 20, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 21, feedbackDt: '2016-02-22', rating: 2}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 22, feedbackDt: '2016-02-22', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 23, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 20, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 21, feedbackDt: '2016-02-22', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 22, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 23, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 20, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 21, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 23, feedbackDt: '2016-02-22', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 24, feedbackDt: '2016-02-25', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 26, feedbackDt: '2016-02-25', rating: 3}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 24, feedbackDt: '2016-02-25', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 26, feedbackDt: '2016-02-25', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 24, feedbackDt: '2016-02-25', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 26, feedbackDt: '2016-02-25', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 24, feedbackDt: '2016-02-25', rating: 1}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 26, feedbackDt: '2016-02-25', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 24, feedbackDt: '2016-02-25', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 25, feedbackDt: '2016-02-25', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 26, feedbackDt: '2016-02-25', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 27, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 29, feedbackDt: '2016-02-26', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 30, feedbackDt: '2016-02-26', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 27, feedbackDt: '2016-02-26', rating: 1}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 28, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 29, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 27, feedbackDt: '2016-02-26', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 28, feedbackDt: '2016-02-26', rating: 2}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 29, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 27, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 28, feedbackDt: '2016-02-26', rating: 2}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 29, feedbackDt: '2016-02-26', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 28, feedbackDt: '2016-02-26', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 29, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 30, feedbackDt: '2016-02-26', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 31, feedbackDt: '2016-02-27', rating: 3}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 34, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 35, feedbackDt: '2016-02-27', rating: 4}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 36, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 31, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 33, feedbackDt: '2016-02-27', rating: 3}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 34, feedbackDt: '2016-02-27', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 36, feedbackDt: '2016-02-27', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 32, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 33, feedbackDt: '2016-02-27', rating: 2}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 34, feedbackDt: '2016-02-27', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 35, feedbackDt: '2016-02-27', rating: 2}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 36, feedbackDt: '2016-02-27', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 31, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 33, feedbackDt: '2016-02-27', rating: 5}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 34, feedbackDt: '2016-02-27', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 35, feedbackDt: '2016-02-27', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 36, feedbackDt: '2016-02-27', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 31, feedbackDt: '2016-02-27', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 32, feedbackDt: '2016-02-27', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 33, feedbackDt: '2016-02-27', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 34, feedbackDt: '2016-02-27', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 35, feedbackDt: '2016-02-27', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 37, feedbackDt: '2016-02-28', rating: 1}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 39, feedbackDt: '2016-02-28', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 40, feedbackDt: '2016-02-28', rating: 2}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 37, feedbackDt: '2016-02-28', rating: 3}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 38, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 39, feedbackDt: '2016-02-28', rating: 4}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 40, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 41, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 37, feedbackDt: '2016-02-28', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 38, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 39, feedbackDt: '2016-02-28', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 40, feedbackDt: '2016-02-28', rating: 1}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 41, feedbackDt: '2016-02-28', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 37, feedbackDt: '2016-02-28', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 38, feedbackDt: '2016-02-28', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 39, feedbackDt: '2016-02-28', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 40, feedbackDt: '2016-02-28', rating: 3}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 41, feedbackDt: '2016-02-28', rating: 1}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 37, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 38, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 39, feedbackDt: '2016-02-28', rating: 2}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 40, feedbackDt: '2016-02-28', rating: 3}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 41, feedbackDt: '2016-02-28', rating: 5}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 42, feedbackDt: '2016-02-29', rating: 3}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 42, feedbackDt: '2016-02-29', rating: 1}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 42, feedbackDt: '2016-02-29', rating: 5}),
    knex('student_feedback').insert({student_id: 7, curriculum_id: 42, feedbackDt: '2016-02-29', rating: 2}),
    knex('student_feedback').insert({student_id: 3, curriculum_id: 43, feedbackDt: '2016-03-01', rating: 5}),
    knex('student_feedback').insert({student_id: 4, curriculum_id: 43, feedbackDt: '2016-03-01', rating: 3}),
    knex('student_feedback').insert({student_id: 5, curriculum_id: 43, feedbackDt: '2016-03-01', rating: 4}),
    knex('student_feedback').insert({student_id: 6, curriculum_id: 43, feedbackDt: '2016-03-01', rating: 4})
  );
};
