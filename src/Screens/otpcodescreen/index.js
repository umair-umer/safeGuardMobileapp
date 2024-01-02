import React, {useState, useRef, useEffect} from 'react';
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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {connect, useSelector} from 'react-redux';

import axios from 'axios';
import Loader from '../../Components/Loader';

const CELL_COUNT = 4;
const OtpScreen = ({route, navigation}) => {
  // const authToken = useSelector(state => state.auth); // Assuming 'authToken' is the key in your Redux state where the token is stored
  // console.log('Auth Toke forget passn =:', authToken);
  const {phone} = route?.params;
  const {email} = route?.params;
  // const {otp} = route.params.response.data.data;
  // const [otpnum,setotp]=useState(route.params.response.data.data);
  // console.log(route,"====>usestate");
  // console.log(route.params.response.data.data, '====otpscreen');
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verifyOtp = async () => {
    setLoading(true); // Start loading

    try {
      let data = {
        code: value, // use the state value here
        username: phone || email, // or email: email, depending on your API
      };

      let config = {
        method: 'post',
        url: 'https://45be-58-65-211-93.ngrok-free.app/api/v1/safeguard/auth/verify-otp',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data,
      };

      const response = await axios(config);
      console.log(response.data.data.token,"===>otp");

      // Handle successful verification
      // For example, navigate to a success screen or show a success message
      navigation.navigate('newpass',{token:response.data.data.token,});
    } catch (error) {
      setRegistrationError(error.response.data.error);
      console.error(error.response.data.error);
      setLoading(true); // Stop loading
      // Handle error scenario
      // For example, show an error message
    } finally {
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
        <Text style={styles.forgottext}>Enter OTP Code</Text>
        <Text style={styles.forgottextdetail}>
          OTP code has been sent to {phone}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View style={styles.btcontainer}>
        <Button fill={true} name={'Verify'} onPress={verifyOtp} />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

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

  btcontainer: {
    // top:height*0.55,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFieldRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
    width: width * 0.98,
  },
  cell: {
    width: width * 0.15,
    height: height * 0.07,
    lineHeight: height * 0.07,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: width * 0.02,
  },
  focusCell: {
    borderColor: '#1C75BC',
  },
});
