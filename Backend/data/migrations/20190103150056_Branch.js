
exports.up = function(knex, Promise) {
    return knex.schema.createTable('branch', tbl => {
        tbl.increments();
        tbl.integer('Company_ID').unsigned().notNullable();
        tbl.foreign('Company_ID').references('id').inTable('company');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('branch');
};
