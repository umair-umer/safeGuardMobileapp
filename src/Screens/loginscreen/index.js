import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import IMG from '../../Assests/loginImg.png';
import {Button, InputText} from '../../Components';
import {calculateFontSize} from '../../Utilites/font';
import Google from '../../Assests/Google.png';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Loader from '../../Components/Loader';
import axios from 'axios';

import {connect, useDispatch, useSelector} from 'react-redux';
import {setLoginToken} from '../../store/Action';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../Utilites';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokens } from 'react-native-paper/lib/typescript/styles/themes/v3/tokens';


const LoginScreen = ({onLogin}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.logiToken); // Assuming 'authToken' is the key in your Redux state where the token is stored
  console.log('logintoken Token :', authToken);
  const [registrationTriggered, setRegistrationTriggered] = useState(false);

  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user-info', userInfo);
      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };



  const handleLogin = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setLoading(true); // Show loader

      const data = {
        username: email,
        password: password,
      };

      const config = {
        method: 'post',
        url: `${baseUrl}/auth/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data, // Convert data to JSON string
      };

      try {
        const response = await axios(config);
        // console.log('Login successful:', response);
        console.log('Login successful:', response.data.token);
        dispatch(setLoginToken(response.data.token));
        await AsyncStorage.setItem('auth_token', response.data.token);
        console.log("Token stored in AsyncStorage:", response.data.token);

        

    
      
        onLogin();
        // navigation.navigate('selectprofile');
        // ...

      } catch (error) {
        console.log('login error:',error.response.data.error);
        setRegistrationError(error.response.data.error);
        setLoading(true)
      } finally {
        // setLoading(false); // Hide loader
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
    if (registrationTriggered) {
      handleLogin();
    }
    // Reset the trigger state
    setRegistrationTriggered(false);
  }, [registrationTriggered]);
  const handleRegisterButtonPress = () => {

    setRegistrationTriggered(true);
    // navigation.navigate('selectprofile')
   
  };
  const onChangeText = email => {
    setEmail(email);
  };
  const onChangePassword = password => {
    setPassword(password);
  };
  const resetLoginState = () => {
    setLoading(false);
    setRegistrationError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader
          isVisible={isLoading}
          text={registrationError}
          Cross={() => resetLoginState()}
        />
      ) : null}

      <View style={styles.vieimagemaincontainer}>
        <View style={styles.imgview}>
          <Image style={{width: '100%', height: '100%'}} source={IMG} />
        </View>
      </View>
      <View style={styles.loghead}>
        <Text style={styles.texthead}>let’s get you Login!</Text>
        <Text style={styles.subhead}>enter your information below</Text>
      </View>

      <View style={styles.togemail_number}>
        <TouchableOpacity style={styles.loginemailandnumcontain}>
          <Text style={styles.emailtext}>email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginphoneandnumcontain}>
          <Text style={styles.phonetext}>Phone number</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emailcontainer}>
        <View>
          <InputText
            onChangeText={onChangeText}
            value={email}
            placeholder={'Email'}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
        <View>
          <InputText
            onChangeText={onChangePassword}
            value={password}
            pass={true}
            placeholder={'Passsword'}
          />
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('forgotpass');
          }}>
          <Text style={styles.forgotpass}>Forgotpassword</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividercontainer}>
        <View style={styles.hairline} />
        <Text style={styles.loginButtonBelowText1}>Or Login With</Text>
        <View style={styles.hairline} />
      </View>

      <View style={styles.googlebuttonContainer}>
        <TouchableOpacity style={styles.googlebutton} onPress={GoogleLogin}>
          <View style={styles.goggleicon}>
            <Image
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
              source={Google}
            />
          </View>
          <Text style={{color: 'black'}}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginbuttoncontainer}>
        <Button
          fill={true}
          name={'login'}
          onPress={handleRegisterButtonPress}
          // onPress={()=>navigation.navigate('usersignup')}
        
        />
      </View>
      <View style={styles.lowertext}>
        <Text style={{color: '#000'}}>Don’t have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate('usersignup');
          }}
          style={styles.regiternowtext}>
          Register Now
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:width*0.02,
  },
  imgview: {
    width: width * 0.3,
    height: height * 0.2,
  },
  vieimagemaincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(20),

    ...Platform.select({
      ios: {},
    }),
  },
  loghead: {
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.02,
    ...Platform.select({
      ios: {},
    }),
  },
  subhead: {
    fontFamily: 'Poppins',
    marginVertical: height * 0.03,
    color: '#939393',
  },
  togemail_number: {
    flexDirection: 'row',
    // paddingHorizontal:width*0.00,
  },
  loginemailandnumcontain: {
    marginHorizontal: width * 0.06,
    borderBottomWidth: 2,
  },
  emailtext: {
    fontFamily: 'Poppins',
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(15),
    textTransform: 'capitalize',
  },
  loginphoneandnumcontain: {
    borderBottomWidth: 2,

    color: '#0000',
  },
  Activeloginphoneandnumcontain: {
    borderBottomWidth: 2,

    color: '#0000',
  },
  Activeloginphoneandnumcontain: {
    borderBottomWidth: 2,

    color: '#0000',
  },
  Activephonetext: {
    fontFamily: 'Poppins',
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(15),
    textTransform: 'capitalize',
  },
  phonetext: {
    fontFamily: 'Poppins',
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(15),
    textTransform: 'capitalize',
  },
  emailcontainer: {
    paddingHorizontal: width * 0.04,
  },
  hairline: {
    backgroundColor: '#A5A4A4',
    height: height * 0.003,
    width: width * 0.29,
  },
  dividercontainer: {
    marginVertical: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  googlebuttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  googlebutton: {
    borderWidth: 1,
    paddingHorizontal: width * 0.05,
    height: height * 0.05,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.06,
    borderRadius: 5,
    borderColor: '#D7D7D7',
  },
  goggleicon: {
    width: width * 0.08,
    height: height * 0.04,
    marginRight: width * 0.02,
    ...Platform.select({
      ios: {
        width: width * 0.07,
        height: height * 0.04,
        marginRight: width * 0.02,
      },
    }),
  },
  loginbuttoncontainer: {
    marginTop: height * 0.03,
    alignItems: 'center',
  },
  lowertext: {
    marginVertical: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  regiternowtext: {
    color: '#1C75BC',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: width * 0.05,
  },
  forgotpass: {
    color: '#1C75BC',
    fontWeight: '700',
    fontSize: calculateFontSize(10),
    textTransform: 'capitalize',
  },
  loginButtonBelowText1: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    paddingHorizontal: width * 0.02,
    // marginTop: 5,
  },
});
