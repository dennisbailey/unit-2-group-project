var knex = require("../../../db/knex");

// *** Helper Functions *** //
function Students() {
  return knex('users').select('first as fName', 'last as lName', 'id as student_id').as('users');
}

function allAssessmentRatings() {
      return knex('student_feedback').select('type').avg('rating').groupBy('type')
      .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
      .innerJoin('types', 'curricula.type_id', 'types.id');
}

function findMedian(id){// 
var counts = knex('student_feedback').select('curricula.id').count('student_feedback.id')
        .innerJoin('curricula', 'curricula.id', 'student_feedback.curriculum_id')
        .where('curricula.type_id', id)
        .groupBy('curricula.id', 'curricula.assignmentDt');
        
        var medians = [];
        console.log('counts ',counts);
        for (var i = 0; i < counts.length; i++) { 
            console.log('hello');
            var result = {id: i.id}
            
            var row;
            
            if (i.count % 2 === 0) {
                row = i.count / 2;
            } else {
                row = Math.floor(i.count / 2);
            }
            
            result.median = knex('student_feedback').select('student_feedback.rating').limit(1).offset(count)
                            .where('student_feedback.curriculum_id', i.id)
                            .orderBy('student_feedback.rating', 'asc');
                            
            medians.push(result);
          
        }
        console.log(medians);
        return medians;
};
