import React, { useState,useEffect,useRef } from 'react';
import { FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView,Alert, TextInput, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import profileimage from '../../Assests/profileimage.png';
import { calculateFontSize } from '../../Utilites/font';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { Button, InputText, Resgistrationsuccesmodal,Loader} from '../../Components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import { connect, useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../Utilites';
import { bindActionCreators } from 'redux'
import { setLoginToken } from '../../store/Action';

const ProfileRegistraion = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const authToken = useSelector(state => state.logiToken.token);
  console.log(authToken,"==>");
  const guard_type = route.params.profileData.text;
  const name_person = route.params.profileData.text

  console.log('Auth data profile registration:', user.UserData.user.img_url);
  console.log('Auth Token profile registration:', authToken);
  console.log('guard type:', guard_type);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [licnum, setLicnum] = useState('');
  const [dob, setDob] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);


  console.log("name of fill",name)
  console.log("address of fill",address)
  console.log("eamil of fill",email)
  console.log("num of fill",num)
  console.log("licnum of fill",licnum)
  console.log("DOB of fill",dob)
  console.log("",licnum)
  




  const [selectedImage, setSelectedImage] = useState('');
  const [profileImage, setProfileImage] = useState();
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const toggleModal = () => setModalVisible(!isModalVisible);

  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numError, setNumError] = useState('');
  const [licnumError, setLicnumError] = useState('');
  const [dobError, setDobError] = useState('');

  // const validateFields = () => {
  //   let isValid = true;

  //   const validateField = (field, value, setError) => {
  //     if (value.trim() === '') {
  //       setError(`${field} is required`);
  //       isValid = false;
  //     } else {
  //       setError('');
  //     }
  //   };

  //   validateField('Name', name, setNameError);
  //   validateField('Address', address, setAddressError);
  //   validateField('Email', email, setEmailError);
  //   validateField('Mobile Number', num, setNumError);
  //   validateField('Licence Number', licnum, setLicnumError);
  //   validateField('Date Of Birth', dob, setDobError);

  //   return isValid;
  // };

  const clearFields = () => {
    setName('');
    setAddress('');
    setEmail('');
    setNum('');
    setLicnum('');
    setDob('');
  };

  const uploadData = async () => {
    // if (!validateFields()) {
    //   Alert.alert("Validation Error", "Please fill all the required fields.");
    //   return;
    // }
  
    setLoading(true);
  
    // Create an instance of FormData
    let formData = new FormData();
  
    // Append form data
    formData.append('name', name);
    formData.append('emailAddress', email);
    formData.append('mobileNumber', num);
    formData.append('dob', dob);
    formData.append('address', address);
    formData.append('licence', licnum);
  
    // Append image data if available
    if (profileImage) {
      // Assuming profileImage is an object with uri, type, and name
      // Example: { uri: 'file-path', name: 'imageName.jpg', type: 'image/jpeg' }
      const image = {
        uri: profileImage.uri,
        type: profileImage.type || 'image/jpeg', // Default type if not available
        name: profileImage.name || 'profile.jpg' // Default name if not available
      };
      formData.append('picture', image);
    }
  
    try {
      const response = await axios({
        method: 'put',
        url: `${baseUrl}/auth/update-profile`,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authToken}`,
        },
        data: formData,
      });
  
      if (response.status === 200) {
        console.log('Profile update successful:', response.data);
        setModalVisible(true);
      } else {
        console.log('Profile update failed with status:', response.status);
        Alert.alert("Update Failed", "Please try again later.");
      }
    } catch (error) {
      console.error('Error during profile update:', error);
      Alert.alert("Profile Error", "An unexpected error occurred. Please try again.",error);
    } finally {
      setLoading(false);
    }
  };
  
  

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

  const imagepicker = () => {
        let option = {
          storageoption: {
            path: 'images',
          },
        };
    
        launchImageLibrary(option, async response => {
          if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            setSelectedImage(uri);
            dispatch(setSelectedImage(uri));
          }
        });
      };
      const Handlechange=()=>{
        setModalVisible(false);
        navigation.navigate("bottomtab")
      }

  return (
    <SafeAreaView style={styles.container}>
       {/* {isLoading ? (
      <Loader
        isVisible={isLoading}
        text={registrationError}
        // Cross={() => setLoading(false)}
      />
    ) : null} */}
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
              <Image source={{ uri: profileImage }} style={{ width: "100%", height: "100%", resizeMode: "cover", }} />
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
        <View style={{ paddingHorizontal: width * 0.04 }}>
          <InputText
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />


          <InputText
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />


          <InputText
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />


          <InputText
            placeholder="Mobile Number"
            keyboardType='numeric'
            value={num}
            onChangeText={(text) => setNum(text)}
          />


          <InputText
            placeholder="Security License Number"
            keyboardType='numeric'
            value={licnum}
            onChangeText={(text) => setLicnum(text)}
          />


          <InputText
            placeholder="Date of Birth"
            keyboardType='numeric'
            value={dob}
            onChangeText={(text) => setDob(text)}
          />
        </View>
        <View style={styles.badgecontertext}>
         <Text style={styles.badges}>Add Security badge</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => imagepicker()}>
          <Text style={styles.changephoto}>Change photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.badgeimagecontainer}>
        <View style={styles.badgeimagecontainerpareent}>
          {selectedImage && (
            <View style={styles.idimage}>
              <Image
                source={{uri: selectedImage}}
                style={{width: '100%', height: '100%'}}
                resizeMode='center'
              />
            </View>
          )}
        </View>
        </View>

        <View style={styles.btcontainer}>
          <Button
            fill={true}
            name="Register"
            onPress={uploadData}

          />
        </View>
      </ScrollView>

      <Resgistrationsuccesmodal
        isModalVisible={isModalVisible}
        head={'Password update'}
        sucees={'successfully'}
        onPress={Handlechange}
      />

    </SafeAreaView>
  )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        setLoginToken
      },
      dispatch,
    );
  };
  const mapStateToProps = state => ({
    user: state.auth.user,
  });
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileRegistraion);

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
    // bottom:height*0.02,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    paddingHorizontal: width * 0.02,
    // marginTop: height*0.01,
  },

  badgecontertext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.01,
      },
      badges: {
        color: '#000',
        fontfamily: 'poppins',
        fontWeight: '700',
        fontSize: calculateFontSize(15),
      },
      changephoto: {
        color: '#1C75BC',
        fontfamily: 'poppins',
        fontWeight: '500',
        fontSize: calculateFontSize(13),
      },
    
      badgeimagecontainer: {
        width: width,
        height: height * 0.35,
        // paddingVertical:height*0.03,
      },
      badgeimagecontainerpareent: {
        width: width,
        height: height * 0.25,
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
      },
      idimage: {
        width: width,
        height: height * 0.2,
        right: width * 0.05,
      },


})


