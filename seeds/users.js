
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({ first: 'Lina', last: 'Sachuk', email: 'sachuklina@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first: 'Dennis', last: 'Bailey', email: 'bailey.dennis@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first: 'Test', last: 'Student', email: 'test@galvanize.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false})
  );
};
