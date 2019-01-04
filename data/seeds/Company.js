
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {Company_Name: 'Target'},
        {Company_Name: 'Walmart'},
        {Company_Name: 'Trader Joes'},
        {Company_Name: 'Rite Aid'},
        {Company_Name: 'Walgreens'}
      ]);
    });
};
