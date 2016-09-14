(function() {
  'use strict';
  $('.restaurantLink').unbind('click').on('click', function(e) {
    e.preventDefault()
    const $this = $(this);
    const restaurant = $this.data('id');
    const data = {
      restaurant_name: restaurant.restaurant_name,
      style: restaurant.style,
      street: restaurant.street,
      city: restaurant.city,
      state: restaurant.state,
      zip: restaurant.zip,
      images: restaurant.images,
      description: restaurant.description
    };
    $.ajax(
    {
      type: 'GET',
      url: `/restaurants/${restaurant.id}/`,
      data:  data
    }).done((success) => {
      if (success.err) {
        success.err.forEach((error) => {
          $('#errors').append('<li class="text-alert">' + error + '</li>');
        });
      }
      else {
        console.log(success);
      }
    }).fail((err) => {
      console.log(err);
    });

  });
}());
