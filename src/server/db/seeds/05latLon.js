var faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('restaurants')
    .then(restaurants => {
      let promiseArray = [];
      restaurants.forEach((restaurant) => {
        let promise = knex('restaurants').update({
          lat: faker.address.latitude(),
          lon: faker.address.longitude()
        }).where('id', restaurant.id);
        promiseArray.push(promise);
      });
      return Promise.all(promiseArray);
    });
};
