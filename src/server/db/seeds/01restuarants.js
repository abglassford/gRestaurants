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
          images: 'https://lh5.googleusercontent.com/-muCMjyLccbM/V3gUZoU9wCI/AAAAAAAB1-k/FNP58QNEqeQPlLL9WHON1SwXVRYI9E2eQCLIB/s544-k-no/',
          description: 'Creative local farm-to-fork New American cuisine in a warm, rustic, continually packed space. '
        }),
        knex('restaurants').insert({
          restaurant_name: 'Old Major',
          style: 'New American',
          street: '3316 Tejon St',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'http://oldmajordenver.com/wp-content/uploads/2013/03/OM_Outside_32.jpg',
          description: 'Rustic-chic restaurant specializing in elevated dishes from sustainable sources & top-shelf drinks.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Root Down',
          style: 'American',
          street: '1600 W 33rd Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'http://www.rootdowndenver.com/wp-content/gallery/restaurant3/thumbs/thumbs_01.jpg',
          description: 'A converted filling station is an artful, high-energy venue for creative American small plates.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Linger',
          style: 'Eclectic',
          street: '2040 W 30th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80211,
          images: 'https://lh4.googleusercontent.com/-sJudNgZt1s0/UrNsZQtJ16I/AAAAAAAD6oM/nkWsSFJCnR85pZzzA-5MzQLWFavqytwjQ/s408-k-no/',
          description: 'This old mortuary is now a lively restaurant with a rooftop lounge & global small plates.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Aloy Modern Thai',
          style: 'Thai',
          street: '2134 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'http://static1.squarespace.com/static/5659b8ade4b00f188f425de4/57573fa5d51cd4210e964100/57573fa5d51cd4210e964101/1452878529783/Aloy+Modern+doorway+large.jpg?format=500w',
          description: 'Contemporary Thai fare, complemented by craft beer, wine & cocktails, served in stylish surrounds.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Work & Class',
          style: 'Latin American',
          street: '2500 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'http://workandclassdenver.com/images/OurName_MastHead.jpg',
          description: 'Relaxed & cozy location serving homestyle Southern & Latin American cuisine, plus cocktails.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Americatus New-World Italian',
          style: 'Italian',
          street: '2449 Larimer St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://lh5.googleusercontent.com/-5MgSRFG3tWE/VxqMvRGYqQI/AAAAAAAAAIg/bDBcsMwTIT8Jp3ifNjBg4t-Os5_NpMXMQCLIB/s455-k-no/',
          description: 'Refined sandwiches, seasonal Italian dinners & a deli case in a small & artsy, rustic-modern space.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Biju\'s Little Curry Shop',
          style: 'Indian',
          street: '1441 26th St',
          city: 'Denver',
          state: 'CO',
          zip: 80205,
          images: 'https://lh5.googleusercontent.com/-HejjUNzaCYg/VvCzQ7jYuyI/AAAAAAAAHlg/kQqNAxvDDtc-VrWiFJcwiYvSqDsEYobdQ/s415-k-no/',
          description: 'Curry dishes dominate the menu at this Indian spot with compact quarters & brightly hued decor.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Steuben\'s',
          style: 'American',
          street: '523 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80203,
          images: 'https://lh4.googleusercontent.com/-Pvj2XmLWPmc/VczfKRj-kRI/AAAAAAAAACE/cMRZsadiLsoSqhBmgzQnQ1vgkVjwkaDrg/s408-k-no/',
          description: 'Classic regional American favorites & cocktails make up the menu at this buzzing, retro-style diner.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Yard House',
          style: 'American',
          street: '1555 Court Pl',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'http://media.yardhouse.com/en_us/images/marketing/lakewood-co-yard-house-599x430.jpg.jpg',
          description: 'High-end sports-bar chain with a huge menu of New American fare & an extensive list of draft beers.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'The District Bistro',
          style: 'Bistro',
          street: '1320 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80218,
          images: 'https://lh5.googleusercontent.com/proxy/JfC2lnMRQ1Zht2-AKMftmYgLZgrgmy_DAKsbmIg4t9b6rQNHqe-w0CqRiB9ynzWVcvyDIHixiiaaXIib48sBGAdQUhx6XR6PfjU01Aombiz7ZxobPHPJWWJ4MaacR-a8a2dMpV0xguAxOeRqGesDhdc5A1UxkA=w455-h256',
          description: 'Sophisticated American bar & grill for elevated pub-grub classics such as Reuben fries.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Paramount Cafe',
          style: 'American',
          street: '519 16th St',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'http://svcdn.simpleviewinc.com/v3/cache/www_denver_org/F223DBAABE551426997C02AE0614865C.jpg',
          description: 'American pub-grub purveyor housed in the Paramount Theatre that has a lively sports-bar-like scene.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'The Delectable Egg',
          style: 'Breakfast',
          street: '1625 Court Pl',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://media-cdn.tripadvisor.com/media/photo-s/02/06/74/9d/delectable-egg.jpg',
          description: 'Bright, casual dinerlike branch of a 1982 local chain specializing in American breakfasts & lunches.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Rialto Cafe',
          style: 'American',
          street: '934 16th St, Denver',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'https://livinitupdenver.files.wordpress.com/2011/10/imag0526.jpg',
          description: 'American fare plus people-watching from the clubby dining room & sidewalk seats.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Euclid Hall Bar and Kitchen',
          style: 'American',
          street: '1317 14th St',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'http://denver.thedrinknation.com/images/bars/EuclidHallDenver.jpg',
          description: 'High-concept eclectic bar bites & a carefully sourced beer list in an industrial-modern pub setting.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'ChoLon Modern Asian Bistro',
          style: 'Asian',
          street: '1555 Blake St ',
          city: 'Denver',
          state: 'CO',
          zip: 80202,
          images: 'http://www.milehighhappyhour.com/wp-content/uploads/2013/11/Cholon-1000x500.jpg',
          description: 'Chef Lon Symensma puts together an elegant Southeast Asian menu at this sleek dining destination.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Park Tavern and Restaurant',
          style: 'American',
          street: '931 E 11th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80218,
          images: 'http://theparktaverndenver.com/wp-content/uploads/2014/05/Picture-018.jpg',
          description: 'Drink specials & all-day comfort food draw a younger crowd to this neighborhood watering hole.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Shells and Sauce',
          style: 'Italian',
          street: '2600 E 12th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80206,
          images: 'http://2.bp.blogspot.com/-JIKwcSgIWng/UWnTMOto3OI/AAAAAAAAA0M/wAzi_8gnlYo/s1600/IMG_5627.JPG',
          description: 'Jazzy little trattoria serving classic & creative fare, plus brunch & happy hour on the roof deck.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'Beast + Bottle',
          style: 'American',
          street: '719 E 17th Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80203,
          images: 'https://lh3.googleusercontent.com/-elykJNqsLOs/VNvZbJPrpTI/AAAAAAAAAAc/H9-6Yh555MwaqUESWUPVtoDrdQ1uuXJHA/s408-k-no/',
          description: 'Cozy sibling-run eatery known for carefully sourced contemporary American cuisine & a boutique bar.'
        }),
        knex('restaurants').insert({
          restaurant_name: 'MEZCAL COLFAX',
          style: 'Mexican',
          street: '3230 E Colfax Ave',
          city: 'Denver',
          state: 'CO',
          zip: 80206,
          images: 'http://diningout.com/denverboulder/wp-content/uploads/sites/13/2015/06/Mezcal.jpg',
          description: 'Homestyle Mexican eats, margaritas & a long tequila list in a high-energy dining room.'
        })
      ]);
    });
};
