var faker = require('faker');

exports.seed = (knex, Promise) => {

    return knex('restaurants').max('id').then(restaurant => {
      var maxRestaurant = restaurant[0].max;
      var reviews = [];
      for (var i = 0; i < 20; i++) {
        let promise = knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          position: faker.hacker.verb(),
          restaurant_id: maxRestaurant - i
        });
        reviews.push(promise);
      }

      return Promise.all(reviews);
    });
  };
