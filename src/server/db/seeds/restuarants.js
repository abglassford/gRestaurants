var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: faker.company.bsAdjective(),
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.random.image(),
          description: faker.company.catchPhraseDescriptor()
        })
      ]);
    });
};
