var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: api_key
  });

  var baseMaps = {
    "Street Map": streetmap
  };

  L.geoJson(statesData);

var colorInc = ['#ffffff', '#e6ffe6', '#ccffcc', '#b3ffb3', '#99ff99', '#80ff80', '#66ff66', '#4dff4d', '#33ff339', '#1aff1a', '#00ff00', '#00e600', '#00cc00', '#00b300']

var colorTemp = ['#ffffff', '#ebf5f2', '#e4eace', '#efda90', '#fac766', '#ffb448', '#ffa333', '#ff9021', '#ff7b11', '#ff6203', '#ff4400', '#ff0000']


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
    };

    function getColorInc(d) {
      console.log(
               d > 80000 ? colorInc[11] :
               d > 75000  ? colorInc[10] :
               d > 70000  ? colorInc[9] :
               d > 65000  ? colorInc[8] :
               d > 60000  ? colorInc[7] :
               d > 55000  ? colorInc[6] :
               d > 50000  ? colorInc[5] :
               d > 45000  ? colorInc[4] :
               d > 40000  ? colorInc[3] :
               d > 35000  ? colorInc[2] :
               d > 30000   ? colorInc[1] :
                        colorInc[0]);
      return d > 80000 ? colorInc[11] :
             d > 75000  ? colorInc[10] :
             d > 70000  ? colorInc[9] :
             d > 65000  ? colorInc[8] :
             d > 60000  ? colorInc[7] :
             d > 55000  ? colorInc[6] :
             d > 50000  ? colorInc[5] :
             d > 45000  ? colorInc[4] :
             d > 40000  ? colorInc[3] :
             d > 35000  ? colorInc[2] :
             d > 30000   ? colorInc[1] :
                      colorInc[0];
  }
    

    function styleTemp(feature) {
        return {
            fillColor: getColorTemp(feature.properties.avgtemp),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    }

    function styleInc(feature) {
      console.log(feature.properties.median_income)
      return {
          fillColor: getColorInc(feature.properties.median_income),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.5
          
      };
  }
    
    var temp = L.geoJson(statesData, {style: styleTemp});
    var inc = L.geoJson(statesData, {style: styleInc});


    var overlayMaps = {
      "Temp": temp,
      "Income": inc
    };
  
    var myMap = L.map("map", {
      center: [37.7749, -122.4194],
      zoom: 5,
      layers: [streetmap, temp, inc]
    });
  
    L.control.layers(baseMaps,overlayMaps, {
      collapsed: false
    }).addTo(myMap);
