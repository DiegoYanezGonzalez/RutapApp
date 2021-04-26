import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermmisionsScreen from '../pages/PermmisionsScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >
      <Stack.Screen name="Maps" component={MapScreen} />
      <Stack.Screen name="Permissions" component={PermmisionsScreen} />
      
    </Stack.Navigator>
  );
}

