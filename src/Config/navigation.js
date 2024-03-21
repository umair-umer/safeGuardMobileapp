import React from 'react';
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
import Trainingmodule from './Trainingmodule';
import Traininginstittutemodule from './TrainingInstittute';
import {useSelector} from 'react-redux';
import ForgotSMS from '../Screens/forgotpassword/ForgotSMS';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const userToken = useSelector(state => state.authReducer.user);
  const userRole = useSelector(state => state.authReducer.userRole);

  const AuthenticatedStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="bottomtab"
        screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="workedit" component={Editworkexpscreen} />
      </Stack.Navigator>
    );
  };

  const UnauthenticatedStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="intro" component={IntroDuctionSlider} />
        <Stack.Screen name="wellcome" component={Wellcome} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="forgotpass" component={Forgotpassword} />
        <Stack.Screen name="forgotSMS" component={ForgotSMS} />
        <Stack.Screen name="otpcode" component={OtpScreen} />
        <Stack.Screen name="newpass" component={Newpass} />
        <Stack.Screen name="usersignup" component={Singupscreen} />
      </Stack.Navigator>
    );
  };

  const RegisterStack = () => {
    const isCompanyRegister = useSelector(
      state => state.authReducer.isCompanyRegister,
    );
    return (
      <Stack.Navigator
        initialRouteName="selectprofiles"
        screenOptions={{headerShown: false}}>
        {isCompanyRegister ? (
          <>
            <Stack.Screen name="selectprofiles" component={Selectprofile} />
            <Stack.Screen
              name="selectcategories"
              component={SelectprofileCategeory}
            />
            <Stack.Screen
              name="profileregiter"
              component={ProfileRegistraion}
            />
            <Stack.Screen name="Individualmoduel" component={Individualprson} />
            <Stack.Screen name="Trainingmodule" component={Trainingmodule} />
            <Stack.Screen
              name="Traininginstitutemodule"
              component={Traininginstittutemodule}
            />
          </>
        ) : (
          <Stack.Screen name="Securitycompnay" component={CompanyModule} />
        )}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userToken.token ? (
        <UnauthenticatedStack />
      ) : userRole ? (
        <RegisterStack />
      ) : (
        <AuthenticatedStack />
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
