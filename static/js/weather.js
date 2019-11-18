// const api_key = "pk.eyJ1Ijoic3dicnVtbXVuZCIsImEiOiJjazJocHhmcTAxOGZ0M2luMGRieWJ5eHUzIn0.Xdto5EtppW8zslmOeWirIA"


var statesData = 


var colorTemp = ['#ffffff', '#ebf5f2', '#e4eace', '#efda90', '#fac766', '#ffb448', '#ffa333', '#ff9021', '#ff7b11', '#ff6203', '#ff4400', '#ff0000']

  // d3.csv("../data/state-weather-data.csv", function(response) {
  


    function getColorTemp(d) {
        return d > 80 ? colorTemp[11] :
               d > 75  ? colorTemp[10] :
               d > 70  ? colorTemp[9] :
               d > 65  ? colorTemp[8] :
               d > 60  ? colorTemp[7] :
               d > 55  ? colorTemp[6] :
               d > 50  ? colorTemp[5] :
               d > 45  ? colorTemp[4] :
               d > 40  ? colorTemp[3] :
               d > 35  ? colorTemp[2] :
               d > 30   ? colorTemp[1] :
                        colorTemp[0];
    }
    
    function getColorInc(d) {
      return d > 80 ? colorInc[11] :
             d > 75  ? colorInc[10] :
             d > 70  ? colorInc[9] :
             d > 65  ? colorInc[8] :
             d > 60  ? colorInc[7] :
             d > 55  ? colorInc[6] :
             d > 50  ? colorInc[5] :
             d > 45  ? colorInc[4] :
             d > 40  ? colorInc[3] :
             d > 35  ? colorInc[2] :
             d > 30   ? colorInc[1] :
                      colorInc[0];
  }

    

    function styleTemp(feature) {
        return {
            fillColor: getColorTemp(feature.properties.avgtemp),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    
    function styleInc(feature) {
      return {
          fillColor: getColorTemp(feature.properties.median_income),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
      };
  }
    
  var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });
  L.geoJson(statesData).addTo(myMap);

  var temperature = L.geoJson(statesData, {style: styleTemp});
  var income = L.geoJson(statesData, {style: styleInc});

  var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: api_key
});

  var overlayMaps = {
    "Temperature": temperature,
    "Income": income
  };

  var baseMaps = {
    "Street Map": streetMap
  };

  
myMap = L.map("map",{
  layers: [streetMap, temperature, income]
});



  
  // });