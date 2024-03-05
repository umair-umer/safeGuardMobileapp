import React, {useState} from 'react';
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
import {Button} from '../../Components';
import {PoppinsRegular, calculateFontSize} from '../../Utilites/font';
import Loader from '../../Components/Loader';
import {PostApiWithOutToken} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {showMessage} from 'react-native-flash-message';

const ForgotSMS = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    const forgotData = new FormData();
    forgotData.append('phone', phone);
    PostApiWithOutToken(`${BaseUrl}forgotPassword`, forgotData)
      .then(res => {
        console.log('res forgotPassword====>', res.data);
        if (res.data?.success) {
          setLoading(false);
          showMessage({
            animated: true,
            message: res.data.message,
            type: 'success',
            floating: true,
            icon: 'success',
          });
          navigation.navigate('otpcode', {
            phone: phone,
            email: null,
            otp: res.data?.data,
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
        console.log('catch err forgotPassword====>', err);
        setLoading(false);
        showMessage({
          animated: true,
          message: err?.response?.data?.message,
          type: 'danger',
          floating: true,
          icon: 'danger',
        });
      });
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
            placeholder={'Enter phone number'}
            placeholderTextColor={'gray'}
            resizeMode="center"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>
      <View style={styles.btcontainer}>
        <Button
          fill={true}
          name={'Continue'}
          onPress={handleSubmit}
          style={{width: '90%', alignSelf: 'center'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotSMS;

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
    fontFamily: PoppinsRegular,
    fontWeight: '700',
    fontSize: calculateFontSize(30),
  },
  forgottextdetail: {
    color: '#939393',
    fontFamily: PoppinsRegular,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
