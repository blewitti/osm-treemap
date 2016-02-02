var tilereduce = require('tile-reduce'),
  path = require('path'),
  argv = require('minimist')(process.argv.slice(2));

var opts = {
  zoom: 12,
  sources: [
    {
      name: 'osm',
      mbtiles: path.join(__dirname, '/germany.mbtiles'),
      raw: true
    }
  ],
  map: __dirname+'/trees.js'
};

if (argv.area) opts.bbox = JSON.parse(argv.area);

var result={"type":"FeatureCollection","features":[ ]};



var tilereduce = tilereduce(opts)
.on('reduce', function(nodes){
    result.features=result.features.concat(nodes);

})
.on('end', function(){
 console.log(JSON.stringify(result));
//console.log("total=" + result.features.length );
});
