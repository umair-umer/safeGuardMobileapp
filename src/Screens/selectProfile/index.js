import React, {useState} from 'react';
import {
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import securitycompany from '../../Assests/securitycompany.png';
import individual from '../../Assests/individual.png';
import securitytrainer from '../../Assests/securitytrainer.png';
import traininginstitue from '../../Assests/traininginstitue.png';
import armedlicence from '../../Assests/armedlicence.png';
import instructerlicence from '../../Assests/instructerlicence.png';
import GUARDVECTOR from '../../Assests/GUARDVECTOR.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';

const data = [
  {
    id: 1,
    text: 'i am a guard',
    image: GUARDVECTOR,
    screenName: 'selectcategories',
    disabled: false,
  },
  {
    id: 2,
    text: 'i am a security Company',
    image: securitycompany,
    screenName: 'Securitycompnay',
    disabled: false,
  },
  {
    id: 3,
    text: 'i am an Individual',
    image: individual,
    screenName: 'Individualmoduel',
    disabled: false,
  },
  {
    id: 4,
    text: 'i am a Security trainer',
    image: securitytrainer,
    screenName: 'Trainingmodule',
    disabled: false,
  },
  {
    id: 5,
    text: 'i am a training institute ',
    image: traininginstitue,
    screenName: 'Traininginstitutemodule',
    disabled: false,
  },
  {id: 6, text: 'Get A Armed license ', image: armedlicence, disabled: true},
  {
    id: 6,
    text: 'Get A INSTRUCTORS license ',
    image: instructerlicence,
    disabled: true,
  },
];
const Selectprofile = ({navigation, route}) => {
  const [buttonColor, setButtonColor] = useState(['#007BFF', '#0056b3']);

  const handleButtonClick = (screenName, profileName) => {
    setButtonColor(['#007BFF', '#0056b3']);
    navigation.navigate(screenName, {profileName: profileName});
  };

  const renderButton = ({item, index}) => {
    return (
      <TouchableOpacity
        disabled={item.disabled}
        key={index}
        onPress={() => handleButtonClick(item.screenName, item?.text)}>
        <LinearGradient colors={buttonColor} style={styles.buttoncontainer}>
          <View style={styles.profileview}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={item.image}
            />
          </View>
          <Text style={styles.selectprofiletext}>{item.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
        style={styles.arrowcontainer}
        onPress={() => navigation.goBack()}>
        <View style={styles.aerrowbackicon}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={Vector}
          />
        </View>
      </TouchableOpacity> */}
      <View style={styles.forgotcontainer}>
        <Text style={styles.forgottext}>Select profile</Text>
        <Text style={styles.forgottextdetail}>
          Choose your profile for registration
        </Text>
      </View>

      <View style={styles.maincontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default Selectprofile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    marginTop: 20,
    textTransform: 'capitalize',
  },
  forgottextdetail: {
    color: '#939393',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(13),
  },
  maincontainer: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
  },
  profileview: {
    width: width * 0.5,
    height: height * 0.1,
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        width: width * 0.3,
        height: height * 0.23,
        backgroundColor: 'transparent',
      },
    }),
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 5,
    height: height * 0.2,
    ...Platform.select({
      ios: {
        width: '100%',
        alignSelf: 'center',
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
    }),
  },
  selectprofiletext: {
    color: '#ffff',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(20),
    textTransform: 'capitalize',
    top: 10,
  },
});
