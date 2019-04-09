let locations = [];
let locationURL = 'http://35.189.40.102/api/Locations1';
let locationRequest = new XMLHttpRequest();

locationRequest.open("GET", locationURL, true);
locationRequest.send();
let circle;
let circleList = [];
let map;
function initMap() {
    //locationRequest.onreadystatechange = saveData();
    let selectL = document.getElementById("chooseLocation").value;
    let infowindow = new google.maps.InfoWindow();
    let marker;
    let allMarkers = new Array();
    saveData();
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -37.8136, lng: 144.9631 },
        zoom: 6,
        mapTypeId: 'terrain',
        mapTypeControl: false
    });
    if (selectL != null && selectL != "") {
        let i;
        if (selectL == "allL") {
            //If user selects all locations, then display all markers
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    title: locations[i][0]
                });
                allMarkers.push(marker);
                infowindow.setContent(marker.title);
                infowindow.open(map, marker);
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                circle = new google.maps.Circle({
                    //map:map,
                    center: marker.position,
                    radius: 30000,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.4,
                    strokeWeight: 0.4,
                    fillColor: '#FF0000',
                    fillOpacity: 0.4
                });
                setCircle();
            }
        } else {
            for (i = 0; i < locations.length; i++) {
                if (locations[i][3] == selectL) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        title: locations[i][0]
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker) {
                        return function () {
                            infowindow.setContent(marker.title);
                            infowindow.open(map, marker);
                        }
                    })(marker));
                    allMarkers.push(marker);
                }
            }
        }
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            let currentAddress = new google.maps.LatLng(pos.lat, pos.lng);
            let newMarker = new google.maps.Marker({
                position: pos,
                map: map,
                title: "Your are here"
            });
            infowindow.setContent(newMarker.title);
            infowindow.open(map, newMarker);
            google.maps.event.addListener(newMarker, 'click', (function (current) {
                return function () {
                    infowindow.setContent(current.title);
                    infowindow.open(map, current);
                }
            })(newMarker));
            let showDirection = new google.maps.DirectionsRenderer();
            let service = new google.maps.DirectionsService();
            //let directionService = new google.maps.DirectionService();
            let target;
            showDirection.setMap(map);
            for (let i = 0; i < locations.length; i++) {
                if (locations[i][3] == selectL) {
                    target = new google.maps.LatLng(locations[i][1], locations[i][2]);
                }
            }
            let routeRq = {
                origin: currentAddress,
                destination: target,
                travelMode: 'DRIVING'
            };
            service.route(routeRq, function (result, status) {
                if (status === "OK") {
                    console.log(result, status);
                    showDirection.setDirections(result);

                } else {
                    window.alert("Can't show route");
                }
            })
        });
    }
    cleanCircle();
}
/**
 * The function saveData() is used to cooperate with the onstatechange property of XMLHttpRequest, another solution is to use
 * a async function to do this, but this approach is more clear. All location information, location name, latitude and longitude
 * will be stored in the array locations, and the array locations will be our location information resource to add markers on the
 * map accordingly.
 */
function saveData() {
    if (locationRequest.status == 200 && locationRequest.readyState == 4) {
        let data = JSON.parse(locationRequest.responseText);
        for (let i = 0; i < data.length; i++) {
            //Store the location data and construct the circle array for map.
            if (locations.length == 0) {
                locations[0] = [data[i].Loc_name, data[i].Latitude, data[i].Longtitude, data[i].Loc_id];

            } else {
                let l = locations.length;
                locations[l] = [data[i].Loc_name, data[i].Latitude, data[i].Longtitude, data[i].Loc_id];
            }
        }
    }
}
function cleanCircle() {
    circle.setMap(null);
    circle == null;
}
function setCircle() {
    circle.setMap(map);
}