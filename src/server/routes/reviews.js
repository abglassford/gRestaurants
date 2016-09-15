const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id/reviews/new', (req, res, next) => {
  const renderObject = {};
  renderObject.title = req.query.name;
  res.render('new_review', renderObject);
});

router.post('/:id/reviews/new', (req, res, next) => {
  const reviewer_name = req.body.reviewer_name;
  const rating = req.body.rating;

  var date;
  date = new Date();
  date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2);

  const text = req.body.text;
  const user_id = req.body.user_id;
  const renderObject = {};
  const restaurant_id = req.body.id;

  knex('reviews')
  .insert({
    rating: rating,
    reviewer_name: reviewer_name,
    date: date,
    text: text,
    user_id: user_id,
    restaurant_id: restaurant_id
  })
  .returning('id')
  .then(value => {
    res.render(`restaurants/${value}`, renderObject);
  })
  .catch(err => {
    return next(err);
  });
});

module.exports = router;
