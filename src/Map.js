
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import ConcertData from './ConcertData'
import mapstyles from './mapstyle'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12.5}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ styles: mapstyles }}>
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
    </GoogleMap>
))

export default MyMapComponent;