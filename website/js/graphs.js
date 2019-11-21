$(window).load(function() {
  var jsonData = {
    "Median Income" :[
       { label: "Alabama", y: 44509 },
       { label: "Alaska", y: 75112 },
       { label: "Arizona", y: 52248 },
       { label: "Arkansas", y: 42798 },
       { label: "California", y: 63636 },
       { label: "Colorado",y: 66596 },
       { label: "Connecticut", y: 72889 },
       { label: "Delaware", y: 57756 },
       { label: "D.C.", y: 70071 },
       { label: "Florida", y: 48825 },
       { label: "Georgia", y: 50768 },
      { label: "Hawaii", y: 64514 },
     { label: "Idaho", y: 51624 },
    { label: "Illinois", y: 60413 },
     { label: "Indiana", y: 51642 },
      { label: "Iowa", y: 60855 },
      { label: "Kansas", y: 54865 },
      { label: "Kentucky", y: 42387 },
      { label: "Louisiana", y: 45922},
      { label: "Maine", y: 50756 },
      { label: "Maryland", y: 73594 },
     { label: "Massachusetts", y: 67861 },
      { label: "Michigan", y: 54203 },
       { label: "Minnesota", y: 68730 },
     { label: "Mississippi", y: 40037 },
     { label: "Missouri", y: 59196 },
    { label: "Montana", y: 51395 },
     { label: "Nebraska", y: 60474 },
 { label: "Nevada", y: 52008 },
     { label: "New Hampshire", y: 75675 },
    { label: "New Jersey", y: 68357 },
     { label: "New Mexico", y: 45119 },
      { label: "New York", y: 58005 },
      { label: "North Carolina", y: 50797 },
   { label: "North Dakota", y: 57415 },
    { label: "Ohio", y: 53301 },
      { label: "Oklahoma", y: 47077 },
      { label: "Oregon", y: 60834 },
    { label: "Pennsylvania", y: 60389 },
   { label: "Rhode Island", y: 55701 },
    { label: "South Carolina", y: 46360 },
     { label: "South Dakota", y: 55065 },
  { label: "Tennessee", y: 47330 },
    { label: "Texas", y: 56473 },
      { label: "Utah", y: 66258 },
   { label: "Vermont", y: 59494 },
    { label: "Virginia", y: 61486 },
  { label: "Washington", y: 67243 },
   { label: "West Virginia", y: 42824 },
   { label: "Wisconsin", y: 55425 },
   { label: "Wyoming", y: 60925 },
   ],
   "Population": [
    { label: "Alabama", y: 4858979 },
    { label: "Alaska", y: 738432},
    { label: "Arizona", y: 6828065 },
    { label: "Arkansas", y: 2978204 },
    { label: "California", y: 39144818 },
    { label: "Colorado", y: 5456574},
    { label: "Connecticut", y: 3590886 },
    { label: "Delaware", y: 672228 },
    { label: "D.C.", y: 945934 },
    { label: "Florida", y: 20271272 },
    { label: "Georgia", y: 10214860},
    { label: "Hawaii", y: 431603 },
    { label: "Idaho", y: 1654930 },
    { label: "Illinois", y: 12859995 },
    { label: "Indiana", y: 6619680 },
    { label: "Iowa", y: 3123899 },
    { label: "Kansas", y: 2911641 },
    { label: "Kentucky", y: 4425092 },
    { label: "Louisiana", y: 4670724 },
    { label: "Maine", y: 1329328 },
    { label: "Maryland", y: 6006401 },
    { label: "Massachusetts", y: 6794422 },
    { label: "Michigan", y: 9922576 },
    { label: "Minnesota", y: 5489594 },
    { label: "Mississippi", y: 2992333 },
    { label: "Missouri", y: 6083672 },
    { label: "Montana", y: 1032949 },
    { label: "Nebraska", y: 1896190 },
    { label: "Nevada", y: 2890845 },
    { label: "New Hampshire", y: 1330608 },
    { label: "New Jersey", y: 8958013 },
    { label: "New Melabelico", y: 2085109 },
    { label: "New York", y: 19795791 },
    { label: "North Carolina", y: 10042802 },
    { label: "North Dakota", y: 756927 },
    { label: "Ohio", y: 11613423 },
    { label: "Oklahoma", y: 3911338 },
    { label: "Oregon", y: 4028977 },
    { label: "Pennsylvania", y: 12802503 },
    { label: "Rhode Island", y: 1056298 },
    { label: "South Carolina", y: 4896146 },
    { label: "South Dakota", y: 858469 },
    { label: "Tennessee", y: 6600299 },
    { label: "Telabelas", y: 27469114 },
    { label: "Utah", y: 2995919 },
    { label: "Vermont", y: 626042 },
    { label: "Virginia", y: 8382993 },
    { label: "Washington", y: 7170351 },
    { label: "West Virginia", y: 1844128},
    { label: "Wisconsin", y: 5771337 },
    { label: "Wyoming", y: 586107 },
    ],
    "AvgWeather": [
    { label: "Alabama", y: 64.67130722 },
    { label: "Alaska", y: 33.10533473 },
    { label: "Arizona", y: 55.058667 },
    { label: "Arkansas", y: 59.95512125 },
    { label: "California", y: 57.09359214 },
    { label: "Colorado", y: 40.38842894 },
    { label: "Connecticut", y: 52.35893855 },
    { label: "Delaware", y: 64.00746269 },
    { label: "D.C.", y: 56.7083333 },
    { label: "Florida", y: 73.12601051 },
    { label: "Georgia", y: 64.26267504 },
    { label: "Hawaii", y: 70.34069539},
    { label: "Idaho", y: 44.28545807 },
    { label: "Illinois", y: 54.15456238 },
    { label: "Indiana", y: 53.63479181 },
    { label: "Iowa", y: 50.80616894 },
    { label: "Kansas", y: 56.44804157 },
    { label: "Kentucky", y: 57.22234637 },
    { label: "Louisiana", y: 67.76132853 },
    { label: "Maine", y: 45.31191806 },
    { label: "Maryland", y: 56.08659218 },
    { label: "Massachusetts", y: 50.64678472 },
    { label: "Michigan", y: 44.71927213 },
    { label: "Minnesota", y: 42.69049665 },
    { label: "Mississippi", y: 65.81444316 },
    { label: "Missouri", y: 56.46594142 },
    { label: "Montana", y: 42.49107031 },
    { label: "Nebraska", y: 50.66243546 },
    { label: "Nevada", y: 47.88070386 },
    { label: "New Hampshire", y: 46.48319328 },
    { label: "New Jersey", y: 57.19211823 },
    { label: "New Melabelico", y: 44.16965386 },
    { label: "New York", y: 49.02449506 },
    { label: "North Carolina", y: 60.55525935 },
    { label: "North Dakota", y: 44.22945768 },
    { label: "Ohio", y: 51.85656503 },
    { label: "Oklahoma", y: 60.96828583 },
    { label: "Oregon", y: 48.32215663 },
    { label: "Pennsylvania", y: 52.54529677 },
    { label: "Rhode Island", y: 51.88826816 },
    { label: "South Carolina", y: 63.96115467 },
    { label: "South Dakota", y: 47.34171712 },
    { label: "Tennessee", y: 59.26277178 },
    { label: "Telabelas", y: 66.70062642 },
    { label: "Utah", y: 43.23018735 },
    { label: "Vermont", y: 44.96922216 },
    { label: "Virginia", y: 57.4705503 },
    { label: "Washington", y: 46.07815843 },
    { label: "West Virginia", y: 53.68435754 },
    { label: "Wisconsin", y: 46.30027933 },
    { label: "Wyoming", y: 39.00113101 },
    ]}
   var dataPoints1 = [];
   var chart1 = new CanvasJS.Chart("graph", {
     animationEnabled: true,
     axisX: {
       interval: 1,
       labelMaxWidth: 500,
       labelFontSize:12,
       reversed: true
     },
     axisY2:{
       interlacedColor: "rgba(1,77,101,.2)",
       gridColor: "rgba(1,77,101,.1)",
       title: "States"
     },
     data: [{
       type: 'bar',
       color: "#014D65",
       //xValueFormatString:"D MM h:mm",
       name: "series1",
       dataPoints: dataPoints1 // this should contain only specific serial number data
     }]
   });
   $( "#dd" ).change(function() {
     chart1.options.data[0].dataPoints = [];
     var e = document.getElementById("dd");
     var selected = e.options[e.selectedIndex].value;
     dps = jsonData[selected];
     for(var i in dps) {
       chart1.options.data[0].dataPoints.push({label: dps[i].label, y: dps[i].y});
     }
     chart1.render();
   });
});