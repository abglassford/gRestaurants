(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/');
    const restaurants = require('../routes/restaurants');
    const signup = require('../routes/signup');
    const login = require('../routes/login');
    const reviews = require('../routes/reviews');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/restaurants', restaurants);
    app.use('/signup', signup);
    app.use('/login', login);
    app.use('/reviews', reviews);

  };

})(module.exports);
