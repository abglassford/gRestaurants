
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('position').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
