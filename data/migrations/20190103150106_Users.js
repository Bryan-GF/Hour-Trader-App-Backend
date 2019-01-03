
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128);
        tbl.string('password', 256)
        tbl.integer('Sector_ID').unsigned().notNullable();
        tbl.foreign('Sector_ID').references('id').inTable('branch');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
