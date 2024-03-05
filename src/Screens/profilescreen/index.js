import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import imagebackground from '../../Assests/imagebackground.png';
import {calculateFontSize} from '../../Utilites/font';
import profileimage from '../../Assests/profileimage.png';
import DP from '../../Assests/dp.png';
import Feather from 'react-native-vector-icons/dist/Feather';
import idimage from '../../Assests/idimage.png';
import Entypo from 'react-native-vector-icons/Entypo';
import {ArrowBack} from '../../Components';
import axios from 'axios';
import {baseUrl} from '../../Utilites';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../redux/actions/authAction';

const Profilescreen = ({navigation}) => {
  const [show, setshow] = useState(false);
  const userDetails = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  // const fetchProfileData = async () => {
  //   setIsLoading(true);
  //   const config = {
  //     method: 'get',
  //     url: `${baseUrl}/auth/profile`,
  //     headers: {
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   };

  //   try {
  //     const response = await axios.request(config);
  //     setProfileData(response.data);
  //     console.log('Profile Data:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching profile data:', error);
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgresi}>
        <ImageBackground
          resizeMode="cover"
          style={[{width: '100%', height: '100%'}, styles.bg]}
          source={imagebackground}>
          <View style={styles.heder}>
            <Text style={styles.profiletextheader}>Profile</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: width * 0.04,
            }}>
            <View style={styles.prof}>
              <View style={styles.profileimage}>
                <Image
                  resizeMode="cover"
                  style={{width: '100%', height: '100%'}}
                  source={profileimage}
                />
              </View>
              <View style={{marginHorizontal: width * 0.05}}>
                <Text style={styles.prname}>{userDetails?.name}</Text>
                <Text style={styles.premail}></Text>
                <Text style={styles.prnumb}></Text>
              </View>
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: height * 0.1,
              }}>
              <TouchableOpacity onPress={() => dispatch(updateUser(''))}>
                <Feather
                  name="log-out"
                  color="#fff"
                  size={calculateFontSize(20)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('editprofile')}>
                <Feather
                  name="edit"
                  color="#fff"
                  size={calculateFontSize(20)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: width * 0.04,
              marginTop: height * 0.02,
              backgroundColor: 'gray',
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
      <ScrollView>
        <View style={{paddingHorizontal: width * 0.03}}>
          <View style={styles.aboutparacontainer}>
            <Text style={styles.aboutmehead}>about me</Text>
            <Text style={styles.textpara}>
              I am a dedicated and vigilant security professional with a strong
              commitment to ensuring the safety and security of people and
              property.
              {show ? (
                <Text style={styles.textpara}>
                  I am a dedicated and vigilant security professional with a
                  strong commitment to ensuring the safety and security of
                  people and property
                </Text>
              ) : null}
              <Text style={styles.readmore} onPress={() => setshow(!show)}>
                {' '}
                Read More
              </Text>{' '}
            </Text>
          </View>

          <View style={styles.skillscontainer}>
            <View>
              <Text style={styles.aboutmehead}>Skills</Text>
            </View>
            <TouchableOpacity>
              <Feather
                name="edit"
                color="#8D8D8D"
                size={calculateFontSize(20)}
                onPress={() => navigation.navigate('addskill')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.skillpoincontainer}>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Surveillance</Text>
            </View>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Communication</Text>
            </View>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Self-Defense</Text>
            </View>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Conflict Resolution</Text>
            </View>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Teamwork</Text>
            </View>
            <View style={styles.skilsscon}>
              <Text style={styles.skilltext}>Valid Security License</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: width * 0.02}}>
            <Text style={styles.workexperdive}>work experience </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.wrkexperience}>
                <View style={styles.dpPic}>
                  <Image resizeMode="contain" source={DP} style={styles.img} />
                </View>
                <View style={{paddingHorizontal: width * 0.03}}>
                  <Text style={styles.aboutmehead}>Gate Guard</Text>
                  <Text style={styles.wrkexp}>PeopleReady Eagle Pass, TX</Text>
                  <Text style={styles.wrkexp}>Dec 2022 - Present</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('workedit')}>
                <Feather
                  name="edit"
                  color="#8D8D8D"
                  size={calculateFontSize(20)}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                marginVertical: height * 0.04,
                borderBottomColor: 'grey',
              }}></View>

            <View style={styles.badgeimagecontainer}>
              <View style={styles.badgeimagecontainerpareent}>
                <View style={styles.idimage}>
                  <Image
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                    source={idimage}
                  />
                </View>
              </View>
            </View>

            <View style={styles.btcontainer}>
              <View style={styles.btn}>
                <View style={styles.iconbtn}>
                  <Entypo name="briefcase" size={20} color={'#fff'} />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: calculateFontSize(14),
                      marginHorizontal: width * 0.05,
                    }}>
                    Employment
                  </Text>
                </View>
                <Text style={{color: '#fff', fontSize: calculateFontSize(12)}}>
                  Part-time
                </Text>
              </View>

              <View style={{marginVertical: height * 0.01}}>
                <View style={styles.btn}>
                  <View style={styles.iconbtn}>
                    <Entypo name="calendar" size={20} color={'#fff'} />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: calculateFontSize(14),
                        marginHorizontal: width * 0.05,
                      }}>
                      Availability
                    </Text>
                  </View>
                  <Text
                    style={{color: '#fff', fontSize: calculateFontSize(12)}}>
                    Immediate Start
                  </Text>
                </View>
              </View>

              <View style={{marginVertical: height * 0.001}}>
                <View style={styles.btn}>
                  <View style={styles.iconbtn}>
                    <Entypo name="location-pin" size={20} color={'#fff'} />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: calculateFontSize(14),
                        marginHorizontal: width * 0.05,
                      }}>
                      Willing to travel
                    </Text>
                  </View>
                  <Text
                    style={{color: '#fff', fontSize: calculateFontSize(12)}}>
                    50 Km
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgresi: {
    width: width,
    height: height * 0.3,
    backgroundColor: 'red',
  },
  heder: {
    paddingVertical: height * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiletextheader: {
    color: '#fff',
    fontSize: calculateFontSize(20),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  profileimage: {
    width: width * 0.2,
    height: height * 0.1,
    overflow: 'hidden',
    borderRadius: 100,
    ...Platform.select({
      ios: {
        width: width * 0.21,
        height: height * 0.09,
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
    fontSize: calculateFontSize(20),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  premail: {
    marginTop: height * 0.01,
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    // fontWeight:"700"
  },
  prnumb: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    // fontWeight:"700"
  },
  vbgcon: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: width * 0.03,
  },
  vbgcon1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: width * 0.09,
  },
  probgtext: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  aboutmehead: {
    color: '#000',
    fontSize: calculateFontSize(25),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  workexperdive: {
    color: '#000',
    fontSize: calculateFontSize(25),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginTop: height * 0.03,
  },
  textpara: {
    color: '#000',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  aboutparacontainer: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#CACACA',
  },
  readmore: {
    color: '#004F98',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  skillscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: height * 0.02,
  },
  skillpoincontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#CACACA',
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  skilsscon: {
    backgroundColor: '#fff',
    marginHorizontal: width * 0.01,
    padding: 5,
    marginVertical: height * 0.009,
    borderRadius: 5,
  },
  skilltext: {
    color: '#000',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  dpPic: {
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: '#ffff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },

  img: {
    width: '100%',
    height: '100%',
  },
  wrkexperience: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.02,
  },
  wrkexp: {
    color: '#000',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
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
    overflow: 'hidden',
    right: width * 0.05,
  },
  btcontainer: {
    bottom: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#206CB3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
  },
  iconbtn: {
    flexDirection: 'row',
  },
});
