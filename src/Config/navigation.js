import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CompanyModule from './CompanyModule';
import Individualprson from './individualmodule';
import {useRoute} from '@react-navigation/native';
import Trainingmodule from './Trainingmodule';
import Traininginstittutemodule from './TrainingInstittute';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    // Logic to handle successful login
    setLoggedIn(true);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens
        }}>
        {/* <Stack.Screen name="login">
              {props => <LoginScreen {...props} onLogin={onLogin} />}
            </Stack.Screen> */}
        {isLoggedIn ? (
          <>
           

            <Stack.Screen name="selectprofile" component={Selectprofile} />
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
          </>
        ) : (
          <>
            {/* If not logged in, show login and signup screens */}
            <Stack.Screen name="intro" component={IntroDuctionSlider} />
            <Stack.Screen name="wellcome" component={Wellcome} />
        <Stack.Screen name="login">
          {props => <LoginScreen {...props} onLogin={onLogin} />}
        </Stack.Screen>

            <Stack.Screen name="forgotpass" component={Forgotpassword} />
            <Stack.Screen name="otpcode" component={OtpScreen} />
            <Stack.Screen name="newpass" component={Newpass} />

            <Stack.Screen name="usersignup" component={Singupscreen} />
            {/* Add more screens as needed */}
          </>
        )}
      </Stack.Navigator>
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
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="saved"
        component={SavedJobScreen}
        options={{
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Messagesscreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: ({color, size}) => (
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
