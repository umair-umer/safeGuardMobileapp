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
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
    const [salaryRange, setSalaryRange] = useState([0, 50]); // Initial salary range
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const handleSalaryChange = (values) => {
        setSalaryRange(values);
      };

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
      const [userData, setUserData] = useState(null);
      const handleRegister = () => {
          const isFieldsValid = validateFields();
  
          if (isFieldsValid) {
            const newUser = {
                name,
                address,
                email,
                num,
                licnum,
                dob,
                profileImage,
                selectedImage,
            };
    
            navigation.navigate('Profile', { userData: newUser });
    
              toggleModal(); // Show modal or perform other actions when fields are valid
              clearFields();
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
        <Text style={styles.registration}>Edit Profile</Text>
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
    <InputText placeholder="Address"
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
   value={num}
   onChangeText={(text) => setNum(text)}
/>
<Text style={styles.errorText}>{numError}</Text>

<InputText placeholder="Security License Number"
    value={licnum}
    onChangeText={(text) => setLicnum(text)}
/>
<Text style={styles.errorText}>{licnumError}</Text>

<InputText placeholder="Date Of Birth"
   value={dob}
   onChangeText={(text) => setDob(text)}
/>
<Text style={styles.errorText}>{dobError}</Text>


<View style={styles.badgecontertext}>
<Text style={styles.badges}>Add Security badge</Text>
<TouchableOpacity
    style={styles.uploadButton}
    onPress={() => imagepicker()}
  >
  <Text style={styles.changephoto}>Change photo</Text>
  </TouchableOpacity>



</View>

<View style={styles.badgeimagecontainer}>
<View style={styles.badgeimagecontainerpareent}>
{selectedImage && (
<View style={styles.idimage}>
  <Image source={{ uri: selectedImage }} style={{width:"100%",height:"100%",resizeMode:"cover"}} />
</View>
) }
</View>
</View>
<View style={styles.willing}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "600" }}>
          Willing To Travel
        </Text>
      </View>
<View style={styles.salaryRange}>
            <MultiSlider
              values={salaryRange}
              min={0}
              max={200000}
              step={1000}
              sliderLength={width - 100}
              onValuesChange={handleSalaryChange}
              selectedStyle={{ backgroundColor: '#1C75BC' }}
              unselectedStyle={{ backgroundColor: '#E0E0E0' }}
              containerStyle={{ alignItems: "center" }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',
             paddingHorizontal: width * 0.05 }}>
              <Text style={styles.btxt}>{salaryRange[0]}KM</Text>
              <Text style={styles.btxt}>{salaryRange[1]}KM</Text>
            </View>
          </View>
<View style={styles.btcontainer}>
<Button fill={true} name="Update" onPress={handleRegister} onPresss={()=>{setModalVisible(false)}} />
</View>

</ScrollView>


< Resgistrationsuccesmodal isModalVisible={isModalVisible} onPress={()=>{navigation.navigate("bottomtab"),setModalVisible(false)}} />
    </SafeAreaView>
  )
}

export default EditProfile
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
        marginHorizontal:width*0.3,
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        textAlign:"center",
        fontSize: calculateFontSize(20),
        
    },
    profileimage:{
        width:width*0.32,
        height:height*0.15,
        overflow:"hidden",
        borderRadius:100,
        ...Platform.select({
            ios: {
                width:width*0.32,
                height:height*0.14,
                overflow:"hidden",
                borderRadius:100,

            },
        },),
    },
    procontainer:{
        marginTop:height*0.07,
        justifyContent:"center",
        alignItems:"center",
    },
    proplaceholder:{
        width:width*0.32,
        height:height*0.15,
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
        height:height*0.35,
        // paddingVertical:height*0.03,
      

    },
    badgeimagecontainerpareent:{
        width:width,
        height:height*0.25,
        backgroundColor:"#EAEAEA",
        justifyContent:"center",
        alignItems:"center"
    },
    idimage:{
        width:width,
        height:height*0.2,
        overflow:"hidden",
        right:width*0.05,
        ...Platform.select({
            ios: {
        width:width*0.4,
        height:height*0.2,
        overflow:"hidden",
        right:width*0.05,
              
              
            },
          }),
    },
    scrolcontainer:{
        paddingHorizontal:width*0.05,
    },
    btcontainer:{
        bottom:height*0.01,
        justifyContent:"center",
        alignItems:"center"
    },
    salaryRange:{

        // paddingHorizontal:width*0.06,
        paddingVertical:height*0.02,
    },
    txt:{

        color:"#000",
        fontSize:18,
        fontWeight:"600",
        
    },
    btxt:{
        color:"#1C75BC",
        fontSize:calculateFontSize(14),
        fontWeight:"500"
    },
    errorText: {
        color: 'red',
        fontSize: calculateFontSize(12),
        paddingHorizontal:width*0.02,
        // marginTop: height*0.01,
    },
})