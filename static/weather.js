var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1Ijoic3dicnVtbXVuZCIsImEiOiJjazJocHhmcTAxOGZ0M2luMGRieWJ5eHUzIn0.Xdto5EtppW8zslmOeWirIA"
  }).addTo(myMap);
    
  d3.csv("../data/weather-data.csv", function(response) {
  
    console.log(response);
  
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var lat = response[i].latitude;
      var lon = response[i].longitude;
      var tempAVG = +response[i].avg;
      var color;
      console.log(tempAVG);

      if (tempAVG < 20) {
          color = "white";
      }
      else if (tempAVG < 40) {
        color = "lightblue";
      }
      else if (tempAVG < 60) {
          color = "blue";
      }
      else if (tempAVG < 80) {
          color = "purple";
      }
      else if (tempAVG < 100) {
          color = "red";
      }
      else {
          color = "black";
      }
      console.log(color);
  
      heatArray.push([lat,lon]);

      L.circle([lat,lon], {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        // Adjust radius
        radius: 100
      }).addTo(myMap);

    };
  
    
    // var heat = L.heatLayer(heatArray, {
    //   radius: 20,
    //   blur: 35
    // }).addTo(map);
  
  });