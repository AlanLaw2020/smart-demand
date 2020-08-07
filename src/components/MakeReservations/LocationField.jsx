/*global google*/
import * as React from "react";

import Geosuggest, { Suggest } from "react-geosuggest";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import "./geo.css";



export class LocationField extends React.PureComponent {


    

    render() {
        const {
            form: { values, setValues } // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        } = this.props;

        return (
            <div>
                <Geosuggest
                    placeholder="Start typing!"
                    onSuggestSelect={this.onSuggestSelect}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius={20}
                />
                <div>{values.longitude}</div>
                <div>{values.latitude}</div>

                {this.state.defaultCenter && (
                    <MapWithAMarker
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter={this.state.defaultCenter}
                        lat={values.latitude}
                        lng={values.longitude}
                        onClick={x => {
                            const lat = x.latLng.lat();
                            const lng = x.latLng.lng();

                            setValues({
                                ...values,
                                latitude: lat,
                                longitude: lng
                            });
                        }}
                    />
                )}
            </div>
        );
    }
}
