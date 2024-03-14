import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import {PoppinsBold, calculateFontSize} from '../../Utilites/font';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {Button, InputText} from '../../Components';
import {launchImageLibrary} from 'react-native-image-picker';
import {PostApi} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import {CommonActions} from '@react-navigation/native';
import {setUserRole} from '../../redux/actions/authAction';
import {showMessage} from 'react-native-flash-message';

const SecurityProfileregistry = ({navigation, route}) => {
  const userDetails = useSelector(state => state.authReducer.user);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [webUrl, setwebUrl] = useState('');
  const [num, setNum] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [webUrlError, setwebUrlError] = useState('');
  const [aboutError, setAboutError] = useState('');
  const [numError, setNumError] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const profilepicker = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };
    const result = await launchImageLibrary(options);
    console.log(result);
    if (result.assets?.[0].uri) {
      const obj = {
        name: result.assets?.[0]?.fileName,
        type: result.assets?.[0]?.type,
        uri: result.assets?.[0]?.uri,
      };
      setProfileImage(obj);
    }
  };

  const Validator = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (address.trim() === '') {
      setAddressError('Address is required');
      isValid = false;
    } else {
      setAddressError('');
    }

    if (location.trim() === '') {
      setLocationError('Location is required');
      isValid = false;
    } else {
      setLocationError('');
    }
    if (about.trim() === '') {
      setAboutError('About is required');
      isValid = false;
    } else {
      setAboutError('');
    }

    if (num.trim() === '') {
      setNumError('Number is required');
      isValid = false;
    } else {
      setNumError('');
    }

    if (webUrl.trim() === '') {
      setwebUrlError('Webiste URL is required');
      isValid = false;
    } else {
      setwebUrlError('');
    }
    // if (isValid) {
    //   navigation.navigate('successCompnyregister', {
    //     name,
    //     address,
    //     email,
    //     num,
    //     licnum,
    //     profileImage,
    //   });
    // }
    return isValid;
  };

console.log(profileImage);

  const handleCompanyRegister = () => {
    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('web_url', webUrl);
    formdata.append('about', about);
    formdata.append('address', address);
    formdata.append('location', location);
    formdata.append('phone', num);
    formdata.append('company_logo_image', profileImage);

    if (Validator()) {
      setLoading(true);
      PostApi(`${BaseUrl}company`, formdata, userDetails?.token)
        .then(res => {
          console.log('res company guard==>', res.data);
          if (res.data?.success) {
            setLoading(false);
            showMessage({
              message: res.data?.message || 'Company added successfully!',
              type: 'success',
              icon: 'success',
              floating: true,
              animated: true,
            });
            dispatch(setUserRole(false));
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'bottomtab'}],
              }),
            );
          } else {
            setLoading(false);
            showMessage({
              message: res.data?.message,
              type: 'warning',
              icon: 'warning',
              floating: true,
              animated: true,
            });
          }
        })
        .catch(err => {
          setLoading(false);
          console.log('err company guard==>', err.response?.data);
          showMessage({
            message: err?.response?.data?.message,
            type: 'warning',
            icon: 'warning',
            floating: true,
            animated: true,
          });
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <Loader isVisible={isLoading} Cross={() => setLoading(false)} />
      )}
      <View style={styles.arrowcontainer}>
        <TouchableOpacity
          style={styles.aerrowbackicon}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="center"
            style={{width: '100%', height: '90%'}}
            source={Vector}
          />
        </TouchableOpacity>
        <Text style={styles.registration}>Profile Registration</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.procontainer}>
          <View style={styles.profileimage}>
            {profileImage ? (
              <View>
                <Image
                  source={{uri: profileImage?.uri}}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </View>
            ) : (
              <View style={styles.proplaceholder}></View>
            )}
          </View>
          <TouchableOpacity
            style={styles.editprofilebutton}
            onPress={() => profilepicker()}>
            <FontAwesome5 resizeMode="center" name="edit" color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: width * 0.04}}>
          <InputText
            placeholder="Company Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.errorText}>{nameError}</Text>

          <InputText
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <Text style={styles.errorText}>{addressError}</Text>

          <InputText
            placeholder="Location"
            value={location}
            onChangeText={text => setLocation(text)}
          />
          <Text style={styles.errorText}>{locationError}</Text>

          <InputText
            placeholder="About"
            value={about}
            onChangeText={text => setAbout(text)}
          />
          <Text style={styles.errorText}>{aboutError}</Text>

          <InputText
            placeholder="Mobile Number"
            keyboardType="numeric"
            value={num}
            onChangeText={text => setNum(text)}
          />
          <Text style={styles.errorText}>{numError}</Text>

          <InputText
            placeholder="Website URL"
            value={webUrl}
            onChangeText={text => setwebUrl(text)}
          />
          <Text style={styles.errorText}>{webUrlError}</Text>
        </View>

        <View style={styles.btcontainer}>
          <Button fill={true} name="Register" onPress={handleCompanyRegister} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityProfileregistry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '96%',
    alignSelf: 'center',
    // paddingHorizontal: width * 0.04,
    ...Platform.select({
      ios: {
        flex: 1,
        // paddingHorizontal: width * 0.04,
      },
    }),
  },
  aerrowbackicon: {
    width: '10%',
    height: height * 0.03,
  },
  arrowcontainer: {
    width: '100%',
    marginTop: height * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registration: {
    width: '90%',
    textAlign: 'center',
    color: '#1C75BC',
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(20),
  },
  profileimage: {
    width: width * 0.32,
    height: height * 0.15,
    overflow: 'hidden',
    borderRadius: 100,
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.15,
        overflow: 'hidden',
        borderRadius: 100,
      },
    }),
  },
  proplaceholder: {
    width: width * 0.32,
    height: height * 0.19,
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#c0c0c0',
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.18,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: '#c0c0c0',
      },
    }),
  },
  procontainer: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editprofilebutton: {
    width: 25,
    height: 25,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    left: '55%',
  },
  btcontainer: {
    bottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    paddingHorizontal: width * 0.02,
    // marginTop: height*0.01,
  },
});
