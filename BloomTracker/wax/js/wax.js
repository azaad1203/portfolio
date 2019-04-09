  /**
   * The prediction of wax moth will be based on the temperature data that retrieved from the weather api.
   * Then different temperature can reflect the level of wax moth threat. The main idea of the wax moth prediction
   * is to get weather data for all locations, and show the results on a map. Also, the weather data used for wax moth
   * is different compared with the real time weather data. The wax moth data should be the prediction data for the future
   * 5 days.
   */
  let locations = [];
  let key = "4776b61c8c0511023d4948cf5d766248";// the api key of open weather map
let url = 'http://35.189.40.102/api/Locations1';
  let locationRequest = new XMLHttpRequest();
  locationRequest.open("GET",url,true);
  locationRequest.send();
  //saveData();
  function initMap() {
    saveData();
    let selectLocation = document.getElementById("chooseLocation").value;
    let popWindow = new google.maps.InfoWindow();
    let map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: -37.8136, lng: 144.9631},
      zoom: 7,
      mapTypeControl:false,
      mapTypeId:'terrain'
    });
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {lat:position.coords.latitude,lng:position.coords.longitude};
        let latitude = pos.lat;
        let longtitude = pos.lng;
        let connect = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longtitude+"&units=metric"+"&APPID="+key;
        $.ajax({
          url:connect,type:"GET",datatype:"jsonp",success:function (data) {
            console.log(data.list[0].main.temp);
            let tempResult=0;
            for (let i=0;i<data.list.length;i++){
              tempResult+=data.list[i].main.temp;
            }
            let avgResult = (tempResult/40).toPrecision(2);
            let prediction ="Wax moth threat of your current position: "+ waxMoth(avgResult);
            popWindow.setContent(prediction);
            popWindow.open(map,marker);
            google.maps.event.addListener(marker,'click',(function (marker) {
              return function () {
                popWindow.setContent(prediction);
                popWindow.open(map,marker);
              }
            })(marker));
              document.getElementById("currentAddress").innerText = prediction;// in html page
          }
        });
        let marker = new google.maps.Marker({
          position:pos, map:map, title:"You are here"
        });
      })
    }
    if (selectLocation!=null && selectLocation!="") {
      for (let index=0;index<locations.length;index++){
        if (locations[index][3]==selectLocation){
          let selected = new google.maps.Marker({
            position:new google.maps.LatLng(locations[index][1],locations[index][2]),
            map:map,
            title:locations[index][0]
          });
          //Still in this if statement, establish the connection with the weather api to get temperature data.
          let latitude = locations[index][1];
          let longtitude = locations[index][2];
          let connect = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longtitude+"&units=metric"+"&APPID="+key;
          $.ajax({
            url:connect,
            type:"GET",
            datatype:"jsonp",
            success:function (data) {
              console.log(data.list.length);
              let suggestion = "The risk of wax moth appearing at " + locations[index][0]+" is "+waxMoth(processTemperature(data));
              popWindow.setContent(suggestion);
              popWindow.open(map,selected);
              google.maps.event.addListener(selected,'click',(function (selected) {
                return function(){
                  popWindow.setContent(suggestion);
                  popWindow.open(map,selected);
                }
              })(selected));
              document.getElementById("selectedLocation").innerText = suggestion;// in html page
            }
          });
        }
      }
    }
  }
  function processTemperature(jsonData) {
    let returnvalue=0;
    for (let i=0;i<jsonData.list.length;i++){
      returnvalue+=jsonData.list[i].main.temp;
    }
    returnvalue = (returnvalue/40).toPrecision(3);
    return returnvalue;
  }
  function waxMoth(avg) {
    let recommendation = "";
    if (avg<18 || avg>38){
      if (avg<18){
        recommendation = "Very Low.";
      }else {
        recommendation = "No Risk.";
      }
    }else if (avg>=18 && avg<25){
      recommendation = "Low Risk.";
    }else if (avg>=25 && avg<35){
      if (avg>=28 && avg<=30){
        recommendation="Highest Risk!!"
      }else {
        recommendation="High Risk!"
      }
    }else if (avg>=35 && avg<=38){
      recommendation = "Low Risk.";
    }
    console.log(recommendation);
    return recommendation
  }
  function saveData() {
    if (locationRequest.status==200 && locationRequest.readyState==4){
      let data = JSON.parse(locationRequest.responseText);
      for (let i=0;i<data.length;i++){
        if (locations.length==0){
          locations[0] = [data[i].Loc_name,data[i].Latitude,data[i].Longtitude,data[i].Loc_id];
        } else {
          let l = locations.length;
          locations[l] = [data[i].Loc_name,data[i].Latitude,data[i].Longtitude,data[i].Loc_id];
        }
      }
    }
  }