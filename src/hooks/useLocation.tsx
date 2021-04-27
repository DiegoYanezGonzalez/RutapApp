import Geolocation from "@react-native-community/geolocation";
import { useState ,useEffect } from "react";
import { Location } from "../interface/app-interfaces";


export const useLocation = () => {

const [hasLocation, setHasLocation] = useState(false);
const [initialPosition, setInitialPosition] = useState<Location>({
    longitud:0,
    latitude:0
});

    //request to obtain the current coordinates of the person
    useEffect(() => {
        Geolocation.getCurrentPosition(
            ({coords}) => {
                    //here will be the first view of the map
               setInitialPosition({
                   latitude:coords.latitude,
                   longitud:coords.longitude
               });

               setHasLocation(true);

            },
            (err) => console.log({err}),{enableHighAccuracy:true}
         );
    }, [])
//in these variables is stored
    return {
     hasLocation,
     initialPosition
    }
}