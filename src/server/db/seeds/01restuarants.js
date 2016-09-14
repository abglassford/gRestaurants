var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Turkish',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        })
        ,
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Tibetan',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Sudanese',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Basque',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Basque',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Swiss',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Senegalese',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Senegalese',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Russian',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Slovak',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Senegalese',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Russian',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Russian',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Slovak',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Russian',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Spanish',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Rwandan',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Spanish',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Rwandan',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        }),
        knex('restaurants').insert({
          restaurant_name: faker.company.companyName(),
          style: 'Serbian',
          street: faker.address.streetName(),
          city: faker.address.cityPrefix(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode(),
          images: faker.image.imageUrl(),
          description: faker.company.catchPhraseDescriptor()
        })
      ]);
    });
};
