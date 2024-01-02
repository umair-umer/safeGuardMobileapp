
import React, { useState, useRef } from 'react';
import {FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import securitycompany from '../../Assests/securitycompany.png';
import individual from '../../Assests/individual.png';
import securitytrainer from '../../Assests/securitytrainer.png';
import traininginstitue from '../../Assests/traininginstitue.png';
import armedlicence from '../../Assests/armedlicence.png';
import instructerlicence from '../../Assests/instructerlicence.png';
import GUARDVECTOR from '../../Assests/GUARDVECTOR.png';
import LinearGradient from 'react-native-linear-gradient';
import { calculateFontSize } from '../../Utilites/font';
import axios from 'axios';




const data = [
    { id: 1, text: 'i am a guard' ,image:GUARDVECTOR,screenName: 'selectcategories'},
    { id: 2, text: 'i am a security Company' ,image:securitycompany,screenName: 'Securitycompnay'},
    { id: 3, text: 'i am an Individual' ,image:individual ,screenName: 'Individualmoduel'},
    { id: 4, text: 'i am a Security trainer' ,image:securitytrainer,screenName:'Trainingmodule'},
    { id: 5, text: 'i am a training institute ' ,image:traininginstitue,screenName: 'Traininginstitutemodule'},
    { id: 6, text: 'Get A Armed license ' ,image:armedlicence},
    { id: 6, text: 'Get A INSTRUCTORS license ' ,image:instructerlicence},
    
];
const Selectprofile = ({ navigation,route }) => {
    

    const [buttonColor, setButtonColor] = useState(['#007BFF', '#0056b3']);


    const handleButtonClick =  (screenName) => {
        setButtonColor(['#007BFF', '#0056b3']); // Change button color
        navigation.navigate(screenName);  // Navigate to another screen
    };
  

    const renderButton = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleButtonClick(item.screenName)}>
                <LinearGradient colors={buttonColor} style={styles.buttoncontainer}>
                    <View style={styles.profileview}>
                        <Image resizeMode='center' style={{ width: '100%', height: '100%' }} source={item.image} />
                    </View>
                    <Text style={styles.selectprofiletext}>{item.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            style={styles.arrowcontainer}
            onPress={() => navigation.goBack()}
            >
                <View style={styles.aerrowbackicon}>
                    <Image resizeMode='cover' style={{ width: "100%", height: "100%" }}
                        source={Vector} />
                </View>
            </TouchableOpacity>
            <View style={styles.forgotcontainer}>
                <Text style={styles.forgottext}>Select profile</Text>
                <Text style={styles.forgottextdetail}>Choose your profile for registration</Text>
            </View>

            <View style={styles.maincontainer}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderButton}
                />

            </View>


        </SafeAreaView>
    )
}

export default Selectprofile
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    aerrowbackicon: {
        width: width * 0.04,
        height: height * 0.04,
    },
    arrowcontainer: {
        marginTop: height * 0.04,
        width: width * 0.08,
        height: height * 0.06,
        paddingHorizontal: width * 0.03,
    },
    forgotcontainer: {
        paddingHorizontal: width * 0.05,
    },
    forgottext: {
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "700",
        fontSize: calculateFontSize(30),
    },
    forgottextdetail: {
        color: "#939393",
        fontfamily: "poppins",
        fontWeight: "400",
        fontSize: calculateFontSize(13),
    },
    maincontainer: {
        flex:1,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.03,

    },
    profileview: {
        width: width * 0.5,
        height: height * 0.1,
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                width: width * 0.3,
                height: height * 0.23,
                backgroundColor: 'transparent',

            },
        },),

    },
    buttoncontainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: width * 0.9,
        marginVertical:height*0.01,
        height: height * 0.2,
        
    

        ...Platform.select({
            ios: {
                width: width * 0.9,
                height: height * 0.3,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,

            },
        },),
    },
    selectprofiletext: {
        color: "#ffff",
        fontfamily: "poppins",
        fontWeight: "700",
        fontSize: calculateFontSize(20),
    }
})