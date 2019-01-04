
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('branch').del()
    .then(function () {
      // Inserts seed entries
      return knex('branch').insert([
        {Company_ID: 1},
        {Company_ID: 1},
        {Company_ID: 2},
        {Company_ID: 2},
        {Company_ID: 3},
        {Company_ID: 3},
        {Company_ID: 4},
        {Company_ID: 4},
        {Company_ID: 5},
        {Company_ID: 5}
      ]);
    });
};
