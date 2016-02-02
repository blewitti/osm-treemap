# osm-treemap
map all the trees from openstreetmap
Follow these steps to generate a geojson file
1. run npm install
2. Download OSM QA tiles for the required region
3. Edit index.js for correct path of mbtiles file.
4. run node index.js > output.geojson

Upload the output.geojson file to Mapbox Studio and do the styling.
Check out this styling guide
https://www.mapbox.com/blog/mapping-millions-of-dots/

Alternatively mbtiles can be generated using tippecanoe and then upload to Mapbox Studio

