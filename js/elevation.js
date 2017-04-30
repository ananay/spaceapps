/**
* @Author: ananayarora
* @Date:   2017-04-30T04:51:47+05:30
* @Last modified by:   ananayarora
* @Last modified time: 2017-04-30T05:23:38+05:30
*/


var locations;
var map;

function eqfeed_callback(results) {
     var heatmapData = [];
     for (var i = 0; i < results.features.length; i++) {
         var coords = results.features[i].geometry.coordinates;
         var latLng = new google.maps.LatLng(coords[1], coords[0]);
         heatmapData.push(latLng);
     }
     var heatmap = new google.maps.visualization.HeatmapLayer({
         data: heatmapData,
         dissipating: false,
         map: map
     });
 }

$(document).ready(function(){



    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -33.865427, lng: 151.196123},
          mapTypeId: 'terrain'
        });

        var script = document.createElement('script');

        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
     }

   initMap();

});
