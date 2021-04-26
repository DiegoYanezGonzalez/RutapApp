import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermmisionsScreen from '../pages/PermmisionsScreen';
import { useContext } from 'react';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../pages/LoadingScreen'

const Stack = createStackNavigator();

export const Navigator = () => {

const {permissions} = useContext(PermissionsContext);

  if(permissions.locationStatus === 'unavailable'){
    return<LoadingScreen/>
  }

  return (
    <Stack.Navigator
    
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >

      {
        (permissions.locationStatus === 'granted')
        ? <Stack.Screen name="Maps" component={MapScreen} />

        : <Stack.Screen name="Permissions" component={PermmisionsScreen} />
      }



      
      
      
    </Stack.Navigator>
    //225765239
  );
}

