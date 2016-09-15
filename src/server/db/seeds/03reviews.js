var faker = require('faker');

exports.seed = (knex, Promise) => {
  return knex('restaurants').max('id').then(restaurant => {
    var maxRestaurant = restaurant[0].max;
    return knex('users').max('id').then(user => {
      var maxUser = user[0].max;
      var reviews = [];
      for (var i = 0; i < 20; i++) {
        let promise = knex('reviews').insert({
          rating: faker.random.number({'min': 0, 'max': 5}),
          reviewer_name: faker.name.findName(),
          date: faker.date.past(),
          text: faker.lorem.sentences(),
          user_id: maxUser-i,
          restaurant_id: maxRestaurant-i
        });
        reviews.push(promise);
      }

      return Promise.all(reviews);
    });
  });
};
