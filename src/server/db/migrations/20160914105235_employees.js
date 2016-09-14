
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('position').notNullable();
    table.integer('restaurant_id').notNullable();
    table.foreign('restaurant_id').references('id').inTable('restaurants');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
