/*global google*/
import React, { useRef } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 35.6809591, lng: 139.7673068 }}
        onClick={google.maps.KmlMouseEvent | google.maps.MouseEvent}
    >
        <Marker
            position={{ lat: 35.6809591, lng: 139.7673068 }}
            clickable={true}
        />
    </GoogleMap>
));






class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }




    render() {
        return (
            <div>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7fei0dvf-f0SLltSVkWeo-rM0wr57bjk&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `180%` }} />}
                    
                    onClick={x => {
                        const lat = x.latLng.lat();
                        const lng = x.latLng.lng();


                    }}
                />



            </div>
        )
    }
}
export default MyFancyComponent;
