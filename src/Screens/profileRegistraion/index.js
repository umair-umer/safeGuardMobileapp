import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Vector from '../../Assests/Vector.png';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import Feather from 'react-native-vector-icons/Feather';
import {Button, InputText, Resgistrationsuccesmodal} from '../../Components';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import {useDispatch, useSelector} from 'react-redux';
import {baseUrl} from '../../Utilites';
import {PostApi} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {showMessage} from 'react-native-flash-message';
import moment from 'moment';
import Loader from '../../Components/Loader';
import {setUserRole} from '../../redux/actions/authAction';
import {CommonActions} from '@react-navigation/native';

const ProfileRegistraion = ({navigation, route}) => {
  const userDetails = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(userDetails?.name);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState(userDetails?.email);
  const [num, setNum] = useState(userDetails?.phone);
  const [licnum, setLicnum] = useState('');
  const [dob, setDob] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [profileImage, setProfileImage] = useState();
  const [isLoading, setLoading] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);
  const gradDetails = route.params;

  console.log('gradDetails=-=====>', gradDetails);

  const profilepicker = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };
    const result = await launchImageLibrary(options);
    console.log(result);
    if (result.assets?.[0].uri) {
      setProfileImage(result.assets?.[0].uri);
    }
  };

  const imagepicker = async () => {
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
      setSelectedImage(obj);
    }
  };
  const Handlechange = () => {
    setModalVisible(false);
    navigation.navigate('bottomtab');
  };

  const handleSubmit = () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append('guard_type', gradDetails?.gardType);
    formdata.append('address', address);
    formdata.append('dob', moment(dob).format('DD-MM-YYYY'));
    formdata.append('licence_number', licnum);
    formdata.append('identity_image', selectedImage);
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('phone', num);

    PostApi(`${BaseUrl}guard`, formdata, userDetails?.token)
      .then(res => {
        console.log('res register guard==>', res.data);
        if (res.data?.success) {
          setLoading(false);
          showMessage({
            message: res.data?.message || 'Guard added successfully!',
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
        console.log('err register guard==>', err.response?.data);
        showMessage({
          message: err?.response?.data?.message,
          type: 'warning',
          icon: 'warning',
          floating: true,
          animated: true,
        });
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <Loader
          isVisible={isLoading}
          // text={registrationError}
          Cross={() => setLoading(false)}
        />
      )}
      <View style={styles.arrowcontainer}>
        <TouchableOpacity
          style={styles.aerrowbackicon}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="center"
            style={{width: '100%', height: '100%'}}
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
                  source={{uri: profileImage}}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </View>
            ) : (
              <View
                style={[
                  styles.profileimage,
                  {backgroundColor: '#c0c0c0'},
                ]}></View>
            )}
          </View>
          <TouchableOpacity
            style={styles.editprofilebutton}
            onPress={() => profilepicker()}>
            <Feather size={20} name="edit" color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: width * 0.04}}>
          <InputText
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />

          <InputText
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <InputText
            placeholder="Email Address"
            value={email}
            editable={false}
            onChangeText={text => setEmail(text)}
          />

          <InputText
            placeholder="Mobile Number"
            keyboardType="numeric"
            value={num}
            onChangeText={text => setNum(text)}
          />

          <InputText
            placeholder="Security License Number"
            keyboardType="numeric"
            value={licnum}
            onChangeText={text => setLicnum(text)}
          />

          <InputText
            placeholder="Date of Birth"
            keyboardType="numeric"
            value={dob}
            onChangeText={text => setDob(text)}
          />
        </View>
        <View style={styles.badgecontertext}>
          <Text style={styles.badges}>Add Security badge</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => imagepicker()}>
            <Text style={styles.changephoto}>Change photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.badgeimagecontainer}>
          <View style={styles.badgeimagecontainerpareent}>
            {selectedImage && (
              <View style={styles.idimage}>
                <Image
                  source={{uri: selectedImage?.uri}}
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </View>

        <View style={styles.btcontainer}>
          <Button
            fill={true}
            name="Register"
            onPress={handleSubmit}
            style={{width: '90%', alignSelf: 'center'}}
          />
        </View>
      </ScrollView>

      <Resgistrationsuccesmodal
        isModalVisible={isModalVisible}
        head={'Password update'}
        sucees={'successfully'}
        onPress={Handlechange}
      />
    </SafeAreaView>
  );
};

export default ProfileRegistraion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      ios: {
        flex: 1,
        width: '100%',
      },
    }),
  },
  aerrowbackicon: {
    width: '10%',
    height: height * 0.03,
  },
  arrowcontainer: {
    height: height * 0.09,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  registration: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(20),
    textAlign: 'center',
    width: '90%',
  },
  profileimage: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 360,
    ...Platform.select({
      ios: {
        width: 150,
        height: 150,
        overflow: 'hidden',
        borderRadius: 360,
      },
    }),
  },
  procontainer: {
    height: height * 0.24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editprofilebutton: {
    width: width * 0.07,
    height: height * 0.035,
    backgroundColor: '#1C75BC',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: '55%',
    position: 'absolute',
  },
  btcontainer: {
    // bottom:height*0.02,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    paddingHorizontal: width * 0.02,
    // marginTop: height*0.01,
  },

  badgecontertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    alignItems: 'center',
  },
  badges: {
    color: '#000',
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(14),
  },
  changephoto: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontSize: calculateFontSize(12),
  },
  badgeimagecontainer: {
    width: '100%',
    height: height * 0.3,
    paddingHorizontal: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeimagecontainerpareent: {
    width: '100%',
    height: height * 0.28,
    borderRadius: 10,
    backgroundColor: '#d4cfcf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  idimage: {
    width: '100%',
    height: '100%',
  },
});
