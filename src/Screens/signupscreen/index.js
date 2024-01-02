import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../Utilites/font';
import Vector from '../../Assests/Vector.png';
import {Button, InputText, Resgistrationsuccesmodal} from '../../Components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import axios from 'axios';
import Loader from '../../Components/Loader';
import {connect, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAuthToken, setUserData} from '../../store/Action';
import LOGO from '../../Assests/loginImg.png'

const Singupscreen = ({navigation, setAuthToken}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [registrationTriggered, setRegistrationTriggered] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [sucess, setsucess] = useState('');
  

const HandleSignup= async()=>{
    setLoading(true); // Show the loader

    // Create JSON data
    const data = {
      firstName: name,
      lastName: lastname,
      email: email,
      phone: phone,
      password: password,
      // Include other form fields here
    };

    const config = {
      method: 'post',
      url: 'https://45be-58-65-211-93.ngrok-free.app/api/v1/safeguard/auth/signup',
      headers: { 
        'Content-Type': 'application/json',
        // Include any other necessary headers here
      },
      data: data, // Pass the JSON data
    };

    try {
      const response = await axios(config);
      console.log('Registration successful:', response.data);

    
      setsucess('Registration successful');
      setModalVisible(true); // Show success modal
      clearFields(); // Clear the form fields
    } catch (error) {
      console.log('Registration failed:', error);
      // Handle errors here
      setLoading(true);
      setRegistrationError(error.response.data.error);
    } 
    
    // finally {
    //   setLoading(false); // Hide the loader
    // }
    // navigation.navigate("wellcome")
}
useEffect(() => {
  // Check if a button triggered the registration
  if (registrationTriggered) {
    HandleSignup();
  }
  // Reset the trigger state
  setRegistrationTriggered(false);
}, [registrationTriggered]); 

const handleRegisterButtonPress = () => {
  // Set the trigger state to true when the button is pressed
  setRegistrationTriggered(true);
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
          text={registrationError ? registrationError.toString() : ''}
          Cross={() => resetLoginState()}
        />
      ) : null}
      <View style={styles.arrowcontainer}>
        <Text style={styles.registration}>Registration</Text>
      </View>

      <View style={styles.profileimage}>
        <Image
        source={LOGO}
        style={{width:"100%",height:"100%"}}
        resizeMode="center"
        />
      </View>
 
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrolcontainer}>
        <InputText
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
     
        <InputText
          placeholder="last name"
          value={lastname}
          onChangeText={text => setlastname(text)}
        />
        
        <InputText
          placeholder="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        
        <InputText
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
       

     

        <InputText
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={phone}
          onChangeText={text => setphone(text)}
        />
        

        <View style={styles.btcontainer}>
          <Button
            fill={true}
            name="Register"
           onPress={handleRegisterButtonPress}
          />
          {/* <Text onPress={()=>navigation.navigate('wellcome')} style={{color:"red"}}>
            ok
          </Text> */}
        </View>
      </ScrollView>

      <Resgistrationsuccesmodal
        isModalVisible={isModalVisible}
        head={'Registration successful'}
        sucees={""}
        onPress={() => {
          navigation.navigate('login'), setModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowcontainer: {
    // marginTop: height * 0.04,
    // width: width * 0.08,
    // height: height * 0.06,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registration: {
    marginHorizontal: width * 0.32,
    color: '#1C75BC',
    fontfamily: 'poppins',
    fontWeight: '500',
    fontSize: calculateFontSize(20),
    marginTop: height * 0.06,
  },
  profileimage: {
    marginVertical:height*0.03,
    width: width * 0.6,
    height: height * 0.14,
    overflow: 'hidden',
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:width*0.2,
   
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.14,
        overflow: 'hidden',
      
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
    fontfamily: 'poppins',
    fontWeight: '700',
    fontSize: calculateFontSize(15),
  },
  changephoto: {
    color: '#1C75BC',
    fontfamily: 'poppins',
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
