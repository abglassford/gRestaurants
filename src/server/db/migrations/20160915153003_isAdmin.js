
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.boolean('admin').defaultsTo('false').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('admin');
  });
};
