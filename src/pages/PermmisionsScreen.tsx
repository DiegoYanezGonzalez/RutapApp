import React from 'react';
import { useContext } from 'react';
import { View, Text ,StyleSheet, Button, Platform} from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';

const PermmisionsScreen = () => {


const { permissions ,askLocationPermissions} = useContext(PermissionsContext);



    return (
        <View style={styles.container}>
            <Text> Permmisions Screens </Text>

         <Button
          title="Permissions"
          onPress={askLocationPermissions}

         />
             
         <Text>
             { JSON.stringify (permissions,null,5) }
         </Text>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default PermmisionsScreen;
