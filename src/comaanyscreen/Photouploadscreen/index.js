import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import IMG from '../../Assests/upload.png';
const {width, height} = Dimensions.get('window');
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ArrowBack} from '../../Components';
import {Button} from '../../Components';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import {useDispatch} from 'react-redux';

const IndividualPhotouploadscreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const dispatch = useDispatch();

  const imagepicker = () => {
    let option = {
      storageoption: {
        path: 'images',
      },
    };

    launchImageLibrary(option, async response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);

        // dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
        setSelectedImage(uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainCon}>
      <View style={{paddingHorizontal: width * 0.06}}>
        <ArrowBack skip={true} name={'skip'} />
      </View>
      <View style={styles.headCon}>
        <Text style={styles.heading}>Photo</Text>
      </View>

      <View style={styles.photos}>
        <View style={styles.img}>
          <Image
            source={IMG}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => imagepicker()}>
            <Text style={styles.txt}>Upload Location Photo</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.btncon}>
        <Button
          fill={true}
          name={'Next'}
          style={{width: '94%', alignSelf: 'center'}}
          onPress={() => navigation.navigate('companybottomtab')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    // paddingHorizontal: width * 0.06,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        flex: 1,
        // paddingHorizontal: width * 0.06,
        backgroundColor: '#fff',
      },
    }),
  },
  headCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.04,
      },
    }),
  },
  heading: {
    color: '#1C75BC',
    fontSize: calculateFontSize(28),
    fontFamily: PoppinsBold,
    marginVertical: height * 0.02,
    textTransform: 'capitalize',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: calculateFontSize(28),
        fontFamily: PoppinsBold,
        marginVertical: height * 0.02,
        textTransform: 'capitalize',
      },
    }),
  },
  heading1: {
    color: '#1C75BC',
    fontSize: 16,
    fontFamily: PoppinsRegular,
    marginVertical: height * 0.09,
    textTransform: 'capitalize',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: 16,
        fontFamily: PoppinsRegular,
        marginVertical: height * 0.09,
        textTransform: 'capitalize',
      },
    }),
  },
  photos: {
    flex: 1,
    width: '94%',
    alignSelf: 'center',
    borderColor: '#1C75BC',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flex: 1,
        width: '94%',
        alignSelf: 'center',
        borderColor: '#1C75BC',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width * 0.05,
      },
    }),
  },
  uploadButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    bottom: height * 0.024,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        bottom: height * 0.024,
        borderRadius: 10,
      },
    }),
  },
  txt: {
    color: '#000',
    fontSize: calculateFontSize(17),
    fontFamily: PoppinsRegular,
    ...Platform.select({
      ios: {
        color: '#000',
        fontSize: calculateFontSize(17),
        fontFamily: PoppinsRegular,
      },
    }),
  },
  btncon: {
    height: height * 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: height * 0.3,
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
    ...Platform.select({
      ios: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: '#1C75BC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
    }),
    // marginVertical: height * 0.005,
  },
  btntx: {
    color: '#fff',
    fontSize: calculateFontSize(14),
    ...Platform.select({
      ios: {
        color: '#fff',
        fontSize: calculateFontSize(14),
      },
    }),
  },
  img: {
    width: width * 0.09,
    height: height * 0.05,
    top: height * 0.14,
    ...Platform.select({
      ios: {
        width: width * 0.09,
        height: height * 0.05,
        top: height * 0.14,
      },
    }),
  },
});

export default IndividualPhotouploadscreen;
