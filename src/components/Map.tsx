import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';

interface Props{
    markers?:Marker[];
}

export const Map = ({markers}:Props) => {


useEffect(() => {
    Geolocation.getCurrentPosition(
        info => console.log(info),
        (err) => console.log({err}),
        {
            enableHighAccuracy:true
        }
     );
}, [])

    return (
        <>
    <MapView
          style={{flex:1}}
          showsUserLocation
          initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
        </>
    )
}
