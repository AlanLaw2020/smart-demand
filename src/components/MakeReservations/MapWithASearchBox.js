import React from "react"
/* global google */


const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const MapWithASearchBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7fei0dvf-f0SLltSVkWeo-rM0wr57bjk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `125%` }} />,
    }),
    lifecycle({
        componentDidMount() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                console.log(position.coords);
            },
                (err) => {
                    console.log(err);
                })
        },
        componentWillMount() {
            const refs = {}

            this.setState({
                bounds: null,
                center: {
                    
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
                    //refs.map.fitBounds(bounds);
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <div>
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={14}
            center={{ lat: this.state.lat, lng: this.state.lng }}
            onBoundsChanged={props.onBoundsChanged}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            draggable={true}
        >





            {props.markers.map((marker, index) =>
                <Marker key={index} position={marker.position} />
            )}
        </GoogleMap>

        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="地名もしくは建物名を入力"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `260px`,
                    height: `32px`,
                    padding: `0 40px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    float: "left",
                }}
            />
        </StandaloneSearchBox>
    </div>
);

export default MapWithASearchBox;