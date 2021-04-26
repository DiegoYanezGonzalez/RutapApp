import React from 'react';
import { useContext } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

const PermmisionsScreen = () => {


const { permissions ,askLocationPermissions} = useContext(PermissionsContext);



    return (
        <View style={styles.container}>
            <Text style={styles.title}> Es necesario el uso del gps para usar esta aplicación </Text>

         <BlackButton
          title="Permissions"
          onPress={askLocationPermissions}

         />
             
        <Text style={ { marginTop:15 } }>
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
    },
    title:{
        width:200,
        fontSize:18,
        textAlign:'center',
        marginBottom:15
    }
});

export default PermmisionsScreen;
//AIzaSyC9JLO9xk1fnmR_8EZ1k7xUEZJlPCIYiyE