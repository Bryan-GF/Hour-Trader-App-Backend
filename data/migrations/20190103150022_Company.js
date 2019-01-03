
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company', tbl => {
      tbl.increments();
      tbl.string('Company_Name', 256)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('company');
};
