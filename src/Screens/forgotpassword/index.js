import React, {useState, useRef,useEffect} from 'react';
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
import {Button, InputText} from '../../Components';
import {calculateFontSize} from '../../Utilites/font';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import Loader from '../../Components/Loader';
import {connect, useSelector} from 'react-redux';

const Forgotpassword = ({navigation}) => {
  const authToken = useSelector(state => state.auth); // Assuming 'authToken' is the key in your Redux state where the token is stored
  console.log('Auth Toke forget passn =:', authToken);
  const [phone, setPhone] = useState('');
  const [emaill, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const sendOtp = async () => {
    // Basic validation
    if (!phone && !emaill) {
      setRegistrationError('Please enter your email or phone number');
      return;
    }
  
    setLoading(true); // Start the loader
  
    // Prepare the data object to send
    let dataToSend = {};
    if (phone) {
      dataToSend.phone = phone;
    }
    if (emaill) {
      dataToSend.email = emaill;
    }
  
    try {
      // Set up the Axios config with the proper headers for JSON
      const config = {
        method: 'post',
        url: 'https://45be-58-65-211-93.ngrok-free.app/api/v1/safeguard/auth/forgot',
        headers: {
          'Content-Type': 'application/json', // Indicate that you're sending JSON data
        },
        data: JSON.stringify(dataToSend), // Convert the data object to a JSON string
      };
  
      // Make the request
      const response = await axios(config);
      console.log('Forgot Password Response:', response.data);
  
      // Handle the response here. If success, navigate to the OTP screen
      navigation.navigate('otpcode', { phone: phone, email: emaill });
    } catch (error) {
      // Error handling
      console.error('Error sending OTP:', error);
      setRegistrationError(
        error.response.data.error
      );
      setLoading(true);
    } finally {
      setLoading(false); 
    }
  };
  // useEffect(() => {
   
  //   sendOtp();
   
  // }, []); 
  const onContinuePress = () => {
    sendOtp(); // Directly call sendOtp function when the 'Continue' button is pressed
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
        <Text style={styles.forgottext}>Forgot Password</Text>
        <Text style={styles.forgottextdetail}>
          Select which contact details should we use to reset your password
        </Text>
      </View>

      <View style={styles.otpcontainer}>
        <View style={styles.inputcontainer}>
          <Image source={mess} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={'Send OTP via SMS'}
            placeholderTextColor={'black'}
            resizeMode="center"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Image source={email} resizeMode="center" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={'Send OTP via Email'}
            value={emaill}
            placeholderTextColor={'black'}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <View style={styles.btcontainer}>
        <Button fill={true} name={'Continue'} onPress={onContinuePress} />
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;

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
    width: width * 0.9,
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
    width: width * 0.75,
    color: '#000',
  },
  otpcontainer: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    color: 'black',
  },
  btcontainer: {
    // marginVertical:height*0.2,
    flexDirection: 'column',
    justifyContent: 'center',
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
