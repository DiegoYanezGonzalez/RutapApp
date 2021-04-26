
import { useState } from 'react';
import {createContext} from 'react';
import {PermissionStatus} from 'react-native-permissions';

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

    const askLocationPermissions = () =>{

    }
    const checkLocationPermissions = ()=>{

    }

    const [permissions, setPermissions] = useState(permissionsInitState);

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
