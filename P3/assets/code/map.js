(function(public) {
    document.addEventListener('DOMReady', function() {
        initMapKit()
        createMap()
        addMarker()
    })

    function initMapKit() {
        mapkit.init({
            authorizationCallback: function(done) {
                done(
                    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc4UTk3VllBMlIifQ.eyJpc3MiOiJWWDVZTVg5N1g1IiwiaWF0IjoxNTcyODEyNzQ5LCJleHAiOjE2MDc2MzE5NDl9.CE2Yw5stFAJt-9wM6gndbEBT-eXwEjyMEGZ98mn-OwE796OEoTUPut9FHdOJHbgKs9Cgd4ASue_r0baYudBeJw"
                );
            }
        });
    }   
    
    function createMap() {
        var center = new mapkit.CoordinateRegion(
            new mapkit.Coordinate(63.4290637, 10.3130715),
            new mapkit.CoordinateSpan(0.03, 0.05)
        );
          
        public.map = new mapkit.Map("map", {
            colorScheme: mapkit.Map.ColorSchemes.Dark,
            region: center,
            
            isRotationEnabled: true,
            isZoomEnabled: true,
            showsZoomControl: true,
            showsMapTypeControl: false,
            showsCompass: mapkit.FeatureVisibility.Hidden,
        });
    }

    function addMarker() {
        var MarkerAnnotation = mapkit.MarkerAnnotation;
        var restaurant = new mapkit.Coordinate(63.431877, 10.2728634);
        
        var restaurantAnnotation = new MarkerAnnotation(restaurant, {
            color: "maroon",
            title: "Restaurant",
            subtitle: "Gamel brynsvei, 7020, Trondheim",
            selected: "true",
            glyphText: ":)"
        });
        
        public.map.showItems(restaurantAnnotation);
    }
})(this)

// var clickannotation;
// // Drop an annotation where a Shift-click is detected:
// map.element.addEventListener("click", function(event) {
//   if (!event.shiftKey) {
//     return;
//   }

//   if (clickAnnotation) {
//     map.removeAnnotation(clickAnnotation);
//   }

//   var coordinate = map.convertPointOnPageToCoordinate(
//     new DOMPoint(event.pageX, event.pageY)
//   );
//   clickAnnotation = new MarkerAnnotation(coordinate, {
//     title: "Click!",
//     color: "#c969e0"
//   });
//   map.addAnnotation(clickAnnotation);
// });
// map.region = center;
