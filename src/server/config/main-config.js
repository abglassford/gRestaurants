(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const expressValidator = require('express-validator');

  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const nunjucks = require('nunjucks');
  const cookieSession = require('cookie-session');
  const connect = require('connect');
  const methodOverride = require('method-override');

  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views')
  ];

  // *** load environment variables *** //
  if (process.env.NODE_ENV !== 'production') require('dotenv').config();

  appConfig.init = function(app, express) {

    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: true
    });
    app.set('view engine', 'html');
    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // uncomment if using express-session
    app.use(expressValidator());
    app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
    }));
    app.use(flash());
    app.use(express.static(path.join(__dirname, '..', '..', 'client')));
    app.use(methodOverride('_method'));
  };

})(module.exports);
