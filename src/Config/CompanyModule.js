import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecurityProfileregistry from '../comaanyscreen/companyprofileRegistration';
import SuceesfullyCompanyRegister from '../comaanyscreen/suceccfullyregistcompanyscreen';
import Myjobslectionscreen from '../comaanyscreen/Myjobscreen';
import OneTimeverify from '../comaanyscreen/Onetimeverificationscreen';
import Verifyprocessscreen from '../comaanyscreen/Verificationprocessscreen';
import Entercode from '../comaanyscreen/Entercodescreen';
import Codeverifiedscreen from '../comaanyscreen/Codeverificationsucess';
import Jobcategoriesscreen from '../comaanyscreen/jobcategoriescreen';
import Jobdescriptionscreen from '../comaanyscreen/Jobdescriptionscreen';
import Joblocationscreen from '../comaanyscreen/Joblocationscreen';
import Employetypescreen from '../comaanyscreen/Employmenttypescreen';
import Salaryexpscreen from '../comaanyscreen/Salaryscreen';
import Rolescreen from '../comaanyscreen/Rolescreen';
import Photouploadscreen from '../comaanyscreen/Photouploadscreen';

import Companyprofilescreen from '../comaanyscreen/Companyproflescreen';
import Companymessagescreen from '../comaanyscreen/Companymassagescreen';
import CompanymyjobsScreen from '../comaanyscreen/Companymyjobscreen';
import Myjpobapplicantscreen from '../comaanyscreen/Jobapplicantsscreen';
import PendingApplicationScreen from '../comaanyscreen/pendingapplication';
import ShortList from '../comaanyscreen/shortlis';
import RejectedApplications from '../comaanyscreen/rejectapplication';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CompanyModule = () => {
  const isCompanyRegister = useSelector(
    state => state.authReducer.isCompanyRegister,
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isCompanyRegister && (
        <>
          <Stack.Screen
            name="securityprofileregistry"
            component={SecurityProfileregistry}
          />
          <Stack.Screen
            name="successCompnyregister"
            component={SuceesfullyCompanyRegister}
          />
        </>
      )}
      <Stack.Screen name="companybottomtab" component={CompanyTab} />
      {/* <Stack.Screen name="myjobselect" component={Myjobslectionscreen} /> */}
      <Stack.Screen name="onetimeverified" component={OneTimeverify} />
      <Stack.Screen name="processverified" component={Verifyprocessscreen} />
      <Stack.Screen name="entercodeverified" component={Entercode} />
      <Stack.Screen name="codeverified" component={Codeverifiedscreen} />
      <Stack.Screen name="jobsslect" component={Jobcategoriesscreen} />
      <Stack.Screen name="jobdefine" component={Jobdescriptionscreen} />
      <Stack.Screen name="jobfindloca" component={Joblocationscreen} />
      <Stack.Screen name="jobtypes" component={Employetypescreen} />
      <Stack.Screen name="range" component={Salaryexpscreen} />
      <Stack.Screen name="role" component={Rolescreen} />
      <Stack.Screen name="photolocation" component={Photouploadscreen} />
    </Stack.Navigator>
  );
};

export default CompanyModule;

const Applicants = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Jobapplicants" component={Myjpobapplicantscreen} />
      <Stack.Screen
        name="pendgingapplication"
        component={PendingApplicationScreen}
      />
      <Stack.Screen name="shortlistscreen" component={ShortList} />
      <Stack.Screen name="rejectscreen" component={RejectedApplications} />
    </Stack.Navigator>
  );
};

const CompanyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#1C75BC',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Myjobslectionscreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Application"
        component={Applicants}
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
        component={CompanymyjobsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Companymessagescreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Companyprofilescreen}
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
};
