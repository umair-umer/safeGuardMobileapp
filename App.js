import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {SafeAreaView, StatusBar, View} from 'react-native';

import {Wellcome} from './src/Screens';
import Nav from './src/Config/navigation';
import {requestUserPermission} from './src/Utilites/Notification';

function App() {
  useEffect(() => {
    requestUserPermission();
    SplashScreen.hide();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#1C75BC'}} />
      <StatusBar backgroundColor={'#1C75BC'} barStyle="light-content" />
      <Nav />
    </>
  );
}

export default App;
