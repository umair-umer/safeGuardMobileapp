import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {PoppinsRegular, calculateFontSize} from '../../Utilites/font';
import {Button, InputText} from '../../Components';
import Loader from '../../Components/Loader';
import {useDispatch} from 'react-redux';
import LOGO from '../../Assests/loginImg.png';
import {PostApiWithOutToken} from '../../api/helper';
import {BaseUrl} from '../../api/BaseUrl';
import {showMessage} from 'react-native-flash-message';
import {
  setCompanyRegister,
  setUserRole,
  updateUser,
} from '../../redux/actions/authAction';

const Singupscreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [lname, setlname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [phone, setphone] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const dispatch = useDispatch();

  const HandleSignup = async () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validateEmail = reg.test(email);

    if (
      email == '' ||
      name == '' ||
      lname == '' ||
      phone == '' ||
      password == '' ||
      conPassword == ''
    ) {
      setLoading(false);
      showMessage({
        message: 'Please fill all fields!',
        type: 'warning',
        floating: true,
        animated: true,
        icon: 'warning',
      });
    } else if (!validateEmail) {
      setLoading(false);
      showMessage({
        message: 'Please enter a valid email!',
        type: 'danger',
        floating: true,
        animated: true,
        icon: 'danger',
      });
    } else if (password !== conPassword) {
      setLoading(false);
      showMessage({
        message: 'Password and Confirm assword does not match!',
        type: 'warning',
        floating: true,
        animated: true,
        icon: 'warning',
      });
    } else {
      const signupData = new FormData();
      signupData.append('name', name);
      signupData.append('last_name', lname);
      signupData.append('email', email);
      signupData.append('phone', phone);
      signupData.append('password', password);
      signupData.append('c_password', conPassword);

      PostApiWithOutToken(`${BaseUrl}register`, signupData)
        .then(res => {
          console.log('res register====>', res.data);
          if (res.data?.success) {
            dispatch(updateUser(res.data?.data));
            dispatch(setUserRole(true));
            dispatch(setCompanyRegister(true));
            setLoading(false);
            navigation.navigate('selectprofiles');
            showMessage({
              animated: true,
              message: res.data.message,
              type: 'success',
              floating: true,
              icon: 'success',
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
          const RefrenceError = err?.response?.data?.data?.[0];
          // console.log('RefrenceError------', RefrenceError);
          setRegistrationError(RefrenceError);
          showMessage({
            animated: true,
            message: err?.response?.data?.message,
            type: 'danger',
            floating: true,
            icon: 'danger',
          });
        });
    }
  };

  const resetLoginState = () => {
    setLoading(false);
    setRegistrationError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader
          isVisible={isLoading}
          text={
            registrationError?.email
              ? `Email: ${registrationError.email}`
              : registrationError?.phone
              ? `Phone: ${registrationError.phone}`
              : ''
          }
          Cross={() => resetLoginState()}
        />
      ) : null}
      <View style={styles.arrowcontainer}>
        <Text style={styles.registration}>Registration</Text>
      </View>

      <View style={styles.profileimage}>
        <Image
          source={LOGO}
          style={{width: '100%', height: '100%'}}
          resizeMode="center"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrolcontainer}>
        <InputText
          placeholder="First Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <InputText
          placeholder="Last Name"
          value={lname}
          onChangeText={text => setlname(text)}
        />

        <InputText
          placeholder="Email Address"
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />

        <InputText
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={text => setphone(text)}
        />

        <InputText
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <InputText
          placeholder="Confirm Password"
          value={conPassword}
          onChangeText={text => setConPassword(text)}
        />

        <View style={styles.btcontainer}>
          <Button fill={true} name="Register" onPress={HandleSignup} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowcontainer: {
    width: '100%',
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registration: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontWeight: '500',
    fontSize: calculateFontSize(20),
    marginTop: height * 0.06,
  },
  profileimage: {
    marginVertical: height * 0.03,
    width: width * 0.6,
    height: height * 0.14,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.2,

    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.14,
        overflow: 'hidden',
        // justifyContent:"center",
        // alignItems:"center",
        marginHorizontal: width * 0.34,
      },
    }),
  },

  proplaceholder: {
    width: width * 0.3,
    height: height * 0.14,
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#EAEAEA',
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.14,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: '#EAEAEA',
      },
    }),
  },
  procontainer: {
    marginTop: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editprofilebutton: {
    width: width * 0.05,
    height: height * 0.03,
    backgroundColor: '#1C75BC',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: width * 0.08,
    ...Platform.select({
      ios: {
        width: width * 0.05,
        height: height * 0.03,
        backgroundColor: '#1C75BC',
        // overflow:"hidden",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        bottom: height * 0.03,
        left: width * 0.08,
      },
    }),
  },
  badgecontertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
  },
  badges: {
    color: '#000',
    fontFamily: PoppinsRegular,
    fontWeight: '700',
    fontSize: calculateFontSize(15),
  },
  changephoto: {
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    fontWeight: '500',
    fontSize: calculateFontSize(13),
  },

  badgeimagecontainer: {
    width: width,
    height: height * 0.35,
    // paddingVertical:height*0.03,
  },
  badgeimagecontainerpareent: {
    width: width,
    height: height * 0.25,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  idimage: {
    width: width,
    height: height * 0.2,
    right: width * 0.05,
  },
  scrolcontainer: {
    paddingHorizontal: width * 0.05,
    // marginTop: height * 0.1,
  },
  btcontainer: {
    // height: height * 0.5,
    // bottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Singupscreen;
