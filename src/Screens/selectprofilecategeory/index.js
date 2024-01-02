
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





const data = [
    { id: 1, text: 'FUGITIVE RECOVERY AGENT' },
    { id: 2, text: 'BODY GUARD' },
    { id: 3, text: 'PRIVATE INVESTIGATIONS' },
    { id: 4, text: 'Armed Security Guard' },
    { id: 5, text: 'Unarmed Security Guard ' },
    { id: 6, text: 'Corporate Security Guard ' },
    { id: 7, text: 'Residential Security Guard ' },
    { id: 8, text: 'Retail Security Guard' },
    { id: 9, text: 'Event Security Guard' },
    { id: 10, text: 'Hospital Security Guard' },
    { id: 11, text: 'Industrial Security Guard' },
    { id: 12, text: 'Transportation Security Guard ' },
    { id: 13, text: 'School Security Guard ' },
    { id: 14, text: 'Bank Security Guard ' },
    { id: 15, text: 'Museum /Art Gallery Security Guard ' },
    
];
const SelectprofileCategeory = ({ navigation }) => {




    const [buttonColor, setButtonColor] = useState(['#007BFF', '#0056b3']);


    const handleButtonClick = (item) => {
        setButtonColor(['#007BFF', '#0056b3']); // Change button color
        navigation.navigate('profileregiter', { profileData: item }); // Navigate to another screen with the selected item
      };
    

      const renderButton = ({ item }) => {
        return (
          <TouchableOpacity onPress={() => handleButtonClick(item)}>
            <LinearGradient colors={buttonColor} style={styles.buttoncontainer}>
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

export default SelectprofileCategeory
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

    buttoncontainer: {
        justifyContent: "center",
        alignItems:"flex-start",
        borderRadius: 15,
        width: width * 0.9,
        marginVertical:height*0.01,
        height: height * 0.08,
        paddingHorizontal:width*0.03,
        
    

        ...Platform.select({
            ios: {
                width: width * 0.9,
                height: height * 0.08,
                justifyContent: "center",
                alignItems:"flex-start",
                borderRadius: 15,
                paddingHorizontal:width*0.03,

            },
        },),
    },
    selectprofiletext: {
        
        color: "#ffff",
        fontfamily: "poppins",
        fontWeight: "400",
        fontSize: calculateFontSize(15),
    }
})