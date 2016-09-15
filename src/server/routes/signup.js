const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Sign Up';
  res.render('signup', renderObject);
});

router.post('/new', (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;
  
  knex('users').insert({
    first_name: first_name,
    last_name: last_name,
    email: email,

  })
  console.log(req.body.first_name);
})
module.exports = router;
