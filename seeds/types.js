
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('types').del(), 

    // Inserts seed entries
    knex('types').insert({type: 'Exercise'}),
    knex('types').insert({type: 'Homework'}),
    knex('types').insert({type: 'Lecture'}),
    knex('types').insert({type: 'Project'}),
    knex('types').insert({type: 'Stretch Goals'}),
    knex('types').insert({type: 'Warmup'})
  );
};
