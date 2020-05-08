'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiemhvdXd1MjExIiwiYSI6ImNrOW5pM2tpaTAyamozbXFyYnc1dDF5NHQifQ.oV4cjeCmEDVA7nXobLvqFA'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zhouwu211/ck9yqlbag2mz21imtepmup29y',
    center: [35.78220, -18.42038],
    zoom: 4.95
})
// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 200,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')


var mining_url = ".data/Mining&Trans_Industry_1.geojson"
map.on('load',function(){
    // define a 'source' for your point dataset
    map.addSource('mining_data',{
      'type':'geojson',
      'data': ".data/Mining&Trans_Industry_1.geojson"
    });
    // add a new layer with your points
    map.addLayer({
      'id':'Industry',
      'type':'circle',
      'source':'mining_data',
      'paint':{
        'circle-radius':10,
        'circle-color': '#ffffff',
        'circle-opacity':0.5
      },
    })
  
  
  });