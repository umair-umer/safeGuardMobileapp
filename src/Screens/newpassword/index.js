import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import mess from '../../Assests/mess.png';
import email from '../../Assests/email.png';
import {Button, InputText, Resgistrationsuccesmodal} from '../../Components';
import {calculateFontSize} from '../../Utilites/font';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import Loader from '../../Components/Loader';
import {connect, useSelector} from 'react-redux';

const Newpass = ({navigation, route}) => {
  const passToken = route.params;
  console.log(passToken, '===>');

  const [password, setPassword] = useState('');
  const [token, settoken] = useState(passToken);
  const [newPassword, setNewPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const changePassword = async () => {
    setLoading(true);
    let data = {
      password: newPassword,
    };
    const tokenValue = passToken.token;
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://45be-58-65-211-93.ngrok-free.app/api/v1/safeguard/auth/resetpassword/${tokenValue}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };
    console.log(config, '===>config');
    try {
      const response = await axios.request(config);
      console.log(response.data);

      console.log('Password Changed Successfully:', response.data);

      setLoading(false); // Hide loader

      // Show success modal and navigate to login screen
      toggleModal();
      setTimeout(() => {
        // navigation.navigate('login');
      }, 3000);
    } catch (error) {
      console.error('Error changing password:', error);
      setRegistrationError(error.response.data.message);
      setLoading(true); // Hide loader

      if (error.response && error.response.data) {
        console.error('Server Error Details:', error.response.data);
        setRegistrationError(error.response.data.error);
        // Set error message from server response
      } else {
        setRegistrationError('An unexpected error occurred.'); // Set a generic error message
      }
    }
  };
  const onChangePassword = password => {
    console.log(password);

    setPassword(password);
  };
  const onChangeNewPassword = newPassword => {
    console.log(newPassword);
    setNewPassword(newPassword);
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
      <TouchableOpacity
        style={styles.arrowcontainer}
        onPress={() => navigation.goBack()}>
        <View style={styles.aerrowbackicon}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={Vector}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.forgotcontainer}>
        <Text style={styles.forgottext}>Enter new password</Text>
        <Text style={styles.forgottextdetail}>please enter new password</Text>
      </View>

      <View style={styles.otpcontainer}>
        <InputText
          onChangeText={onChangePassword}
          value={password}
          pass={true}
          placeholder={'passwword'}
        />
        <InputText
          onChangeText={onChangeNewPassword}
          value={newPassword}
          pass={true}
          placeholder={'New passwword'}
        />
      </View>
      <View style={styles.btcontainer}>
        <Button fill={true} name={'Continue'} onPress={changePassword} />
      </View>
      <Resgistrationsuccesmodal
        isModalVisible={isModalVisible}
        head={'Password update'}
        sucees={'successfully'}
        onPress={() => navigation.navigate('login')}
      />
    </SafeAreaView>
  );
};

export default Newpass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  aerrowbackicon: {
    width: width * 0.04,
    height: height * 0.04,
  },
  arrowcontainer: {
    marginTop: height * 0.04,
    width: width * 0.08,
    height: height * 0.06,
    // paddingHorizontal: width * 0.03,
  },

  forgottext: {
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(30),
  },
  forgottextdetail: {
    color: '#939393',
    fontfamily: 'poppins',
    fontWeight: '400',
    fontSize: calculateFontSize(13),
  },
  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    marginTop: height * 0.02,
    marginVertical: height * 0.01,
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        // marginTop:height*0.02,
        // marginVertical:height*0.01,
      },
    }),
  },
  icon: {
    width: width * 0.06,
    height: height * 0.03,
    marginRight: width * 0.05,
    ...Platform.select({
      ios: {
        width: width * 0.05,
        height: height * 0.03,
        marginRight: width * 0.05,
      },
    }),
  },
  input: {
    // flex: 1,
  },
  otpcontainer: {
    flex: 1,
  },
  btcontainer: {
    flex: 1,
    top: height * 0.45,
    // flexDirection: 'column',
    // justifyContent:"flex-end",
    alignItems: 'center',
  },
  // input: {
  //     borderBottomWidth: 2,
  //     borderBottomColor: 'gray',
  //     width: 40,
  //     height: 50,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   activeInput: {
  //     borderBottomColor: 'blue', // Change color on touch
  //   },
  //   inputText: {
  //     textAlign: 'center',
  //     fontSize: 24,
  //   },
});
