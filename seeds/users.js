
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({ first: 'Lina', last: 'Sachuk', email: 'sachuklina@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first: 'Dennis', last: 'Bailey', email: 'bailey.dennis@gmail.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: true}),
    knex('users').insert({ first: 'Nellie', last: 'Node', email: 'nellie@test.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false}),
    knex('users').insert({ first: 'Jenny', last: 'Javascript', email: 'jenny@test.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false}),
    knex('users').insert({ first: 'Bobby', last: 'Bootstrap', email: 'bobby@test.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false}),
    knex('users').insert({ first: 'Jacques', last: 'Jquery', email: 'jacques@test.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false}),
    knex('users').insert({ first: 'Henrietta', last: 'Http', email: 'henrietta@test.com', password: '$2a$08$qvBFetRokKhgeqHHXZ/zYe0Zdk7Oesgo.4lBW3NNXKkHC//hzJKsm', admin: false})
  );
};
