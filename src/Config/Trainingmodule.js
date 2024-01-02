import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trainingprofileregistry from '../Trainingscreens/Trainingregistration';
import TrainingSuceesfullyRegister from '../Trainingscreens/Sucessfullytrainingregister';
const Stack = createNativeStackNavigator();
function Trainingmodule() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,  // Hide header for all screens
    }}>
           <Stack.Screen name="trainingprofileregister" component={Trainingprofileregistry} />
           <Stack.Screen name="successtrainingregister" component={TrainingSuceesfullyRegister} />
</Stack.Navigator>
  )
}

export default Trainingmodule
