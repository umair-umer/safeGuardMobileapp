import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import IMG from '../../Assests/sucss.png';
import {Button} from '../../Components';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';

function Codeverifiedscreen({navigation}) {
  return (
    <SafeAreaView style={styles.miancon}>
      <View style={[styles.miancon, {width: '90%'}]}>
        <View style={styles.headcon}>
          <View style={styles.imgcon}>
            <Image source={IMG} style={{width: '100%', height: '100%'}} />
          </View>
          <Text style={styles.heading}>Code verified successfully</Text>
        </View>

        <View style={styles.btncon}>
          <Button
            fill={true}
            name={'Start Posting job'}
            onPress={() => navigation.navigate('jobsslect')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  miancon: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingBottom: height * 0.04,
    ...Platform.select({
      flex: 1,
      paddingHorizontal: width * 0.06,
      backgroundColor: '#fff',
      paddingBottom: height * 0.04,
    }),
  },
  imgcon: {
    width: width * 0.2,
    height: height * 0.1,
    ...Platform.select({
      width: width * 0.2,
      height: height * 0.1,
    }),
  },
  headcon: {
    flex: 1,
    paddingVertical: height * 0.05,
    width: '100%',
    ...Platform.select({
      flex: 1,
      paddingVertical: height * 0.05,
      width: '100%',
    }),
  },
  heading: {
    color: '#1C75BC',
    fontSize: calculateFontSize(25),
    width: '100%',
    fontFamily: PoppinsBold,
    textAlign: 'center',
    ...Platform.select({
      color: '#1C75BC',
      fontSize: calculateFontSize(25),
      fontFamily: PoppinsBold,
      width: '100%',
      textAlign: 'center',
    }),
  },
  salogan: {
    color: '#939393',
    fontSize: calculateFontSize(14),
    fontWeight: '500',
    textAlign: 'center',
    ...Platform.select({
      color: '#939393',
      fontSize: calculateFontSize(10),
      fontWeight: '500',
      textAlign: 'center',
    }),
  },
  btncon: {
    height: height * 0.67,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: height * 0.07,
  },

  btn: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: height * 0.07,
  },
  btntx: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Codeverifiedscreen;
