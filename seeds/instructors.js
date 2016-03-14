
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('instructors').del(), 

    // Inserts seed entries
    knex('instructors').insert({first_name: 'Bradley', last_name: 'Bouley'}),
    knex('instructors').insert({first_name: 'Michael', last_name: 'Herman'}),
    knex('instructors').insert({first_name: 'Robby', last_name: 'Hajek'}),
    knex('instructors').insert({first_name: 'Wes', last_name: 'Reid'}),    
    knex('instructors').insert({first_name: 'Zach', last_name: 'Klabunde'})
  );
};
