import React, { useState, useRef } from 'react';
import {FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import EDITPROFILE from '../../Assests/EDITPROFILE.png';
import profileimage from '../../Assests/profileimage.png';
import idimage from '../../Assests/idimage.png';
import { calculateFontSize } from '../../Utilites/font';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { Button, InputText, Resgistrationsuccesmodal } from '../../Components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Traininginstituteprofileregistry = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [licnum, setLicnum] = useState('');
    const [dob, setDob] = useState('');
   

    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numError, setNumError] = useState('');
    const [licnumError, setLicnumError] = useState('');
    const [dobError, setDobError] = useState('');
   

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const validateFields = () => {
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
         if (dob.trim() === '') {
            setDobError('Date of birth is required');
             isValid = false;
         } else {
             setDobError('');
         }

         
        // Validate other fields and set error states similarly...

        return isValid;
    };
    const clearFields = () => {
        setName('');
        setAddress('');
        setEmail('');
        setNum('');
        setLicnum('');
        setDob('');
    };

    const handleRegister = () => {
        const isFieldsValid = validateFields();

        if (isFieldsValid) {
            toggleModal(); // Show modal or perform other actions when fields are valid
            clearFields();
            navigation.navigate('SuceesfullyCompanyRegister')
        }
    };
    const [selectedImage, setSelectedImage] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const imagepicker = () => {
  
      let option = {
  
          storageoption: {
              path: "images"
          }
      }
  
      launchImageLibrary(option, async (response) => {
          if (response.assets && response.assets.length > 0) {
              const uri = response.assets[0].uri;
              setSelectedImage(uri);
  
              dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
              setSelectedImage(uri);
          }
      })
  }

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
                    <Image resizeMode='cover' style={{ width: "100%", height: "100%" }}
                        source={Vector} />
                </TouchableOpacity>
                <Text style={styles.registration}>Profile Registration</Text>
            </View>
<View style={styles.procontainer}>
    <View style={styles.profileimage}>
    {profileImage ? (
 <View>
          <Image source={{ uri: profileImage }} style={{width:"100%",height:"100%",resizeMode:"cover",}} />
 </View>
        ):(
            <View style={styles.proplaceholder}></View>
        ) }
    </View>
    <TouchableOpacity style={styles.editprofilebutton}  onPress={() => profilepicker ()} >
<FontAwesome5 resizeMode="center" name="edit" color="#fff"/>
    </TouchableOpacity>
    
</View>
<ScrollView showsVerticalScrollIndicator={false} style={styles.scrolcontainer}>
            <InputText placeholder="Name" 
            value={name}
            onChangeText={(text) => setName(text)}
            />
              <Text style={styles.errorText}>{nameError}</Text>
            <InputText placeholder="Address /Location"
            value={address}
            onChangeText={(text) => setAddress(text)}
        />
        <Text style={styles.errorText}>{addressError}</Text>
       <InputText placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.errorText}>{emailError}</Text>
      <InputText placeholder="Mobile Number"
          keyboardType="numeric" 
           value={num}
           onChangeText={(text) => setNum(text)}
       />
       <Text style={styles.errorText}>{numError}</Text>

        {/* <InputText placeholder="Current Company/Organization "
        keyboardType="numeric" 
            value={licnum}
            onChangeText={(text) => setLicnum(text)}
        />
        <Text style={styles.errorText}>{licnumError}</Text>

       <InputText placeholder="Job Position"
           value={dob}
           onChangeText={(text) => setDob(text)}
       />
       <Text style={styles.errorText}>{dobError}</Text> */}


<View style={styles.badgecontertext}>
    <View>
    <Text style={styles.badges}>Add Training Goals</Text>
    <Text style={{color:"#959595"}}>What are your training goals</Text>
    </View>
    {/* <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => imagepicker()}
          >
          <Text style={styles.changephoto}>Change photo</Text>
          </TouchableOpacity> */}
</View>

