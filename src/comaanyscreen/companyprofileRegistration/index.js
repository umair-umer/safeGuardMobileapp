import React, { useState, useRef } from 'react';
import { FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ScrollView, Platform } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import profileimage from '../../Assests/profileimage.png';
import { calculateFontSize } from '../../Utilites/font';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { Button, InputText, Resgistrationsuccesmodal } from '../../Components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const SecurityProfileregistry = ({ navigation }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [licnum, setLicnum] = useState('');

    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numError, setNumError] = useState('');
    const [licnumError, setLicnumError] = useState('');

    const handleRegister = () => {
        // Validation logic
        let isValid = true;

        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (address.trim() === '') {
            setAddressError('Address is required');
            isValid = false;
        } else {
            setAddressError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (num.trim() === '') {
            setNumError('Number is required');
            isValid = false;
        } else {
            setNumError('');
        }

        if (licnum.trim() === '') {
            setLicnumError('Licence number is required');
            isValid = false;
        } else {
            setLicnumError('');
        }

        // If all fields are valid, navigate to the next screen
        if (isValid) {
            navigation.navigate('successCompnyregister', {
                name,
                address,
                email,
                num,
                licnum,
                profileImage,
            });
        }
    };

    const [profileImage, setProfileImage] = useState('')
    const profilepicker = () => {

        let option = {

            storageoption: {
                path: "images"
            }
        }

        launchImageLibrary(option, async (response) => {
            if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                setProfileImage(uri);

                dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
                setProfileImage(uri);
            }
        })
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.arrowcontainer}>
                <TouchableOpacity
                    style={styles.aerrowbackicon}
                    onPress={() => navigation.goBack()}
                >
                    <Image resizeMode='CENTER' style={{ width: "100%", height: "100%" }}
                        source={Vector} />
                </TouchableOpacity>
                <Text style={styles.registration}>Profile Registration</Text>
            </View>
            <View style={styles.procontainer}>
                <View style={styles.profileimage}>
                    {profileImage ? (
                        <View>
                            <Image source={{ uri: profileImage }} 
                            style={{ width: "100%", height: "100%", resizeMode: "cover", }} />
                        </View>
                    ) : (
                        <View style={styles.proplaceholder}></View>
                    )}
                </View>
                <TouchableOpacity style={styles.editprofilebutton} onPress={() => profilepicker()} >
                    <FontAwesome5 resizeMode="center" name="edit" color="#fff" />
                </TouchableOpacity>

            </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: width * 0.04}}>
                <InputText
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.errorText}>{nameError}</Text>

                <InputText
                    placeholder="Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <Text style={styles.errorText}>{addressError}</Text>

                <InputText
                    placeholder="Email Address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.errorText}>{emailError}</Text>

                <InputText
                    placeholder="Mobile Number"
                    keyboardType='numeric'
                    value={num}
                    onChangeText={(text) => setNum(text)}
                />
                <Text style={styles.errorText}>{numError}</Text>

                <InputText
                    placeholder="Security License Number"
                    keyboardType='numeric'
                    value={licnum}
                    onChangeText={(text) => setLicnum(text)}
                />
                <Text style={styles.errorText}>{licnumError}</Text>
            </View>

            <View style={styles.btcontainer}>
                <Button fill={true} name="Register" onPress={handleRegister} />
            </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default SecurityProfileregistry

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.04,
        ...Platform.select({
            ios: {
                flex: 1,
                paddingHorizontal: width * 0.04,
            }
        })


    },
    aerrowbackicon: {
        width: width * 0.04,
        height: height * 0.04,
    },
    arrowcontainer: {
        marginTop: height * 0.04,
        // width: width * 0.08,
        // height: height * 0.06,
        paddingHorizontal: width * 0.03,
        flexDirection: "row",
        alignItems: "center"
    },
    registration: {
        marginHorizontal: width * 0.19,
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
    },
    profileimage: {
        width: width * 0.32,
        height: height * 0.15,
        overflow: "hidden",
        borderRadius: 100,
        ...Platform.select({
            ios: {
                width: width * 0.32,
                height: height * 0.15,
                overflow: "hidden",
                borderRadius: 100,

            },
        },),
    },
    proplaceholder: {
        width: width * 0.32,
        height: height * 0.19,
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "#EAEAEA",
        ...Platform.select({
            ios: {
                width: width * 0.32,
                height: height * 0.18,
                overflow: "hidden",
                borderRadius: 100,
                backgroundColor: "#EAEAEA",

            },
        },),
    },
    procontainer: {
        marginTop: height * 0.07,
        justifyContent: "center",
        alignItems: "center",

    },
    editprofilebutton: {

        width: width * 0.05,
        height: height * 0.03,
        backgroundColor: "#1C75BC",
        // overflow:"hidden",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        bottom: height * 0.03,
        left: width * 0.08,
    },
    btcontainer: {
        bottom:height*0.01,
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: 'red',
        fontSize: calculateFontSize(12),
        paddingHorizontal: width * 0.02,
        // marginTop: height*0.01,
    },

})