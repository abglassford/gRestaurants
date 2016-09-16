const knex = require('../db/knex');
function verify(req, res, next) {
  //req.checkParams('id', 'Must be valid').notEmpty().isInt();
  req.checkBody('restaurant_name', 'Restaurant name cannot be empty').notEmpty();
  req.checkBody('city', 'City name cannot be empty').notEmpty();
  req.checkBody('state', 'State name cannot be empty').notEmpty();
  // req.checkBody('style', 'style cannot be empty').notEmpty();
  //req.checkBody('images', 'Image must be valid URL').isAlpha();
  // req.checkBody('description', 'Description cannot be empty').notEmpty();
  req.checkBody('zip', 'Zip must in format of 80206').notEmpty().len(5);
  req.checkBody('street', 'Street name cannot be empty').notEmpty();

  //req.checkBody('email', 'Must be a valid email').isEmail();
  const renderObject = {};
  renderObject.errors = req.validationErrors();
  // if (errors) {
  //   return res.status(400).json({
  //     message: 'Validation failed',
  //     failures: errors
  //   });
  // }
  if (renderObject.errors) {
    renderObject.formValues = {
      restaurant_name: req.body.restaurant_name,
      city: req.body.city,
      state: req.body.state,
      style: req.body.style,
      images: req.body.images,
      description: req.body.description,
      zip: req.body.zip,
      street: req.body.street
    };
    console.log(renderObject.errors);
    if (req.body.formType === 'new_restaurant') {
      return res.render('new_restaurant', renderObject).status(400);
    }
    if (req.body.formType === 'edit_restaurant') {
      return res.status(404).json({status: 'errror', message: 'That whatever does not exist', data: renderObject.formValues, errors: renderObject.errors });
    }
  }
  else {
    return next();
  }
}

module.exports = {
  verify: verify
};
