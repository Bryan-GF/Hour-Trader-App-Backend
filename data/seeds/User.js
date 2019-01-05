const bcrypt = require('bcryptjs')

hashPassword = (pass) => {
  return bcrypt.hashSync(pass, 8)
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Bob', password: hashPassword('123'), Sector_ID: 1},
        {username: 'Rob', password: hashPassword('123'), Sector_ID: 1},
        {username: 'Slob', password: hashPassword('123'), Sector_ID: 1},
        {username: 'Cob', password: hashPassword('123'), Sector_ID: 2},
        {username: 'Pob', password: hashPassword('123'), Sector_ID: 2},
        {username: 'Sob', password: hashPassword('123'), Sector_ID: 3}
      ]);
    });
};
