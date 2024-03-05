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
import {PoppinsRegular, calculateFontSize} from '../../Utilites/font';
import Google from '../../Assests/Google.png';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Loader from '../../Components/Loader';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {PostApiWithOutToken} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {showMessage} from 'react-native-flash-message';
import Modal from 'react-native-modal';
import {updateUser} from '../../redux/actions/authAction';

const LoginScreen = ({onLogin}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [registrationTriggered, setRegistrationTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
    setLoading(true);
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const loginData = new FormData();
      loginData.append('email', email);
      loginData.append('password', password);

      PostApiWithOutToken(`${BaseUrl}login`, loginData)
        .then(res => {
          console.log('res login====>', res.data);
          if (res.data?.success) {
            dispatch(updateUser(res.data.data));
            setLoading(false);
            navigation.navigate('bottomtab');
            showMessage({
              animated: true,
              message: res.data.message,
              type: 'success',
              floating: true,
              icon: 'success',
            });
          } else {
            setLoading(false);
            showMessage({
              animated: true,
              message: res?.data?.message,
              type: 'danger',
              floating: true,
              icon: 'danger',
            });
          }
        })
        .catch(err => {
          setLoading(false);
          console.log('catch err login====>', err);
          showMessage({
            animated: true,
            message: err?.response?.data?.message,
            type: 'danger',
            floating: true,
            icon: 'danger',
          });
        });
    } else {
      setLoading(false);
      showMessage({
        animated: true,
        message: 'email or password is invalid!',
        type: 'danger',
        floating: true,
        icon: 'danger',
      });
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

  const handleForgotModal = () => {
    //   {
    //   navigation.navigate('forgotpass');
    // }
    return (
      <Modal
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropOpacity={0.4}
        animationInTiming={1000}
        animationOutTiming={1000}
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.heading}>Trouble signing in?</Text>
            <Text style={styles.heading2}>Please select the forgot type.</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setIsVisible(false);
              navigation.navigate('forgotSMS');
            }}>
            <Text style={styles.btnText}>Send OTP via SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setIsVisible(false);
              navigation.navigate('forgotpass');
            }}>
            <Text style={styles.btnText}>Send OTP via Email</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <>
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
          <Text style={styles.texthead}>Let’s get you Login!</Text>
          <Text style={styles.subhead}>Enter your information below</Text>
        </View>

        <View style={styles.togemail_number}>
          <TouchableOpacity style={styles.loginemailandnumcontain}>
            <Text style={styles.emailtext}>email</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.loginphoneandnumcontain}>
          <Text style={styles.phonetext}>Phone number</Text>
        </TouchableOpacity> */}
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
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text style={styles.forgotpass}>Forgot password</Text>
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
            style={{width: '90%', alignSelf: 'center'}}
            name={'login'}
            onPress={handleRegisterButtonPress}
          />
        </View>
        <View style={styles.lowertext}>
          <Text style={{color: '#000'}}>Don’t have an account? </Text>
          <Text
            onPress={() => {
              navigation.navigate('usersignup');
            }}
            style={styles.regiternowtext}>
            Register Now
          </Text>
        </View>
      </SafeAreaView>
      {handleForgotModal()}
    </>
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
    fontFamily: PoppinsRegular,
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
    fontFamily: PoppinsRegular,
    top: 8,
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
    fontFamily: PoppinsRegular,
    color: '#1C75BC',
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
    fontFamily: PoppinsRegular,
    color: '#1C75BC',
    fontWeight: '700',
    fontSize: calculateFontSize(15),
    textTransform: 'capitalize',
  },
  phonetext: {
    fontFamily: PoppinsRegular,
    color: '#1C75BC',
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
    width: '100%',
  },
  googlebutton: {
    borderWidth: 1,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.06,
    borderRadius: 5,
    borderColor: '#D7D7D7',
    width: '40%',
    alignSelf: 'center',
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
    fontSize: calculateFontSize(12),
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
  modalContainer: {
    flex: 0.3,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    backgroundColor: '#1C75BC',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: PoppinsRegular,
    fontWeight: 'bold',
  },
  heading: {
    color: '#1C75BC',
    fontSize: 18,
    fontFamily: PoppinsRegular,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading2: {
    color: 'gray',
    fontSize: 14,
    fontFamily: PoppinsRegular,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 8,
  },
});
