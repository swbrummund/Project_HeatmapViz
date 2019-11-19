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

var colorInc = ['#ffffff', '#00g800', '#00f800', '#00e800', '#00d800', '#00C800', '#00B800', '#00A800', '#009800', '#008800', '#007800', '#006800']

var colorTemp = ['#ffffff', '#ebf5f2', '#e4eace', '#efda90', '#fac766', '#ffb448', '#ffa333', '#ff9021', '#ff7b11', '#ff6203', '#ff4400', '#ff0000']

var colorPop = ['#ffffff', '#ccd9ff', , '#b3c6ff', '#99b3ff', '#668cff', '#4d79ff', '#3366ff', '#1a53ff', '#0040ff', '#0033cc', '#002699','#001a66', '00134d']

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
  
  function getColorPop(d) {

    return d > 40000000 ? colorPop[12] :
           d > 35000000  ? colorPop[11] :
           d > 30000000  ? colorPop[10] :
           d > 25000000  ? colorPop[9] :
           d > 20000000  ? colorPop[8] :
           d > 15000000  ? colorPop[7] :
           d > 10000000 ? colorPop[6]:
           d > 7000000  ? colorPop[5] :
           d > 4000000  ? colorPop[4] :
           d > 2000000  ? colorPop[3] :
           d > 1000000  ? colorPop[2] :
           d > 500000   ? colorPop[1] :
                    colorPop[0];
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
      return {
          fillColor: getColorInc(feature.properties.median_income),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.5
          
      };
  }

  function stylePop(feature) {
    return {
        fillColor: getColorPop(feature.properties.population),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
        
    };
}
    
    var temp = L.geoJson(statesData, {style: styleTemp});
    var inc = L.geoJson(statesData, {style: styleInc});
    var pop = L.geoJson(statesData, {style: stylePop});


    var overlayMaps = {
      "Temp": temp,
      "Income": inc,
      "Population": pop
    };
  
    var myMap = L.map("map", {
      center: [37.7749, -122.4194],
      zoom: 5,
      layers: [streetmap, temp, inc, pop]
    });
  
    L.control.layers(baseMaps,overlayMaps, {
      collapsed: false
    }).addTo(myMap);
