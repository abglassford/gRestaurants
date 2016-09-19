const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  renderObject.title = 'Locations';
  res.render('locations', renderObject);
  var neighborhoods = [
    {lat: 52.511, lng: 13.447},
    {lat: 52.549, lng: 13.422},
    {lat: 52.497, lng: 13.396},
    {lat: 52.517, lng: 13.394}
  ];

  var markers = [];
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 52, lng: 13}
    });
  }

  function drop() {
    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
      addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
  }

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
});

module.exports = router;
