
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import ConcertData from './ConcertData.js'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12.5}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
    </GoogleMap>
))

export default MyMapComponent;






// function Map(lat, lng) {
   
//     return (
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45, lng: -121 }} />


//       )
//     }

// const WrappedMap = withScriptjs(withGoogleMap(Map));



// export default function Mapp(lat, lng) {
//     return (
//         <div style={{ width: '500px', height: '500px'}}>
//         <WrappedMap 
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDkXY-WjEgFiZ9rf4y32GmUpgSwUwNtMkE`} 
//         loadingElement={<div style={{ height: '50%' }} />}
//         containerElement={<div style={{ height: '400px' }} />}
//         mapElement={<div style={{ height: '400px' }} />}
        
        
//         />
//         </div>
//     )
// }  