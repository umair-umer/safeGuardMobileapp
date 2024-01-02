import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'

import {View} from 'react-native'

import { Wellcome } from './src/Screens';
import Nav from './src/Config/navigation';
import {requestUserPermission} from './src/Utilites/Notification';

function App() {
  useEffect(() => {
    requestUserPermission()
    SplashScreen.hide();
  }, [])

  return (
  
     <Nav/>
   


  );
}






export default App;
