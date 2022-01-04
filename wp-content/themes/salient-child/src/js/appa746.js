  
jQuery(function($) {
    function availabilityTable() {
  
        var $table = $('#availability-table');
        
        if( $table.length === 0 ) return;
        
        // Call to BuilderCMS for data
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://buildercms.com/cms/CmsService.svc/UnitDataFeed",
          "method": "POST",
          "data": "[{\r\n \"CommunityId\":\"1030\",\r\n \"UserName\":\"EvolutionV\",\r\n\"Password\":\"Ye5h!ht34\"\r\n}]"
        }
        $.ajax( settings ).done(function ( data ) {
          // Only show units that are available
          var availableUnits = data.filter( unit => unit.LotStatus === 'Available' )
			
      
          $table.DataTable({
            paginate: false,
            lengthChange: false,
            filter: true,
            searching: true,
            paging: false,
            info: false,
            order: [[ 2, "desc" ]],
            data: availableUnits,
            columns: [
              { data: "Unit" },
              { data: "Model" },
              { data: "SqFt" },
              { data: "Bed/Bath" },
              { data: "Bed/Bath" },
              { data: "UnitLink" },
			{ data: "360 View" },
            ],
            columnDefs: [
              { targets: [ 5, 6], "orderable": false },
              { targets: 0, "width": "70px" },
              { targets: 1, "width": "90px" },
              { targets: 2, "width": "60px" },
              { targets: 3, "width": "90px" },
              { targets: 4, "width": "90px" },
              { targets: 5, "width": "125px" },
              { targets: 6, "width": "170px" },
              {
                render: function ( data, type, row, meta ) {
                   
                  return data.split('/', 1)
                },
                targets: 3
              },
              {
                render: function (data, type, row, meta) {
//                     console.log(data)
                  return data.split('/')[1]
                },
                targets: 4
              },
              {
                render: function ( data, type, row, meta ) {
                 
                  return '<a title="download floorplan" href="/floorplans" target="_blank" rel="noopener noreferrer">Download Plan</a>'
                },
                targets: 5
              },
				{
                render: function ( data, type, row, meta ) {
//                   console.log(availableUnits)
                  return '<a title="360 view" href="#" class="' + row["Unit"].slice(0,2) +'" >View</a>'
                },
                targets: 6
              },
            ],
          })
        });
      
      }

      availabilityTable()

      function googleMapsLocations(){
        var allMarkers, reflectionsMarker, salesMarker
        var myLatLngss = [];
      
        (function() {
      
          function new_map($el) {
      
            // var
            var $markers = $el.find('.marker');
      
            // map args
            var args = {
              zoom: 16,
              center: new google.maps.LatLng(0, 0),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
      
            // create map               
            var map = new google.maps.Map($el[0], args);
      
            // add a markers reference
            map.markers = [];
      
            // add markers
            $markers.each(function () {
              add_marker($(this), map);
            });
      
            allMarkers        = map.markers
            reflectionsMarker = allMarkers.find(marker => marker.cat === 'reflections')
            salesMarker       = allMarkers.find(marker => marker.cat === 'sales-center')
      
            // center map
            center_initial_map(map);
      
            // return
            return map;
          }
      
          /*
          *  add_marker
          *
          *  This function will add a marker to the selected Google Map
          *
          *  @type    function
          *  @date    8/11/2013
          *  @since   4.3.0
          *
          *  @param   $marker (jQuery element)
          *  @param   map (Google Map object)
          *  @return  n/a
          */
          //  Global to track last opened infowindow on marker clicks
          var lastOpenedWindow;
          // Global to track last opened infowindow on category clicks
          var lastOpenedWindow2;
      
          function add_marker($marker, map) {
            var latlng = new google.maps.LatLng(+$marker.attr('data-lat'), +$marker.attr('data-lng'));
            var icon   = $marker.attr('data-img');
            var cat    = $marker.attr('data-cat');
            var image
      
            if (cat === 'reflections') {
              image = {
                url: icon,
                scaledSize: new google.maps.Size(107, 107),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(53, 53)
              }
            }
            else if (cat === 'sales-center') {
              image = {
                url: icon,
                scaledSize: new google.maps.Size(84, 84),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(42, 42)
              }
            }
            else {
              image = {
                url: icon,
                scaledSize: new google.maps.Size(30, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(15, 15)
              }
            }
      
            // create marker
            var marker = new google.maps.Marker({
              position: latlng,
              map,
              icon: image,
              cat,
              animation: google.maps.Animation.DROP
            });
      
            // add to array
            map.markers.push(marker);
      
            // if marker contains HTML, add it to an infoWindow
            if ($marker.html()) {
              // create info window
              var infowindow = new google.maps.InfoWindow()
              const venue    = document.getElementById( 'venue-name' )
      
              // Display venue name on mouseover below the map
              google.maps.event.addListener(marker, 'mouseover', function () {
                venue.innerHTML     = '<span class="diamond"></span>' + $( $marker.html() ).find( 'h5' ).text()
                venue.style.display = "block"
              });
      
              // Remove venue name on mouseout below the map
              google.maps.event.addListener(marker, 'mouseout', function () {
                venue.style.display = "none"
              });
      
              // show info window when marker is clicked
              google.maps.event.addListener(marker, 'click', function () {
                // remove last open info window before creating new one
                if (lastOpenedWindow) lastOpenedWindow.close()
                if (lastOpenedWindow2) lastOpenedWindow2.close()
                // Set info window options
                infowindow.setOptions({
                  content: $marker.html(),
                  maxWidth: 250
                });
                infowindow.open(map, marker);
                lastOpenedWindow = infowindow
				  var el = document.getElementById('gmap-slider');
			      el.style.display = "none";
				  console.log(el);
				  console.log(marker);
				  console.log(infowindow);
				  console.log("F")
              });
            }
          }
      
          /*
          *  center_map
          *
          *  This function will center the map, showing all markers attached to this map
          *
          *  @type    function
          *  @date    8/11/2013
          *  @since   4.3.0
          *
          *  @param   map (Google Map object)
          *  @return  n/a
          */
      
          function set_bounds( map ) {
            // vars
            var bounds = new google.maps.LatLngBounds()
      
            // loop through all markers and create bounds
            $.each( map.markers, function ( i, marker ) {
      
              var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() )
      
              bounds.extend( latlng )
      
            })
      
            return bounds
          }
      
          function center_initial_map( map ) {
            var bounds = set_bounds( map )
      
            // only 1 marker?
            if (map.markers.length == 1) {
              // set center of map
              map.setCenter(bounds.getCenter())
              map.setZoom(16)
            }
            else {
				
              map.setZoom(16)
				
				$.each( map.markers, function ( i, marker ) {
					
					if (marker.cat == 'sales-center') {
						map.setCenter(marker.getPosition())
					}
      
            	})
				
//               // fit to bounds then zoom in to level 16
//               map.fitBounds(bounds)
//               google.maps.event.addListenerOnce(map, "idle", function () {
//                 map.setZoom(16)
//               })
            }
          }
      
          function center_map( map ) {
            var bounds = set_bounds( map )
      
            map.setCenter( bounds.getCenter() )
          }
      
          /*
          *  document ready
          *
          *  This function will render each map when the document is ready (page has loaded)
          *
          *  @type    function
          *  @date    8/11/2013
          *  @since   5.0.0
          *
          *  @param   n/a
          *  @return  n/a
          */
          // global var
          var map = null;
      
          // $(document).ready(function () {
          var $acfMap = $('.acf-map')
      
          if ( $acfMap.length ) {
      
            $('.acf-map').each(function () {
      
              // create map
              map = new_map($(this));
				
				const centerControlDiv = document.createElement("div");
				centerControlDiv.id = 'gmap-slider';
				centerControlDiv.style.height = "100%";
				centerControlDiv.style.width = "20%";

      const controlUI = document.createElement("div");
      
        controlUI.style.backgroundColor = "#fff";
        controlUI.style.border = "2px solid #fff";
		controlUI.style.height = "100%";
        controlUI.style.borderRadius = "3px";
        controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
        controlUI.style.cursor = "pointer";
        controlUI.style.textAlign = "center";
        controlUI.title = "Click to recenter the map";
        centerControlDiv.appendChild(controlUI);
      
        // Set CSS for the control interior.
        const controlText = document.createElement("div");
      
        controlText.style.color = "rgb(25,25,25)";
        controlText.style.fontFamily = "Roboto,Arial,sans-serif";
        controlText.style.fontSize = "16px";
        controlText.style.lineHeight = "38px";
        controlText.style.paddingLeft = "5px";
        controlText.style.paddingRight = "5px";
        controlText.innerHTML = "";
        controlUI.appendChild(controlText);
				centerControlDiv.style.display = 'none';
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
      
            });
      
            //zoom
            google.maps.event.addListener(map, 'zoom_changed', function (e) {
      
              var zoom = map.getZoom();
      
              if (zoom != 5) {
                var bounds = map.getBounds();
      
                $.each(map.markers, function (i, marker) {
                  var myLatLng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      
                  if (bounds.contains(myLatLng) === true) {
                    myLatLngss.push(myLatLng);
                  }
                  else {
      
                  }
                });
                if (myLatLngss.length > 0) {
                  document.cookie = "coordn=" + myLatLngss;
                  $("#customzm").load(location.href + " #customzm");
                }
              }
      
            });
            google.maps.event.addListener(map, 'dragend', function () {
              var bounds = map.getBounds();
      
              myLatLngss = [];
              $.each(map.markers, function (i, marker) {
      
                var myLatLng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      
                if (bounds.contains(myLatLng) === true) {
                  myLatLngss.push(myLatLng);
                }
                else {
      
                }
                if (myLatLngss.length > 0) {
                  document.cookie = "coordn=" + myLatLngss;
                  $("#customzm").load(location.href + " #customzm");
                }
              });
            });
          }
      
            // Adds a marker to the map and push to the array.
            function addMarker(location) {
              var marker = new google.maps.Marker({
                position: location,
                map: map,
                animation: google.maps.Animation.DROP
              });
              markers.push(marker);
            }
      
            // Sets the map on all markers in the array.
            function setMapOnAll(map, markers) {
              for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
              }
            }
      
            // Removes the markers from the map, but keeps them in the array.
            function clearMarkers(markers) {
              setMapOnAll(null, markers);
            }
      
            // Shows any markers currently in the array.
            function showMarkers(markers) {
              setMapOnAll(map, markers);
            }
      
            const $categoriesSelect = $( '.c-legend_select' )
      
            // Functionality to change markers on map
            $categoriesSelect.on( 'change', function (event) {
              event.preventDefault()
              // remove all windows before creating new one
              if ( lastOpenedWindow ) lastOpenedWindow.close()
      
              // Get category slug of selected option
              const slug = event.target.value
              // Remove all markers except markers with category equal to slug
              const markersArray = allMarkers.filter( marker => marker.cat === slug )
              // Add reflections and sales center to array every time
              markersArray.push( reflectionsMarker, salesMarker )
              // get all markers except the two constant markers in an array
              const markersExceptConstants = allMarkers.filter( marker => marker.cat !== 'reflections' && marker.cat !== 'sales-center' && marker.cat !== slug )
              // clear all markers off map
              clearMarkers( markersExceptConstants )
              // Show only the markers matching slug
              if ( slug === 'all' ) {
                showMarkers( allMarkers )
              }
              else {
                showMarkers( markersArray )
              }
              center_map( map )
            });
      
            const locations = document.getElementsByClassName('location')
      
            // Add listener to each location to bring up info window on map
            Array.from(locations).forEach(location => {
              google.maps.event.addDomListener(location, 'click', function () {
                const lat = $(location).data('lat')
                const lng = $(location).data('lng')
                const title = $(location).data('title')
                const address = $(location).data('address')
				
                const markerFound = allMarkers.find(marker => (
                  marker.position.lat() === lat && marker.position.lng() === lng
                ))
                let infowindow = new google.maps.InfoWindow()
      
                // center map on marker position
                // center_map(map)
                // remove all windows before creating new one
                if (lastOpenedWindow2) lastOpenedWindow2.close()
                const markerHTML = `
                <h5>${title}</h5>
                <p>${address}</p>
              `
                // Set info window options
                infowindow.setOptions({
                  content: markerHTML,
                  maxWidth: 250
                });
                infowindow.open(map, markerFound);
                lastOpenedWindow2 = infowindow
				  
				
		  	    
		  
              })
            })
          // });
        })();
      }
      googleMapsLocations()

 });


  

