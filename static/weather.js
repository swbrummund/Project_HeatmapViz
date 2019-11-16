// const api_key = "pk.eyJ1Ijoic3dicnVtbXVuZCIsImEiOiJjazJocHhmcTAxOGZ0M2luMGRieWJ5eHUzIn0.Xdto5EtppW8zslmOeWirIA"

var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: api_key
  }).addTo(myMap);

  L.geoJson(statesData).addTo(myMap);



var color = ['#ffffff', '#ebf5f2', '#e4eace', '#efda90', '#fac766', '#ffb448', '#ffa333', '#ff9021', '#ff7b11', '#ff6203', '#ff4400', '#ff0000']

  // d3.csv("../data/state-weather-data.csv", function(response) {
  


    function getColor(d) {
        return d > 80 ? color[11] :
               d > 75  ? color[10] :
               d > 70  ? color[9] :
               d > 65  ? color[8] :
               d > 60  ? color[7] :
               d > 55  ? color[6] :
               d > 50  ? color[5] :
               d > 45  ? color[4] :
               d > 40  ? color[3] :
               d > 35  ? color[2] :
               d > 30   ? color[1] :
                        color[0];
    }

    

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.avgtemp),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    
    L.geoJson(statesData, {style: style}).addTo(myMap);
  
  // });