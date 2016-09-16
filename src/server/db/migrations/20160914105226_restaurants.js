
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', table => {
    table.increments();
    table.string('restaurant_name').notNullable();
    table.string('style').notNullable();
    table.string('street').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.string('images').notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
