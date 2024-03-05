import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  BackHandler,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import {Button, InputText, Resgistrationsuccesmodal} from '../../Components';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import Loader from '../../Components/Loader';
import {showMessage} from 'react-native-flash-message';
import {PostApi, PostApiWithOutToken} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {CommonActions} from '@react-navigation/native';

const Newpass = ({navigation, route}) => {
  const userDetails = route.params;
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  // useEffect(() => {
  //   const backAction = () => navigation.reset('login');

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  console.log(userDetails);

  const handleChangePassword = () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append('otp', userDetails?.otp);
    formdata.append('newPassword', password);
    formdata.append('confirmPassword', newPassword);
    userDetails.email !== null
      ? formdata.append('email', userDetails?.email)
      : formdata.append('phone', userDetails?.phone);

    if (password == newPassword) {
      PostApiWithOutToken(`${BaseUrl}changePasswordWithOtp`, formdata)
        .then(res => {
          console.log('res changePass====>', res.data);
          if (res.data.success) {
            setLoading(false);
            showMessage({
              animated: true,
              message: res.data?.message,
              type: 'success',
              floating: true,
              icon: 'success',
            });
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'login'}],
              }),
            );
          } else {
            setLoading(false);
            showMessage({
              animated: true,
              message: res.data?.message,
              type: 'danger',
              floating: true,
              icon: 'danger',
            });
          }
        })
        .catch(err => {
          console.log('err changePass====>', err);
          setLoading(false);
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
        message: 'Password and confirm password does not match!',
        type: 'danger',
        floating: true,
        icon: 'danger',
      });
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
        <Text style={styles.forgottextdetail}>
          Enter your new password to access your account.
        </Text>
      </View>

      <View style={styles.otpcontainer}>
        <InputText
          onChangeText={setPassword}
          value={password}
          pass={true}
          placeholder={'New Password'}
        />
        <InputText
          onChangeText={setNewPassword}
          value={newPassword}
          pass={true}
          placeholder={'Confirm Password'}
        />
      </View>
      <View style={styles.btcontainer}>
        <Button fill={true} name={'Continue'} onPress={handleChangePassword} />
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
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(26),
    textTransform: 'capitalize',
  },
  forgottextdetail: {
    color: '#939393',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(12),
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
    marginTop: 40,
  },
  btcontainer: {
    flex: 1,
    top: height * 0.4,
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
