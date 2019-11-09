(function(public) {
    document.addEventListener("DOMReady", function() {
        initMapKit();
        createMap();
        addMarker();
        centerMap();
    });

    function initMapKit() {
        mapkit.init({
            authorizationCallback: function(done) {
                done("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc4UTk3VllBMlIifQ.eyJpc3MiOiJWWDVZTVg5N1g1IiwiaWF0IjoxNTcyODEyNzQ5LCJleHAiOjE2MDc2MzE5NDl9.CE2Yw5stFAJt-9wM6gndbEBT-eXwEjyMEGZ98mn-OwE796OEoTUPut9FHdOJHbgKs9Cgd4ASue_r0baYudBeJw");
            }
        });
    }

    function createMap() {
        public.map = new mapkit.Map("map", {
            colorScheme: mapkit.Map.ColorSchemes.Dark,
            isRotationEnabled: true,
            isZoomEnabled: true,
            showsZoomControl: true,
            showsMapTypeControl: false,
            showsCompass: mapkit.FeatureVisibility.Hidden
        });
    }

    function addMarker() {
        var restaurant = new mapkit.Coordinate(63.431877, 10.2728634);

        var restaurantAnnotation = new mapkit.MarkerAnnotation(restaurant, {
            color: "maroon",
            title: "Restaurant",
            subtitle: "Gamel brynsvei, 7020, Trondheim",
            selected: "true",
            glyphText: ":)"
        });

        public.map.showItems(restaurantAnnotation);
    }

    function centerMap() {
        map.region = new mapkit.CoordinateRegion(
            new mapkit.Coordinate(63.4290637, 10.3130715),
            new mapkit.CoordinateSpan(0.03, 0.05)
        );
    }
})(this);