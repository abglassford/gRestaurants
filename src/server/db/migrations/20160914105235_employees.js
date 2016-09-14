
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('position').notNullable();
<<<<<<< HEAD
    table.integer('restaurant_id').notNullable();
    table.foreign('restaurant_id').references('id').inTable('restaurants');
  })
=======
  });
>>>>>>> ed9d52af0aae86e93baffe1ea7ddc605bd1c2a92
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
