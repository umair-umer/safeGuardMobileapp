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
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import {NavigationContainer} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import axios from 'axios';
import Loader from '../../Components/Loader';
import {showMessage} from 'react-native-flash-message';

const CELL_COUNT = 4;
const OtpScreen = ({route, navigation}) => {
  const {phone} = route?.params;
  const {otp} = route?.params;
  const {email} = route?.params;
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verifyOtp = () => {
    if (otp === value) {
      navigation.replace('newpass', {otp: otp, phone: phone, email: email});
    } else {
      showMessage({
        message: 'Please enter valid OTP',
        type: 'danger',
        animated: true,
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
        <Text style={styles.forgottext}>Enter OTP Code</Text>
        <Text style={styles.forgottextdetail}>
          OTP code has been sent to {email ? email : phone}
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
        <Button
          fill={true}
          name={'Verify'}
          onPress={verifyOtp}
          style={{width: '90%', alignSelf: 'center'}}
        />
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
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(30),
  },
  forgottextdetail: {
    color: '#939393',
    fontFamily: PoppinsRegular,
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
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#c0c0c0',
    color: 'black',
    marginHorizontal: width * 0.02,
  },
  focusCell: {
    borderColor: '#1C75BC',
  },
});
