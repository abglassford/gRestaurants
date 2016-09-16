exports.up = function(knex, Promise) {
  return knex.schema.table('restaurants', table => {
    table.float('lat');
    table.float('lon');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('restaurants', table => {
    table.dropColumn('lat');
    table.dropColumn('lon');
  });
};
