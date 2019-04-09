      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
            center: new google.maps.LatLng(-37.8136, 144.9631),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          info: {
            icon: iconBase + 'sunny_maps.png' // icon image
          }
          };
          /*     add different types of icons    
           *         parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },*/

        var features = [
          {
                position: new google.maps.LatLng(-37.920, 141.260),
                type: 'info',
                title: "Dartmoor"
          }, {
                position: new google.maps.LatLng(-35.120, 142.000),
                type: 'info',
                title: "Walpeup"
          }, {
                position: new google.maps.LatLng(-36.670, 142.300),
                type: 'info',
                title: "Longerenong"
          }, {
                position: new google.maps.LatLng(-36.280, 143.330),
                type: 'info',
                title: "Charlton"
          }, {
                position: new google.maps.LatLng(-37.150, 146.440),
                type: 'info',
                title: "Mount Buller"
          }, {
                position: new google.maps.LatLng(-36.740, 146.470),
                type: 'info',
                title: "Edi Upper"
          }, {
                position: new google.maps.LatLng(-37.690, 148.470),
                type: 'info',
                title: "Orbost"
          }, {
                position: new google.maps.LatLng(-37.830, 144.980),
                type: 'info', title: "Olympic Park"
          }, {
                position: new google.maps.LatLng(-38.130, 145.260),
                type: 'info', title: "Cranbourne Botanic Gardens"
          }, {
                position: new google.maps.LatLng(-38.310, 141.470),
                type: 'info', title: "Cashmore Airport"
          }, {
                position: new google.maps.LatLng(-38.070, 142.770),
                type: 'info', title: "Mortlake Racecourse"
            }
            /*add more like this 
             * {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
                type: 'library',
                label: "library", // title
            title:"library"// works on hover
          }
             */
        ];

        // Create markers. // add features of the markers here first, then on top function
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
              icon: icons[feature.type].icon,
              label: feature.label,//added
              title: feature.title,//added
            map: map
          });
        });
      }