var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -37.8136, lng: 144.9631 },
        zoom: 7
    }
    );

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-37.920, 141.260),
        map: map, label: "Dartmoor"

        //size: new google.maps.size(20,30)
    });
    //map.addMarker(new MarkerOptions().title("Dartmoor"));

    var m2 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-35.120, 142.000),
            label: "Walpeup",
            map: map
        }
    );
    var m3 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-36.670, 142.300),
            label: "Longerenong",
            map: map
        }
    );
    var m4 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-36.280, 143.330),
            label: "Charlton",
            map: map
        }
    );
    var m5 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-37.150, 146.440),
            label: "Mount Buller",
            map: map
        }
    );
    var m6 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-36.740, 146.470),
            label: "Edi Upper",
            map: map
        }
    );
    var m7 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-37.690, 148.470),
            label: "Orbost",
            map: map
        }
    );
    var m8 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-37.830, 144.980),
            label: "Olympic Park",
            map: map
        }
    );
    var m9 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-38.130, 145.260),
            label: "Cranbourne Botanic Gardens",
            map: map
        }
    );
    var m10 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-38.310, 141.470),
            label: "Cashmore Airport",
            map: map
        }
    );
    var m11 = new google.maps.Marker(
        {
            position: new google.maps.LatLng(-38.070, 142.770),
            label: "Mortlake Racecourse",
            map: map
        }
    );

}