
exports.seed = function(knex,   Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('curricula').del(),   

    // Inserts seed entries
    knex('curricula').insert({ title: 'module.exports', instructor_id: 4, topic_id: 5, type_id: 1, link: 'https://github.com/gSchool/module.exports', assignmentDt: '2/16/16 07:41:21', feedbackDt: '2/19/16 07:41:21', dtCreated: '1/1/16 07:41:21', dtModified: '1/1/16 07:41:21' }), 
    knex('curricula').insert({ title: 'Node CLI', instructor_id: 2, topic_id: 6, type_id: 1, link: 'https://github.com/gSchool/js-node-cli', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Responsive Design Mockups', instructor_id: 0, topic_id: 4, type_id: 2, link: 'https://github.com/gSchool/responsive-login-page', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Node Intro', instructor_id: 2, topic_id: 6, type_id: 3, link: 'https://github.com/gSchool/g19-course-curriculum/tree/master/week07/07_lectures/node-intro', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Node Modules', instructor_id: 4, topic_id: 6, type_id: 3, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1232', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Callback Hell', instructor_id: 0, topic_id: 5, type_id: 5, link: 'http://jsbin.com/yohoguroza/1/edit?js, console', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Learn You Node', instructor_id: 0, topic_id: 6, type_id: 5, link: 'https://github.com/workshopper/learnyounode', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Node Modules Video Part 2', instructor_id: 0, topic_id: 6, type_id: 5, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1232', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Xs and Os', instructor_id: 0, topic_id: 5, type_id: 6, link: '', assignmentDt: '2/16/16  07:41:21', feedbackDt: '2/19/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Todo List', instructor_id: 0, topic_id: 5, type_id: 2, link: 'https://github.com/gSchool/simple-todo-list', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'HTTP Reading', instructor_id: 0, topic_id: 7, type_id: 2, link: 'https://docs.google.com/presentation/d/1tjUGGp8QqTKQIlnPvmZNb1UnAxrW7vqK-Rrhoy9ijJk/edit?usp=sharing', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Creating an HTTP Server with Node ', instructor_id: 2, topic_id: 6, type_id: 3, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1307', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'node-http-file-server', instructor_id: 2, topic_id: 6, type_id: 5, link: 'https://github.com/gSchool/node-http-server-intro', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'node-url-parsing', instructor_id: 2, topic_id: 6, type_id: 5, link: 'https://github.com/gSchool/node-query-string-parsing', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Colors & Node', instructor_id: 4, topic_id: 6, type_id: 6, link: 'https://github.com/gSchool/colors-with-node', assignmentDt: '2/17/16  07:41:21', feedbackDt: '2/20/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Express Intro', instructor_id: 1, topic_id: 3, type_id: 1, link: 'https://github.com/gSchool/express-introduction', assignmentDt: '2/18/16  07:41:21', feedbackDt: '2/21/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Express Intro', instructor_id: 1, topic_id: 3, type_id: 3, link: 'http://expressjs.com/en/starter/basic-routing.html', assignmentDt: '2/18/16  07:41:21', feedbackDt: '2/21/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Server Side Requests ', instructor_id: 2, topic_id: 7, type_id: 3, link: 'https://github.com/gSchool/g19-course-curriculum/tree/master/week07/07_lectures/node-server-side-requests', assignmentDt: '2/18/16  07:41:21', feedbackDt: '2/21/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Route Calculator', instructor_id: 0, topic_id: 7, type_id: 6, link: 'https://github.com/gSchool/route-calculator', assignmentDt: '2/18/16  07:41:21', feedbackDt: '2/21/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Todo List+', instructor_id: 0, topic_id: 5, type_id: 2, link: '', assignmentDt: '2/19/16  07:41:21', feedbackDt: '2/22/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Express (continued', instructor_id: 3, topic_id: 3, type_id: 3, link: '', assignmentDt: '2/19/16  07:41:21', feedbackDt: '2/22/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Review Routes & Serving Pages', instructor_id: 0, topic_id: 7, type_id: 3, link: '', assignmentDt: '2/19/16  07:41:21', feedbackDt: '2/22/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Restaurant Project Week 1', instructor_id: 0, topic_id: 7, type_id: 4, link: 'https://github.com/gSchool/g19-restaurants-crud-project', assignmentDt: '2/19/16  07:41:21', feedbackDt: '2/22/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Express: Mail Merge', instructor_id: 4, topic_id: 3, type_id: 1, link: 'https://github.com/gSchool/express-introduction/blob/master/05-mail-merge/README.md', assignmentDt: '2/22/16  07:41:21', feedbackDt: '2/25/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Javascript Callbacks', instructor_id: 0, topic_id: 5, type_id: 2, link: 'http://javascript.tutorialhorizon.com/2015/07/03/callback-function-javascript-tutorial/', assignmentDt: '2/22/16  07:41:21', feedbackDt: '2/25/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Deploying to Heroku', instructor_id: 5, topic_id: 2, type_id: 3, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1256', assignmentDt: '2/22/16  07:41:21', feedbackDt: '2/25/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Weather App', instructor_id: 1, topic_id: 1, type_id: 1, link: 'https://github.com/gSchool/sql-curriculum/blob/master/Unit-01-Intro/README.md', assignmentDt: '2/23/16  07:41:21', feedbackDt: '2/26/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Stack Overflow SQL', instructor_id: 0, topic_id: 1, type_id: 2, link: 'http://data.stackexchange.com/stackoverflow/query/new', assignmentDt: '2/23/16  07:41:21', feedbackDt: '2/26/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Intro to SQL,  DDL,  & DML', instructor_id: 1, topic_id: 1, type_id: 3, link: 'https://github.com/gSchool/sql-curriculum/blob/master/Unit-01-Intro/README.md', assignmentDt: '2/23/16  07:41:21', feedbackDt: '2/26/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Callback Exercises', instructor_id: 0, topic_id: 5, type_id: 5, link: 'https://github.com/gSchool/javascript_timers_callbacks_exercise', assignmentDt: '2/23/16  07:41:21', feedbackDt: '2/26/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'SQL Exercise', instructor_id: 2, topic_id: 1, type_id: 1, link: 'https://github.com/mjhea0/thinkful-mentor/tree/master/sql/sql-join-practice', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Hogwarts', instructor_id: 0, topic_id: 1, type_id: 2, link: 'https://github.com/gSchool/hogwarts-pg', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Joins', instructor_id: 0, topic_id: 1, type_id: 2, link: 'http://slides.com/tylerbettilyon/jointypes/#/', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'SQL & Relational Databases', instructor_id: 2, topic_id: 1, type_id: 3, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1213', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'SQL & Relational Databases', instructor_id: 4, topic_id: 1, type_id: 3, link: 'https://coursework.galvanize.com/redirects/learning_experiences/1255', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Exercise DB', instructor_id: 0, topic_id: 1, type_id: 6, link: 'https://github.com/gSchool/sql-curriculum/blob/master/Unit-02-Relational/02-readme.md', assignmentDt: '2/24/16  07:41:21', feedbackDt: '2/27/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'PostgreSQL', instructor_id: 1, topic_id: 1, type_id: 1, link: 'https://github.com/Bbouley/pg-basics', assignmentDt: '2/25/16  07:41:21', feedbackDt: '2/28/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Intro to CRUD', instructor_id: 2, topic_id: 1, type_id: 1, link: 'https://github.com/gSchool/RESTful-exercise', assignmentDt: '2/25/16  07:41:21', feedbackDt: '2/28/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Galvanize Pet Grooming', instructor_id: 0, topic_id: 1, type_id: 2, link: 'https://github.com/gSchool/galvanize-pet-grooming', assignmentDt: '2/25/16  07:41:21', feedbackDt: '2/28/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Intro to CRUD', instructor_id: 2, topic_id: 1, type_id: 3, link: 'https://docs.google.com/a/galvanize.com/presentation/d/1rJgJPsk6hWjYj8Lb1Rftz8tEZWsdRG-2PkJbUdDTxag/present', assignmentDt: '2/25/16  07:41:21', feedbackDt: '2/28/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Apartments ERD', instructor_id: 0, topic_id: 1, type_id: 6, link: '', assignmentDt: '2/25/16  07:41:21', feedbackDt: '2/28/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Wine Cellar API', instructor_id: 0, topic_id: 7, type_id: 6, link: 'https://github.com/gSchool/wine-cellar-api', assignmentDt: '2/26/16  07:41:21', feedbackDt: '2/29/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' }), 
    knex('curricula').insert({ title: 'Restaurants Project Week 2', instructor_id: 0, topic_id: 1, type_id: 4, link: 'https://github.com/gSchool/g19-restaurants-crud-project/blob/master/instructions/week-2.md', assignmentDt: '2/27/16  07:41:21', feedbackDt: '3/1/16  07:41:21', dtCreated: '1/1/16  07:41:21', dtModified: '1/1/16  07:41:21' })
  );
};
