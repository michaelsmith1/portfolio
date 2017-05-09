//map__Google---------------
$(function () {
    var Maps;
    var Routes;
    var App;
    var Utils;
    Utils = {
        settings: {
            debug: false
        },
        clickEvent: 'click',
        log: function(what) {
            if ( Utils.settings.debug && window.console ) {
                console.log(what);
            }
        }
    };

    //  fast use
    var clickEvent = Utils.clickEvent,
        _log = Utils.log;
    Maps = {
        load: function() {
            _log( "Map: load script" );
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
                'callback=initMap&key=AIzaSyCoinv0op00s_n1cclfA0ExKG-yrhCGTq4';
            document.body.appendChild(script);
        },
        initSettings: function() {
            _log( "Map: init settings" );
            this.map = null;
            this.marker = null;
            this.settings = {
                zoom: 14,
                center: new google.maps.LatLng(51.711710, 39.194880),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#d5d5d5"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#00bfa5"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "color": "#00bfa5"
                            },
                        ]
                    }
                ],
                scrollwheel: false,
                mapTypeControl: false,
                panControl: true,
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: false,
                streetViewControl: true
            };
        },
        init: function() {
            _log( "Map: init Map" );
            Maps.initSettings();
            Maps.map = new google.maps.Map(document.getElementById('map'),
                Maps.settings);
            Maps.marker = new google.maps.Marker({
                map: Maps.map,
                draggable: false,
                position: new google.maps.LatLng(51.694970, 39.200646)
            });
        }
    };
    //  function assinchrone
    window.initMap = function() {
        Maps.init();
    };
    Routes = {
        init: function() {
            _log( "Routes: init" );
            Maps.load();
        }
    };
    App = {
        init: function() {
            Routes.init();
        }
    };
    if ($('#map').length) {
        App.init();
    }
});