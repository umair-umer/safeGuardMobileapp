import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndividualCodeverifiedscreen from '../individualscreen/IndividualCodeverificationsucess';
import Individualmessagescreen from '../individualscreen/Individualmassagescreen';
import IndividualVerifyprocessscreen from '../individualscreen/IndividualVerificationprocessscreen';
import IndividualOneTimeverify from '../individualscreen/Onetimeverificationscreen';
import IndividualJobcategoriesscreen from '../individualscreen/jobcategoriescreen';
import IndividualJobdescriptionscreen from '../individualscreen/Jobdescriptionscreen';
import IndividualJoblocationscreen from '../individualscreen/Joblocationscreen';
import IndividualEmployetypescreen from '../individualscreen/Employmenttypescreen';
import IndividualSalaryexpscreen from '../individualscreen/Salaryscreen';
import IndividualPhotouploadscreen from '../individualscreen/Photouploadscreen';
import IndividualSuceesfullyCompanyRegister from '../individualscreen/suceccfullyregistcompanyscreen';
import Individualprofilescreen from '../individualscreen/Companyproflescreen';
import IndividualmyjobsScreen from '../individualscreen/Companymyjobscreen';
import IndividualProfileregistry from '../individualscreen/companyprofileRegistration';
import Individualjobslectionscreen from '../individualscreen/Individualjobselection';
import IndividualRolescreen from '../individualscreen/Rolescreen';
import IndividualEntercode from '../individualscreen/Entercodescreen';



import RejectedApplications from '../comaanyscreen/rejectapplication';
import ShortList from '../comaanyscreen/shortlis';
import PendingApplicationScreen from '../comaanyscreen/pendingapplication';
import Myjpobapplicantscreen from '../individualscreen/Jobapplicantsscreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Individualprson = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,  // Hide header for all screens
        }}>


            <Stack.Screen name="Individualregister" component={IndividualProfileregistry} />
            <Stack.Screen name="IndividualsuccessCompnyregister" component={IndividualSuceesfullyCompanyRegister} />
            {/* <Stack.Screen name="individualprofile" component={Individualprofilescreen} /> */}
            <Stack.Screen name="Individualbottomtab" component={IndividualTab} />
            <Stack.Screen name="individualOtp" component={IndividualOneTimeverify} />
            <Stack.Screen name="individualverifyprocess" component={IndividualVerifyprocessscreen} />
            <Stack.Screen name="individualentercode" component={IndividualEntercode} />
            <Stack.Screen name="individualcodeverify" component={IndividualCodeverifiedscreen} />
            <Stack.Screen name="individualJobcategeory" component={IndividualJobcategoriesscreen} />
            <Stack.Screen name="individualmessage" component={Individualmessagescreen} />
            <Stack.Screen name="individualjobdes" component={IndividualJobdescriptionscreen} />
            <Stack.Screen name="individualjobLoca" component={IndividualJoblocationscreen} />
            <Stack.Screen name="individualempTyp" component={IndividualEmployetypescreen} />
            <Stack.Screen name="individualsalaryscreen" component={IndividualSalaryexpscreen} />
            <Stack.Screen name="individualrolescreen" component={IndividualRolescreen} />
            <Stack.Screen name="individualphotolocaton" component={IndividualPhotouploadscreen} />


        </Stack.Navigator>

    )
}



export default Individualprson

function IndividualApplicants() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,  // Hide header for all screens
        }}>
            <Stack.Screen name="Jobapplicants" component={Myjpobapplicantscreen} />
            <Stack.Screen name="pendgingapplication" component={PendingApplicationScreen} />
            <Stack.Screen name="shortlistscreen" component={ShortList} />
            <Stack.Screen name="rejectscreen" component={RejectedApplications} />


        </Stack.Navigator>
    )
}



function IndividualTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBarOptions={{
                activeTintColor: '#1C75BC', // Color for active tab
                inactiveTintColor: 'black', // Color for inactive tabs

            }}
        >
            <Tab.Screen name="Home"
                component={Individualjobslectionscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                }} />
            <Tab.Screen name="Applicants"
                component={IndividualApplicants}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase" size={size} color={color} />
                    ),

                }} />
            <Tab.Screen name="My Jobs"
                component={IndividualmyjobsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="briefcase-outline" size={size} color={color} />
                    ),

                }} />
            <Tab.Screen name="Message"
                component={Individualmessagescreen}
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="message1" size={size} color={color} />
                    ),

                }} />
            <Tab.Screen name="Profile"
                component={Individualprofilescreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase" size={size} color={color} />
                    ),

                }} />


        </Tab.Navigator>
    );
}