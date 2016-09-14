
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments();
    table.integer('rating').notNullable();
    table.string('reviewer_name').notNullable();
    table.date('date').notNullable();
    table.text('text').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('restaurant_id').notNullable();
    table.foreign('restaurant_id').references('id').inTable('restaurants');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
