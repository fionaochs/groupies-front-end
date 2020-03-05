import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


function Map() {
   
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.421532, lng: -75.697189 }} />


      )
    }

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function Mapp() {
    return <div style={{ width: '500px', height: '500px'}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDkXY-WjEgFiZ9rf4y32GmUpgSwUwNtMkE`} 
        loadingElement={<div style={{ height: '50%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '400px' }} />}
        
        
        />
        </div>
    }
    