'use strict';

module.exports = function(data, tile, writeData, done) {
 var nodes=[];
  
  for (var i = 0; i < data.osm.osm.length; i++) {
    
    var ft = data.osm.osm.feature(i);
    if (ft.properties.natural=='tree') {
        //if(ft.properties.species)
        //console.log(ft.properties.species);
      nodes.push(ft.toGeoJSON(tile[0], tile[1], tile[2]));
     }
  }
  
  done(null, nodes);
};