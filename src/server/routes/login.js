const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In';
  res.render('login', renderObject);
});

router.post('/', (req, res, next) => {
  knex('users').select('*')
  .where('email', req.body.email)
  .first()
  .then(data => {
    var passValid = bcrypt.compareSync(req.body.password, data.password);
    if (passValid === true) {
      req.session.user = {
        dataId: data.id,
        name: data.first_name + ' ' + data.last_name,
        admin: data.admin
      };
      req.session.save();
      console.log(req.session);
    }
    res.redirect('/');
  });
});
module.exports = router;
