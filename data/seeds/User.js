
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Bob', password: '123', Sector_ID: 1},
        {username: 'Rob', password: '123', Sector_ID: 1},
        {username: 'Slob', password: '123', Sector_ID: 1},
        {username: 'Cob', password: '123', Sector_ID: 2},
        {username: 'Pob', password: '123', Sector_ID: 2},
        {username: 'Sob', password: '123', Sector_ID: 3}
      ]);
    });
};
