import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';

interface Props{
    markers?:Marker[];
}

export const Map = ({markers}:Props) => {
// so the variables are instantiated
const {  hasLocation,initialPosition} = useLocation();

if(!hasLocation){
    return<LoadingScreen/>

}


    return (
        <>
    <MapView
          style={{flex:1}}
          showsUserLocation
          initialRegion={{
         latitude: initialPosition.latitude,
         longitude:initialPosition.longitud,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
        </>
    )
}