<View style={styles.badgeimagecontainer}>
    <View style={styles.badgeimagecontainerpareent}>
        <View style={{flexDirection:"row"}}>
       <Text style={{color:"#000",fontWeight:"700"}}>
        Level 1
        <Text style={{fontSize:calculateFontSize(13),fontWeight:"600",color:"#545454"}}>
       Training typically covers foundational security concepts and basic skills.
       </Text>
       </Text>
       </View>

       <View style={{flexDirection:"row",marginVertical:height*0.016}}>
       <Text style={{color:"#000",fontWeight:"700"}}>
        Level 2
        <Text style={{fontSize:calculateFontSize(13),fontWeight:"600",color:"#545454"}}>
       Training typically covers foundational security concepts and basic skills.
       </Text>
       </Text>
       </View>

       <View style={{flexDirection:"row",marginVertical:height*0.01}}>
       <Text style={{color:"#000",fontWeight:"700"}}>
        Level 3
        <Text style={{fontSize:calculateFontSize(13),fontWeight:"600",color:"#545454"}}>
       Training typically covers foundational security concepts and basic skills.
       </Text>
       </Text>
       </View>

       <View style={{flexDirection:"row",marginVertical:height*0.01}}>
       <Text style={{color:"#000",fontWeight:"700"}}>
        Level 4
        <Text style={{fontSize:calculateFontSize(13),fontWeight:"600",color:"#545454"}}>
       Training typically covers foundational security concepts and basic skills.
       </Text>
       </Text>
       </View>


       <View style={{width:width*0.8,marginVertical:height*0.01}}>
     
        <Text style={{fontSize:calculateFontSize(13),fontWeight:"600",color:"#545454",textTransform:"capitalize"}}>
        AND THERE IS ADDITTIONAL TRAINING FOR HANDCUFFING , OC SPRAY WHICH IS PEPPER SPRAY, REPORT WRITTING CLASSES, TASER TRAINING, HANDGUN TRAINING, SELF DEFENSE TRAINING AND PRIVATE INVESTIGATOR CERTIFICATION
       </Text>
    
       </View>


 


    </View>
</View>


<View style={styles.btcontainer}>
    <Button fill={true} name="Register" onPress={handleRegister} onPresss={()=>{setModalVisible(false)}} />
</View>

</ScrollView>


< Resgistrationsuccesmodal isModalVisible={isModalVisible} onPress={()=>{navigation.navigate("bottomtab"),setModalVisible(false)}} />
            </SafeAreaView>
  )
}

export default Traininginstituteprofileregistry
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
        // width: width * 0.08,
        // height: height * 0.06,
        paddingHorizontal: width * 0.03,
        flexDirection:"row",
        alignItems:"center"
    },
    registration:{
        marginHorizontal:width*0.19,
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
    },
    profileimage:{
        width:width*0.3,
        height:height*0.14,
        overflow:"hidden",
        borderRadius:100,
        ...Platform.select({
            ios: {
                width:width*0.32,
                height:height*0.18,
                overflow:"hidden",
                borderRadius:100,

            },
        },),
    },

    proplaceholder:{
        width:width*0.3,
        height:height*0.14,
        overflow:"hidden",
        borderRadius:100,
        backgroundColor:"#EAEAEA",
        ...Platform.select({
            ios: {
                width:width*0.32,
                height:height*0.18,
                overflow:"hidden",
                borderRadius:100,
                backgroundColor:"#EAEAEA",

            },
        },),
    },
    procontainer:{
        marginTop:height*0.07,
        justifyContent:"center",
        alignItems:"center",

    },
    editprofilebutton:{

        width:width*0.05,
        height:height*0.03,
        backgroundColor:"#1C75BC",
        // overflow:"hidden",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        bottom:height*0.03,
        left:width*0.08,
    },
    badgecontertext:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:width*0.02,
        paddingVertical:height*0.01,
    },
    badges:{
        color: "#000",
        fontfamily: "poppins",
        fontWeight: "700",
        fontSize: calculateFontSize(15),
    },
    changephoto:{
        
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(13),
    },

    badgeimagecontainer:{
        width:width,
        height:height*0.5,
        // paddingVertical:height*0.03,
        
      

    },
    badgeimagecontainerpareent:{
        width:width,
        height:height*0.45,
        backgroundColor:"#DEDEDE",
        paddingHorizontal:width*0.04,
        paddingVertical:height*0.04
        // justifyContent:"center",
        // alignItems:"center",
        // borderRadius:20
    },
    idimage:{
        width:width,
        height:height*0.2,
      
        right:width*0.05,
    },
    badgeimagecontainer1:{
        width:width,
        height:height*0.2,
        // paddingVertical:height*0.03,
      

    },
    badgeimagecontainerpareent1:{
        width:width*0.9,
        height:height*0.1,
        backgroundColor:"#EAEAEA",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#6A6A6A",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:20,
        
    },
    idimage1:{
        width:width,
        height:height*0.2,
        right:width*0.05,
    },
    scrolcontainer:{
        paddingHorizontal:width*0.05,
    },
    btcontainer:{
        bottom:height*0.02,
        justifyContent:"center",
        alignItems:"center"
    },
    addtxt:{
        color:"#6A6A6A",
        textAlign:"center",
        fontSize:calculateFontSize(17),
        fontWeight:"600"
    },
    errorText: {
        color: 'red',
        fontSize: calculateFontSize(12),
        paddingHorizontal:width*0.02,
        // marginTop: height*0.01,
    },
})