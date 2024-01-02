import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet,Dimensions } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { calculateFontSize } from '../../Utilites/font';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import axios from 'axios';
import Vector from '../../Assests/Vector.png';
import FormData from 'form-data';
import { Button, InputText, Resgistrationsuccesmodal, Loader } from '../../Components';
import { setAuthToken, setUserData, setProfileImage } from '../../store/Action';
import { bindActionCreators } from 'redux';
const {width, height} = Dimensions.get('window');
const ProfileRegistraion = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
 const logintoken=useSelector((state) => state.logiToken.token);
 const guard_type=route.params.profileData.text;
  console.log('Auth data profile registration:',user.UserData.user.img_url);
  console.log('Auth Token profile registration:',logintoken);
console.log(route.params.profileData.text,"==>");
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

  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const [selectedImage, setSelectedImage] = useState('');
  const [profileImage, setProfileImage] = useState();

  const toggleModal = () => setModalVisible(!isModalVisible);

  const validateFields = () => {
    let isValid = true;

    const validateField = (field, value, setError) => {
      if (value.trim() === '') {
        setError(`${field} is required`);
        isValid = false;
      } else {
        setError('');
      }
    };

    validateField('Name', name, setNameError);
    validateField('Address', address, setAddressError);
    validateField('Email', email, setEmailError);
    validateField('Mobile Number', num, setNumError);
    validateField('Licence Number', licnum, setLicnumError);
    validateField('Date Of Birth', dob, setDobError);

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

  const profilepicker = () => {
    let option = {
      storageoption: {
        path: 'images',
      },
    };

    launchImageLibrary(option, async response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setProfileImage(uri);

        dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
        setProfileImage(uri);
      }
    });
  };
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

  const uploadData = async () => {
    try {
      const data = new FormData();
      data.append('guard_type', guard_type);
      data.append('address', address);
      data.append('dob', dob);
      data.append('licence_number', licnum);

      // Append user data from Redux
      data.append('name', user.name);
      // data.append('email', user.email);
      // data.append('phone', user.phone);
      
      if (profileImage) {
        const uriParts = profileImage.split('.');
        const fileType = uriParts[uriParts.length - 1];

        data.append('identity_image', {
          uri: selectedImage,
          name: `profile.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authToken}`,
      };

      // setLoading(true);

      const response = await axios.post(
        'https://app.democlientlink.com/startup/public/api/guard',
        data,
        { headers }
      );

      console.log('Registration successful:', response.data.data);
      setLoading(false);
      setModalVisible(true);

    } catch (error) {
      console.error('Registration failed:', error.message);
      setRegistrationError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    {isLoading ? (
      <Loader
        isVisible={isLoading}
        text={registrationError}
        Cross={() => setLoading(false)}
      />
    ) : null}
    <View style={styles.arrowcontainer}>
      <TouchableOpacity
        style={styles.aerrowbackicon}
        onPress={() => navigation.goBack()}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={Vector}
        />
      </TouchableOpacity>
      <Text style={styles.registration}>Profile Registration</Text>
    </View>
    <View style={styles.procontainer}>
      <View style={styles.profileimage}>
        {profileImage ? (
          <View>
            <Image
              source={{uri:user.UserData.user.img_url}}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
        ) : (
          <View style={styles.proplaceholder}></View>
        )}
        <View>
          
          </View>
      </View>
      <TouchableOpacity
        style={styles.editprofilebutton}
        onPress={() => profilepicker()}>
        <FontAwesome5 resizeMode="center" name="edit" color="#fff" />
      </TouchableOpacity>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrolcontainer}>
      <InputText
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.errorText}>{nameError}</Text>
      <InputText
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <Text style={styles.errorText}>{addressError}</Text>
      <InputText
        placeholder="Email Address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.errorText}>{emailError}</Text>
      {/* <InputText
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.errorText}>{passwordError}</Text> */}
      <InputText
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={num}
        onChangeText={text => setNum(text)}
      />
      <Text style={styles.errorText}>{numError}</Text>

      <InputText
        placeholder="Security License Number"
        keyboardType="numeric"
        value={licnum}
        onChangeText={text => setLicnum(text)}
      />
      <Text style={styles.errorText}>{licnumError}</Text>

      <InputText
        placeholder="Date Of Birth"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <Text style={styles.errorText}>{dobError}</Text>

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
                style={{width: '100%', height: '100%', resizeMode: 'center'}}
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
      // onPress={() => navigation.navigate('login')}
    />
  </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthToken,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  registration: {
    marginHorizontal: width * 0.19,
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '500',
    fontSize: calculateFontSize(20),
  },
  profileimage: {
    width: width * 0.3,
    height: height * 0.14,
    overflow: 'hidden',
    borderRadius: 100,
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.14,
        overflow: 'hidden',
        borderRadius: 100,
      },
    }),
  },

  proplaceholder: {
    width: width * 0.3,
    height: height * 0.14,
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#EAEAEA',
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.14,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: '#EAEAEA',
      },
    }),
  },
  procontainer: {
    marginTop: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editprofilebutton: {
    width: width * 0.05,
    height: height * 0.03,
    backgroundColor: '#1C75BC',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: width * 0.08,
    ...Platform.select({
      ios: {
        width: width * 0.05,
        height: height * 0.03,
        backgroundColor: '#1C75BC',
        // overflow:"hidden",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        bottom: height * 0.03,
        left: width * 0.08,
      },
    }),
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
  scrolcontainer: {
    paddingHorizontal: width * 0.05,
  },
  btcontainer: {
    bottom: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    paddingHorizontal: width * 0.02,
    // marginTop: height*0.01,
  },
});
