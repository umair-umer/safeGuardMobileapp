import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import {Button} from '../../Components';
import imagebackground from '../../Assests/imagebackground.png';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setCompanyRegister} from '../../redux/actions/authAction';
const SuceesfullyCompanyRegister = ({navigation}) => {
  const route = useRoute();
  const {name, address, num, profileImage} = route.params;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: width * 0.03}}>
        <View style={styles.arrowcontainer}>
          <TouchableOpacity
            style={styles.aerrowbackicon}
            onPress={() => navigation.goBack()}>
            <Image
              resizeMode="CENTER"
              style={{width: '100%', height: '100%'}}
              source={Vector}
            />
          </TouchableOpacity>
          <View style={{marginVertical: height * 0.01}}>
            <Text style={styles.registration}>
              Successfully registered your profile
            </Text>
          </View>
        </View>
        <Text style={styles.succestextpayra}>
          Congratulations! Your profile registration has been completed
          successfully. You can now add details in your company profile through
          the profile screen.
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={styles.profileviewcenter}>
            <View style={styles.bgresi}>
              <ImageBackground
                resizeMode="cover"
                style={[{width: '100%', height: '100%'}, styles.bg]}
                source={imagebackground}>
                <View style={styles.heder}>
                  <Text style={styles.profiletextheader}>My Profile</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: width * 0.02,
                  }}>
                  <View style={styles.prof}>
                    <View style={styles.profileimage}>
                      <Image
                        resizeMode="cover"
                        style={{width: '100%', height: '100%'}}
                        source={{uri: profileImage?.uri}}
                      />
                    </View>
                    <View
                      style={{
                        marginHorizontal: width * 0.03,
                        marginTop: height * 0.01,
                      }}>
                      <Text style={styles.prname}>{name}</Text>
                      <Text style={styles.prname}>{address}</Text>
                      <Text style={styles.prnumb}>{num}</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Feather
                      name="edit"
                      color="#fff"
                      style={styles.icon}
                      size={calculateFontSize(14)}
                      onPress={() => navigation.navigate('editprofile')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: width * 0.02,
                    marginTop: height * 0.02,
                  }}>
                  <View style={styles.vbgcon}>
                    <Text style={styles.probgtext}>80</Text>
                    <Text style={styles.probgtext}>Job Applied</Text>
                  </View>
                  <View style={styles.vbgcon1}>
                    <Text style={styles.probgtext}>19/20/2023</Text>
                    <Text style={styles.probgtext}>member Since</Text>
                  </View>

                  <View style={styles.vbgcon}>
                    <Text style={styles.probgtext}>30</Text>
                    <Text style={styles.probgtext}>interview</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.aboutparacontainer}>
              <Text style={styles.aboutmehead}>about Company</Text>
              <Text style={styles.textpara}>
                I am a dedicated and vigilant security professional with a
                strong commitment to ensuring the safety and security of people
                and property.{' '}
              </Text>
            </View>
            <View style={{width: width * 0.6}}>
              <View style={styles.setmem}>
                <Text style={styles.txt}>Setting</Text>
                <Ionicons name="chevron-forward-sharp" color="#949494" />
              </View>
              <View style={styles.divder}></View>
              <View style={styles.setmem}>
                <Text style={styles.txt}>Membership</Text>
                <Ionicons name="chevron-forward-sharp" color="#949494" />
              </View>
            </View>
          </View>
        </View>
        <Button
          name={'Done'}
          fill={true}
          onPress={() => {
            dispatch(setCompanyRegister(false));
            navigation.navigate('companybottomtab');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuceesfullyCompanyRegister;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   paddingHorizontal:10,
  },
  aerrowbackicon: {
    width: width * 0.04,
    height: height * 0.04,
  },
  arrowcontainer: {
    marginTop: height * 0.04,
    // width: width * 0.08,
    // height: height * 0.06,
    // paddingHorizontal: width * 0.03,
    // flexDirection:"row",
    // alignItems:"center"
  },
  registration: {
    // marginHorizontal:width*0.19,
    color: '#1C75BC',
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(24),
    textTransform: 'capitalize',
    width: '100%',
  },
  succestextpayra: {
    color: '#000',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(14),
  },
  profileviewcenter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: width * 0.7,
    top: height * 0.009,
  },
  heder: {
    paddingVertical: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiletextheader: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
  },
  profileimage: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderRadius: 100,
    ...Platform.select({
      ios: {
        width: width * 0.12,
        height: height * 0.06,
        overflow: 'hidden',
        borderRadius: 100,
      },
    }),
  },
  prof: {
    flexDirection: 'row',
  },
  prname: {
    color: '#fff',
    fontSize: calculateFontSize(12),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
  },
  premail: {
    marginTop: height * 0.01,
    color: '#fff',
    fontSize: calculateFontSize(11),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
  },
  prnumb: {
    color: '#fff',
    fontSize: calculateFontSize(11),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
  },
  vbgcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
  },
  vbgcon1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: width * 0.02,
  },
  probgtext: {
    color: '#fff',
    fontSize: calculateFontSize(10),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  aboutmehead: {
    color: '#000',
    fontSize: calculateFontSize(19),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
  },
  workexperdive: {
    color: '#000',
    fontSize: calculateFontSize(25),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
    marginTop: height * 0.03,
  },
  textpara: {
    color: '#000',
    fontSize: calculateFontSize(10),
    textTransform: 'capitalize',
    fontFamily: PoppinsRegular,
    marginVertical: height * 0.01,
  },
  aboutparacontainer: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
    // borderBottomWidth: 1,
    // borderBottomColor: "#CACACA"
  },
  //   readmore: {
  //     color: "#004F98",
  //     fontSize: calculateFontSize(1),
  //     textTransform: "capitalize",
  //     fontFamily: "Poppins",
  //   },
  bgresi: {
    width: width * 0.7,
    height: height * 0.23,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  setmem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.01,
    color: '#000',
  },
  divder: {
    borderBottomWidth: 1,
    borderBottomColor: '#949494',
  },
  txt: {
    color: '#000',
    fontSize: calculateFontSize(14),
    fontFamily: PoppinsRegular,
  },
  icon: {
    right: width * 0.02,
  },
});
