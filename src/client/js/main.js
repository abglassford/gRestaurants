(function () {

  console.log('sanity check!');

  $(document).on('submit', '#signup', e => {
    e.preventDefault()
    console.log('YOU DID IT');
    const $first_name = $('#input-first_name').val();
    const $last_name = $('#input-last_name').val();
    const $email = $('#input-email').val();
    const $password = $('#input-password').val()
    const payload = {
      first_name: $first_name,
      last_name: $last_name,
      email: $email,
      password: $password
    };
    $.ajax({
      type: POST,
      // url: //This is where the post route will go//,
      data: payload
    })
    .done(data => {
      location.reload()
      console.log(data);
    })
    .fail(err => {
      console.log(err);
    })
  })

})();
