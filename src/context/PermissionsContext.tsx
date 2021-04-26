
import React,{ useState,createContext ,useEffect } from 'react';
import { AppState,Platform } from 'react-native';
import {check, PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';

export  interface PermissionsState{
    locationStatus:PermissionStatus;
}

export const permissionsInitState:PermissionsState = {
  locationStatus:'unavailable',

}

type PermissionsContextProps={
    permissions:PermissionsState;
    askLocationPermissions:() =>void;
    checkLocationPermissions:() =>void;
    
}

export const PermissionsContext = createContext({} as PermissionsContextProps); //TODOs que exporta

export const PermissionsProvider = ({children}:any) =>{

  useEffect(() => {
    //Change State Cyclelife
    AppState.addEventListener('change',state=>{
      if( state !=='active' ) return;
        checkLocationPermissions();
    })

  }, [])

  const [permissions, setPermissions] = useState(permissionsInitState);

    const askLocationPermissions = async() =>{

      let permissionStatus:PermissionStatus;

      if(Platform.OS === 'ios'){
     permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      }else{
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
    

      setPermissions({
        ...permissions,
        locationStatus:permissionStatus
      });

    }
    const checkLocationPermissions =  async()=>{
      let permissionStatus:PermissionStatus;

      if(Platform.OS === 'ios'){
     permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      }else{
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
    

      setPermissions({
        ...permissions,
        locationStatus:permissionStatus
      });

    }

   

    return(
        <PermissionsContext.Provider value={{
          permissions,
          askLocationPermissions,
          checkLocationPermissions
          
          
        }}>
              {children}
        </PermissionsContext.Provider>
    )

}
