// const api_key = "pk.eyJ1Ijoic3dicnVtbXVuZCIsImEiOiJjazJocHhmcTAxOGZ0M2luMGRieWJ5eHUzIn0.Xdto5EtppW8zslmOeWirIA"

  
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



var color = ['#ffffff', '#ebf5f2', '#e4eace', '#efda90', '#fac766', '#ffb448', '#ffa333', '#ff9021', '#ff7b11', '#ff6203', '#ff4400', '#ff0000']

  // d3.csv("../data/state-weather-data.csv", function(response) {
  
    // console.log(response);
  
    // var heatArray = [];

  
    // for (var i = 0; i < response.length; i++) {
    //   var lat = response[i].latitude;
    //   var lon = response[i].longitude;
    //   var tempAVG = +response[i].avg;
    //   var color;
      // console.log(tempAVG);

    //   if (tempAVG < 20) {
    //       color = "white";
    //   }
    //   else if (tempAVG < 40) {
    //     color = "lightblue";
    //   }
    //   else if (tempAVG < 60) {
    //       color = "blue";
    //   }
    //   else if (tempAVG < 80) {
    //       color = "purple";
    //   }
    //   else if (tempAVG < 100) {
    //       color = "red";
    //   }
    //   else {
    //       color = "black";
    //   }
    //   console.log(color);
  
    //   heatArray.push([lat,lon,tempAVG]);

    function getColor(d) {
        // console.log( d > 80 ? color[11] :
        //     d > 75  ? color[10] :
        //     d > 70  ? color[9] :
        //     d > 65  ? color[8] :
        //     d > 60  ? color[7] :
        //     d > 55  ? color[6] :
        //     d > 50  ? color[5] :
        //     d > 45  ? color[4] :
        //     d > 40  ? color[3] :
        //     d > 35  ? color[2] :
        //     d > 30   ? color[1] :
        //              color[0]);
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

    

    function styleTemp(feature) {
        return {
            fillColor: getColor(feature.properties.avgtemp),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleInc(feature) {
      console.log(feature.properties.medain_income)
      return {
          fillColor: getColor(feature.properties.medain_income),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
          
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

    //   L.circle([lat,lon], {
    //     fillOpacity: 0.75,
    //     color: color,
    //     fillColor: color,
    //     radius: 1000
    //   }).addTo(myMap);

    //   var heat = L.heatLayer([
    //     [50.5, 30.5, 0.2], // lat, lng, intensity
    //     [50.6, 30.4, 0.5],
    //   ], {radius: 25}).addTo(map);

    // };
  
    
    // var heat = L.heatLayer(heatArray, {
    //   radius: 20,
    //   blur: 35
    // }).addTo(myMap);
  
  // });