import React, {useState, useEffect} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map(){
    return(
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat: 45.421532, lng: -75.69189}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ReservationDetail(){
  return (
    <div style={{ width: "100%", height: "37.5vh" }}>
        <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{height:'100%'}}/>}
            containerElement={<div style={{height:'100%'}}/>}
            mapElement={<div style={{height:'100%'}}/>}
        />
    </div>
    )
}


export default ReservationDetail;