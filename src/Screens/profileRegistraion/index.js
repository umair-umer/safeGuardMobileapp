import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import Feather from 'react-native-vector-icons/Feather';
import {Button, InputText, Resgistrationsuccesmodal} from '../../Components';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import {useDispatch, useSelector} from 'react-redux';
import {baseUrl} from '../../Utilites';

const ProfileRegistraion = ({navigation, route}) => {
  const userDetails = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(userDetails?.name);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState(userDetails?.email);
  const [num, setNum] = useState(userDetails?.phone);
  const [licnum, setLicnum] = useState('');
  const [dob, setDob] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [profileImage, setProfileImage] = useState();
  const [isLoading, setLoading] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);
  const gradDetails = route.params;

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

  // const uploadData = async () => {
  //   // if (!validateFields()) {
  //   //   Alert.alert("Validation Error", "Please fill all the required fields.");
  //   //   return;
  //   // }

  //   setLoading(true);

  //   // Create an instance of FormData
  //   let formData = new FormData();

  //   // Append form data
  //   formData.append('name', name);
  //   formData.append('emailAddress', email);
  //   formData.append('mobileNumber', num);
  //   formData.append('dob', dob);
  //   formData.append('address', address);
  //   formData.append('licence', licnum);

  //   // Append image data if available
  //   if (profileImage) {
  //     // Assuming profileImage is an object with uri, type, and name
  //     // Example: { uri: 'file-path', name: 'imageName.jpg', type: 'image/jpeg' }
  //     const image = {
  //       uri: profileImage.uri,
  //       type: profileImage.type || 'image/jpeg', // Default type if not available
  //       name: profileImage.name || 'profile.jpg', // Default name if not available
  //     };
  //     formData.append('picture', image);
  //   }

  //   try {
  //     const response = await axios({
  //       method: 'put',
  //       url: `${baseUrl}/auth/update-profile`,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //       data: formData,
  //     });

  //     if (response.status === 200) {
  //       console.log('Profile update successful:', response.data);
  //       setModalVisible(true);
  //     } else {
  //       console.log('Profile update failed with status:', response.status);
  //       Alert.alert('Update Failed', 'Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error during profile update:', error);
  //     Alert.alert(
  //       'Profile Error',
  //       'An unexpected error occurred. Please try again.',
  //       error,
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const profilepicker = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };
    const result = await launchImageLibrary(options);
    console.log(result);
    if (result.assets?.[0].uri) {
      setProfileImage(result.assets?.[0].uri);
    }
  };

  const imagepicker = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };
    const result = await launchImageLibrary(options);
    console.log(result);
    if (result.assets?.[0].uri) {
      setSelectedImage(result.assets?.[0].uri);
    }
  };
  const Handlechange = () => {
    setModalVisible(false);
    navigation.navigate('bottomtab');
  };

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
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="center"
            style={{width: '100%', height: '100%'}}
            source={Vector}
          />
        </TouchableOpacity>
        <Text style={styles.registration}>Profile Registration</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.procontainer}>
          <View style={styles.profileimage}>
            {profileImage ? (
              <View>
                <Image
                  source={{uri: profileImage}}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </View>
            ) : (
              <View
                style={[
                  styles.profileimage,
                  {backgroundColor: '#c0c0c0'},
                ]}></View>
            )}
          </View>
          <TouchableOpacity
            style={styles.editprofilebutton}
            onPress={() => profilepicker()}>
            <Feather size={20} name="edit" color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: width * 0.04}}>
          <InputText
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />

          <InputText
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <InputText
            placeholder="Email Address"
            value={email}
            editable={false}
            onChangeText={text => setEmail(text)}
          />

          <InputText
            placeholder="Mobile Number"
            keyboardType="numeric"
            value={num}
            onChangeText={text => setNum(text)}
          />

          <InputText
            placeholder="Security License Number"
            keyboardType="numeric"
            value={licnum}
            onChangeText={text => setLicnum(text)}
          />

          <InputText
            placeholder="Date of Birth"
            keyboardType="numeric"
            value={dob}
            onChangeText={text => setDob(text)}
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
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </View>

        <View style={styles.btcontainer}>
          <Button fill={true} name="Register" onPress={() => {}} />
        </View>
      </ScrollView>

      <Resgistrationsuccesmodal
        isModalVisible={isModalVisible}
        head={'Password update'}
        sucees={'successfully'}
        onPress={Handlechange}
      />
    </SafeAreaView>
  );
};

export default ProfileRegistraion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      ios: {
        flex: 1,
        width: '100%',
      },
    }),
  },
  aerrowbackicon: {
    width: '10%',
    height: height * 0.03,
  },
  arrowcontainer: {
    height: height * 0.09,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  registration: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(20),
    textAlign: 'center',
    width: '90%',
  },
  profileimage: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 360,
    ...Platform.select({
      ios: {
        width: 150,
        height: 150,
        overflow: 'hidden',
        borderRadius: 360,
      },
    }),
  },
  procontainer: {
    height: height * 0.24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editprofilebutton: {
    width: width * 0.07,
    height: height * 0.035,
    backgroundColor: '#1C75BC',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: '55%',
    position: 'absolute',
  },
  btcontainer: {
    // bottom:height*0.02,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    alignItems: 'center',
  },
  badges: {
    color: '#000',
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(14),
  },
  changephoto: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(12),
  },
  badgeimagecontainer: {
    width: '100%',
    height: height * 0.3,
    paddingHorizontal: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeimagecontainerpareent: {
    width: '100%',
    height: height * 0.28,
    borderRadius: 10,
    backgroundColor: '#d4cfcf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  idimage: {
    width: '100%',
    height: '100%',
  },
});
