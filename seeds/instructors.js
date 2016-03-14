
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('instructors').del(), 

    // Inserts seed entries
    knex('instructors').insert({first: 'Bradley', last: 'Bouley'}),
    knex('instructors').insert({first: 'Michael', last: 'Herman'}),
    knex('instructors').insert({first: 'Robby', last: 'Hajek'}),
    knex('instructors').insert({first: 'Wes', last: 'Reid'}),    
    knex('instructors').insert({first: 'Zach', last: 'Klabunde'})
  );
};
