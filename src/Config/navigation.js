import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Forgotpassword,
  Home,
  IntroDuctionSlider,
  JobDetail,
  LoginScreen,
  Messagesscreen,
  MyjobsScreen,
  Newpass,
  OtpScreen,
  ProfileRegistraion,
  Profilescreen,
  SavedJobScreen,
  Selectprofile,
  SelectprofileCategeory,
  SugestedJob,
  Wellcome,
  Prefrencesmodal,
  Searchingjob,
  ApplyjobScreen,
  Loctionsearching,
  Specialization,
  ChatRoom,
  EditProfile,
  Addskillscreen,
  Editworkexpscreen,
  Singupscreen,
} from '../Screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CompanyModule from './CompanyModule';
import Individualprson from './individualmodule';
import { useRoute } from '@react-navigation/native';
import Trainingmodule from './Trainingmodule';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Traininginstittutemodule from './TrainingInstittute';
import { setLoginToken } from '../store/Action';
import { useDispatch } from 'react-redux';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const dispatch = useDispatch()
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  const onLogin = () => {
    // Logic to handle successful login
    setLoggedIn(true);
  };
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('auth_token');
      if (storedToken) {
        dispatch(setLoginToken(storedToken)); // Assuming you handle the token in your Redux store
        setLoggedIn(true);
      }
      setIsCheckingToken(false); // Token check completed
    } catch (error) {
      console.log('Error checking token', error);
      setIsCheckingToken(false);
    }
  };

  if (isCheckingToken) {
    // Optionally, return a loading screen here
    return <Text>Loading...</Text>;
  }



  const AuthenticatedStack = () => {
    // Define your authenticated routes/screens here
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Replace with your actual screens */}
        <Stack.Screen name="selectprofiles" component={Selectprofile} />
        <Stack.Screen
          name="selectcategories"
          component={SelectprofileCategeory}
        />
        <Stack.Screen
          name="profileregiter"
          component={ProfileRegistraion}
        />
        <Stack.Screen name="bottomtab" component={MyTabs} />
        <Stack.Screen name="sugestjobscreen" component={SugestedJob} />
        <Stack.Screen name="jobdetail" component={JobDetail} />
        <Stack.Screen name="jobsearch" component={Searchingjob} />
        <Stack.Screen name="locationsearch" component={Loctionsearching} />
        <Stack.Screen name="jobprefer" component={Prefrencesmodal} />
        <Stack.Screen name="applyjob" component={ApplyjobScreen} />
        <Stack.Screen name="spacial" component={Specialization} />
        <Stack.Screen name="chatroom" component={ChatRoom} />
        <Stack.Screen name="editprofile" component={EditProfile} />
        <Stack.Screen name="addskill" component={Addskillscreen} />
        {/* <Stack.Screen name="bottomtab" component={MyTabs} /> */}
        <Stack.Screen name="workedit" component={Editworkexpscreen} />
        <Stack.Screen name="Securitycompnay" component={CompanyModule} />
        <Stack.Screen name="Individualmoduel" component={Individualprson} />
        <Stack.Screen name="Trainingmodule" component={Trainingmodule} />
        <Stack.Screen
          name="Traininginstitutemodule"
          component={Traininginstittutemodule}
        />
      </Stack.Navigator>
    );
  };

  const UnauthenticatedStack = ({ onLogin }) => {

    return (
      <Stack.Navigator>
     
        <Stack.Screen name="intro" component={IntroDuctionSlider} />
        <Stack.Screen name="wellcome" component={Wellcome} />
        <Stack.Screen name="login">
          {props => <LoginScreen {...props} onLogin={onLogin} />}
        </Stack.Screen>

        <Stack.Screen name="forgotpass" component={Forgotpassword} />
        <Stack.Screen name="otpcode" component={OtpScreen} />
        <Stack.Screen name="newpass" component={Newpass} />

        <Stack.Screen name="usersignup" component={Singupscreen} />
 
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AuthenticatedStack />
      ) : (
        <UnauthenticatedStack onLogin={() => setLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#1C75BC', // Color for active tab
        inactiveTintColor: 'black', // Color for inactive tabs
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="saved"
        component={SavedJobScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Jobs"
        component={MyjobsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Messagesscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Nav;
