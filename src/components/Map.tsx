import React, { useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';

interface Props{
    markers?:Marker[];
}

export const Map = ({markers}:Props) => {
// so the variables are instantiated
const {  hasLocation,initialPosition,getCurrentLocation } = useLocation();


const mapViewRef = useRef<MapView>();

const  centerPosition = async() => {

const { latitude,longitude }= await getCurrentLocation();

    mapViewRef.current?.animateCamera({
        center:{
         latitude,
         longitude
        }
    })
}


if(!hasLocation){
    return<LoadingScreen/>

}


    return (
        <>
    <MapView
    ref={(el) =>mapViewRef.current = el!}
          style={{flex:1}}
          showsUserLocation
          initialRegion={{
         latitude: initialPosition.latitude,
         longitude:initialPosition.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>

     <Fab
     iconName='compass-outline'
     onPress={centerPosition}
     style={{
        position:'absolute',
        bottom:20,
        right:20
     }}
     />
        </>
    )
}
