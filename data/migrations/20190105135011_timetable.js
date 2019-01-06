
exports.up = function(knex, Promise) {
    return knex.schema.createTable('timetable', tbl => {
        tbl.increments();
        tbl.integer('User_ID').unsigned().notNullable();
        tbl.foreign('User_ID').references('id').inTable('users');
        tbl.integer('Branch_ID').unsigned().notNullable();
        tbl.foreign('Branch_ID').references('id').inTable('branch');
        tbl.string('start', 128).notNullable();
        tbl.string('end', 128).notNullable();
        tbl.string('type', 256).notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('timetable');
};
