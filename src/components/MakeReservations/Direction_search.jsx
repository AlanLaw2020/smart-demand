import React from "react"
/*global google*/
import { Row, Col, Container } from 'react-bootstrap';
const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    Marker,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");


const MapWithADirectionsRenderer_2 = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7fei0dvf-f0SLltSVkWeo-rM0wr57bjk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `170%`, width: `105%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillMount() {

            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: new google.maps.LatLng(35.690921, 139.700258),
                destination: new google.maps.LatLng(35.7038, 139.7345),
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            const refs = {}

            this.setState({
                bounds: null,
                center: {
                    lat: 35.690921, lng: 139.700258
                },
                markers: [],
                onMapMounted: ref => {
                    refs.map = ref;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    })
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    const bounds = new google.maps.LatLngBounds();

                    places.forEach(place => {
                        if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport)
                        } else {
                            bounds.extend(place.geometry.location)
                        }
                    });

                    const nextMarkers = places.map(place => ({
                        position: place.geometry.location,
                    }));
                    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                    });
                    // refs.map.fitBounds(bounds);






                },
            })
        }
    }),
)(props =>
    <div>
        <div data-standalone-searchbox="">

        </div>

        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={7}
            center={props.center}
            defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
        >
            <StandaloneSearchBox
                ref={props.onSearchBoxMounted}
                bounds={props.bounds}
                onPlacesChanged={props.onPlacesChanged}
            >
                <input
                    type="text"
                    class="form-control"
                    placeholder="Customized your placeholder"

                />
            </StandaloneSearchBox>


            {props.directions && <DirectionsRenderer directions={props.directions} />}
            {props.markers.map((marker, index) =>
                <Marker key={index} position={marker.position} />
            )
            }
        </GoogleMap>
    </div>
);

export default MapWithADirectionsRenderer_2;