function createMap(statesData) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: api_key
    });
  
    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
      "Light Map": lightmap
    };
  
    // Create an overlayMaps object to hold the bikeStations layer
    var overlayMaps = {
      "Temperature": temperature,
      "Income": income
    };
  
    // Create the map object with options
    var myMap = L.map("map", {
      center: [40.73, -74.0059],
      zoom: 4,
      layers: [lightmap, temperature, income]
    });

    L.geoJson(statesData).addTo(myMap);
  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);

  }
  
  function createMarkers(response) {

    var feature = response.features;

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
  
    // Create a layer group made from the bike markers array, pass it into the createMap function
    createMap(L.geoJson(statesData, {style: [styleTemp, styleInc]}));
  }
  
  
  // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
  d3.json("../../data/states_data.json", createMarkers);

  
  