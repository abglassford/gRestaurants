(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurants = require('../routes/restaurants');
    const signup = require('../routes/signup');
    const login = require('../routes/login');

    // *** register routes *** //
    app.use('/index', routes);
    app.use('/restaurants', restaurants);
    app.use('/signup', signup);
    app.use('/login', login);

  };

})(module.exports);
