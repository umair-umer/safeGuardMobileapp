import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Traininginstituteprofileregistry from '../Trainingscreens/Trainingregistration';
Traininginstituteprofileregistry
const Stack = createNativeStackNavigator();
function Traininginstittutemodule() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,  // Hide header for all screens
    }}>
           <Stack.Screen name="Traininginstuteprofileregister" component={Traininginstituteprofileregistry} />
         
</Stack.Navigator>
  )
}

export default Traininginstittutemodule