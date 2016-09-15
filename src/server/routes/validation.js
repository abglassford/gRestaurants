const knex = require('../db/knex');
function verify(req, res, next) {
  //req.checkParams('id', 'Must be valid').notEmpty().isInt();
  req.checkBody('restaurant_name', 'Restaurant name cannot be empty').notEmpty();
  //req.checkBody('email', 'Must be a valid email').isEmail();

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({
      message: 'Validation failed',
      failures: errors
    });
  } else {
    return next();
  }
}

module.exports = {
  verify: verify
};
