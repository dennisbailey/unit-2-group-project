
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('topics').del(), 

    // Inserts seed entries
    knex('topics').insert({topic: 'Databases'}),
    knex('topics').insert({topic: 'Deployment'}),
    knex('topics').insert({topic: 'Express'}),
    knex('topics').insert({topic: 'HTML/CSS'}),
    knex('topics').insert({topic: 'JavaScript'}),
    knex('topics').insert({topic: 'Node'}),
    knex('topics').insert({topic: 'Routing'})
  );
};
