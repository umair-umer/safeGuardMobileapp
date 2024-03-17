import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Button} from '../../Components';
import {ArrowBack} from '../../Components';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';

function Verifyprocessscreen({navigation}) {
  return (
    <SafeAreaView style={styles.miancon}>
      <View style={{paddingHorizontal: width * 0.04}}>
        <ArrowBack />
      </View>

      <View style={styles.headcon}>
        <Text style={styles.heading}>Verify process</Text>
      </View>

      <View style={styles.inpcon}>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor={'#1C75BC'}
          keyboardType="numeric"
          style={styles.inp}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Button
          fill={true}
          name={'Confirm'}
          style={{width: '90%', alignSelf: 'center'}}
          onPress={() => navigation.navigate('entercodeverified')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  miancon: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: height * 0.03,
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: height * 0.03,
      },
    }),
  },
  headcon: {
    paddingVertical: height * 0.03,
    ...Platform.select({
      ios: {
        paddingVertical: height * 0.03,
      },
    }),
  },
  heading: {
    color: '#1C75BC',
    fontSize: calculateFontSize(26),
    fontFamily: PoppinsBold,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: calculateFontSize(26),
        fontFamily: PoppinsBold,
        textAlign: 'center',
      },
    }),
  },

  btncon: {
    height: height * 0.79,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: height * 0.79,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    }),
  },

  btn: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: height * 0.02,
    ...Platform.select({
      ios: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: '#1C75BC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: height * 0.02,
      },
    }),
  },
  btntx: {
    color: '#fff',
    fontSize: calculateFontSize(16),
    fontFamily: PoppinsRegular,
  },
  inpcon: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    ...Platform.select({
      flex: 1,
      paddingHorizontal: width * 0.04,
    }),
  },
  inp: {
    borderColor: '#1C75BC',
    borderWidth: 1,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    fontFamily: PoppinsRegular,
    color: '#1C75BC',
    ...Platform.select({
      ios: {
        borderColor: '#1C75BC',
        borderWidth: 1,
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.015,
        borderRadius: 10,
        color: '#1C75BC',
        fontFamily: PoppinsRegular,
      },
    }),
  },
});

export default Verifyprocessscreen;
