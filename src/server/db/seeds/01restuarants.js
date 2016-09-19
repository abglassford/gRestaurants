var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          restaurant_name: 'Duo Restaurant',
          style: 'New American',
          street: '2413 W 32nd Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'https://static.pexels.com/photos/3329/food-kitchen-cutting-board-cooking.jpg',
          description: 'Creative local farm-to-fork New American cuisine in a warm, rustic, continually packed space. '
        }),
        knex('restaurants').insert({
          restaurant_name: 'Old Major',
          style: 'New American',
          street: '3316 Tejon St',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg',
          description: 'Rustic-chic restaurant specializing in elevated dishes from sustainable sources & top-shelf drinks.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Root Down',
          style: 'American',
          street: '1600 W 33rd Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg',
          description: 'A converted filling station is an artful, high-energy venue for creative American small plates.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Linger',
          style: 'Eclectic',
          street: '2040 W 30th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'https://static.pexels.com/photos/62097/pexels-photo-62097.jpeg',
          description: 'This old mortuary is now a lively restaurant with a rooftop lounge & global small plates.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Aloy Modern Thai',
          style: 'Thai',
          street: '2134 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://static.pexels.com/photos/41123/pexels-photo-41123.jpeg',
          description: 'Contemporary Thai fare, complemented by craft beer, wine & cocktails, served in stylish surrounds.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Work & Class',
          style: 'Latin American',
          street: '2500 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://static.pexels.com/photos/5205/food-healthy-vegetables-potatoes.jpg',
          description: 'Relaxed & cozy location serving homestyle Southern & Latin American cuisine, plus cocktails.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Americatus New-World Italian',
          style: 'Italian',
          street: '2449 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://static.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg',
          description: 'Refined sandwiches, seasonal Italian dinners & a deli case in a small & artsy, rustic-modern space.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Biju\'s Little Curry Shop',
          style: 'Indian',
          street: '1441 26th St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://static.pexels.com/photos/8572/food-chicken-meat-outdoors.jpg',
          description: 'Curry dishes dominate the menu at this Indian spot with compact quarters & brightly hued decor.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Steuben\'s',
          style: 'American',
          street: '523 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80203,
          images: 'https://static.pexels.com/photos/33307/carrot-kale-walnuts-tomatoes.jpg',
          description: 'Classic regional American favorites & cocktails make up the menu at this buzzing, retro-style diner.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Yard House',
          style: 'American',
          street: '1555 Court Pl',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/131044/pexels-photo-131044.jpeg',
          description: 'High-end sports-bar chain with a huge menu of New American fare & an extensive list of draft beers.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'The District Bistro',
          style: 'Bistro',
          street: '1320 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80218,
          images: 'https://static.pexels.com/photos/5249/bread-food-restaurant-people.jpg',
          description: 'Sophisticated American bar & grill for elevated pub-grub classics such as Reuben fries.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Paramount Cafe',
          style: 'American',
          street: '519 16th St',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/5122/food-healthy-man-person.jpeg',
          description: 'American pub-grub purveyor housed in the Paramount Theatre that has a lively sports-bar-like scene.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'The Delectable Egg',
          style: 'Breakfast',
          street: '1625 Court Pl',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/86753/pexels-photo-86753.jpeg',
          description: 'Bright, casual dinerlike branch of a 1982 local chain specializing in American breakfasts & lunches.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Rialto Cafe',
          style: 'American',
          street: '934 16th St, Denver',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/26799/pexels-photo-26799.jpg',
          description: 'American fare plus people-watching from the clubby dining room & sidewalk seats.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Euclid Hall Bar and Kitchen',
          style: 'American',
          street: '1317 14th St',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/104987/pexels-photo-104987.jpeg',
          description: 'High-concept eclectic bar bites & a carefully sourced beer list in an industrial-modern pub setting.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'ChoLon Modern Asian Bistro',
          style: 'Asian',
          street: '1555 Blake St ',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
          description: 'Chef Lon Symensma puts together an elegant Southeast Asian menu at this sleek dining destination.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Park Tavern and Restaurant',
          style: 'American',
          street: '931 E 11th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80218,
          images: 'https://static.pexels.com/photos/2215/food-salad-healthy-vegetables.jpg',
          description: 'Drink specials & all-day comfort food draw a younger crowd to this neighborhood watering hole.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Shells and Sauce',
          style: 'Italian',
          street: '2600 E 12th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80206,
          images: 'https://static.pexels.com/photos/8758/food-dinner-lemon-rice.jpg',
          description: 'Jazzy little trattoria serving classic & creative fare, plus brunch & happy hour on the roof deck.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Beast + Bottle',
          style: 'American',
          street: '719 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80203,
          images: 'https://static.pexels.com/photos/104985/pexels-photo-104985.jpeg',
          description: 'Cozy sibling-run eatery known for carefully sourced contemporary American cuisine & a boutique bar.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'MEZCAL COLFAX',
          style: 'Mexican',
          street: '3230 E Colfax Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80206,
          images: 'https://static.pexels.com/photos/6461/food-plate-rucola-salad.jpg',
          description: 'Homestyle Mexican eats, margaritas & a long tequila list in a high-energy dining room.'
        })
      ]);
    });
};
