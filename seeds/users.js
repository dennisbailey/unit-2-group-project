
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({ first_name: 'Lina', last_name: 'Sachuk', email: 'sachuklina@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first_name: 'Dennis', last_name: 'Bailey', email: 'bailey.dennis@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first_name: 'Test', last_name: 'Student', email: 'test@galvanize.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false})
  );
};
