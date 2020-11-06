import React, { Component } from 'react';

const directionsResponse = (e) => {
    console.log('directionsResponse called');
    console.log('e', e);
}

class MapQuest extends Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        const mapStyle = {
            height: this.state.height,
            width: this.state.width
        };
        return (
            <div id="map" style={mapStyle}>
                <p style={{ textAlign: 'center' }}>Map loading...</p>
            </div>
        );
    }

    componentDidMount() {
        const leaflet = window.L;

        leaflet.mapquest.key = this.state.apiKey;

        const baseLayer = leaflet.mapquest.tileLayer('map');

        const mapInstance = leaflet.mapquest.map('map', {
            center: this.state.center,
            layers: baseLayer,
            zoom: this.state.zoom,
            pitch: this.state.pitch,
            bearing: this.state.bearing
        });

        mapInstance.addControl(leaflet.mapquest.control());

        leaflet.control.layers({
            'Map': baseLayer,
            'Hybrid': leaflet.mapquest.tileLayer('hybrid'),
            'Satellite': leaflet.mapquest.tileLayer('satellite'),
            'Light': leaflet.mapquest.tileLayer('light'),
            'Dark': leaflet.mapquest.tileLayer('dark')
        }).addTo(mapInstance);

        // // center: [40.7128, -74.0059],
        // leaflet.mapquest.directions().route({
        //   start: 'Boulder, CO',
        // //   via: 'Grand Junction, CO',
        //   end: 'Mountlake Terrace, WA',
        // });

        const directionsControl = leaflet.mapquest.directionsControl({
            className: '',
            directions: {
                options: {
                    timeOverage: 25,
                    doReverseGeocode: false,
                },
            },
            directionsLayer: {
                startMarker: {
                    title: 'Drag to change location',
                    draggable: true,
                    icon: 'marker-start',
                    iconOptions: {
                        size: 'sm'
                    }
                },
                endMarker: {
                    draggable: true,
                    title: 'Drag to change location',
                    icon: 'marker-end',
                    iconOptions: {
                        size: 'sm'
                    }
                },
                viaMarker: {
                    title: 'Drag to change route'
                },
                routeRibbon: {
                    showTraffic: true
                },
                alternateRouteRibbon: {
                    showTraffic: true
                },
                paddingTopLeft: [450, 20],
                paddingBottomRight: [180, 20],

            },
            startInput: {
                compactResults: true,
                disabled: false,
                location: {},
                placeholderText: 'Starting point or click on the map...',
                geolocation: {
                    enabled: true
                },
                clearTitle: 'Remove starting point'
            },
            endInput: {
                compactResults: true,
                disabled: false,
                location: {},
                placeholderText: 'Destination',
                geolocation: {
                    enabled: true
                },
                clearTitle: 'Remove this destination'
            },
            addDestinationButton: {
                enabled: true,
                maxLocations: 10,
            },
            routeTypeButtons: {
                enabled: true,
            },
            reverseButton: {
                enabled: true,
            },
            optionsButton: {
                enabled: true,
            },
            routeSummary: {
                enabled: true,
                compactResults: false,
            },
            narrativeControl: {
                enabled: true,
                compactResults: false,
                interactive: true,
            }
        }, () => {
            console.log('test test test callback');
        }).addTo(mapInstance);

        // const directionsLayer = leaflet.mapquest.directionsLayer({
        //     directionsResponse,
        // }).addTo(mapInstance);

        // leaflet.mapquest.directionsLayer.on('directions_changed', function (eventResponse) {
        //     console.log('New Directions');
        //     console.log(eventResponse);
        // });

        // For direction data - check the cache?!?
    }
}

export default MapQuest
