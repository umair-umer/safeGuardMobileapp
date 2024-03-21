import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PoppinsBold} from '../../Utilites/font';
const {width, height} = Dimensions.get('window');

const Button = ({name, onPress, fill, style}) => {
  return (
    <View style={[styles.btnContainer]}>
      <TouchableOpacity
        style={[fill ? styles.btn2 : styles.btn1, {...style}]}
        onPress={onPress}>
        <Text style={fill ? styles.text : styles.text1}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
//
const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: height * 0.01,
    borderRadius: 10,
    width: '100%',
  },
  btn1: {
    borderColor: '#1C75BC',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  btn2: {
    backgroundColor: '#1C75BC',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: PoppinsBold,
    marginVertical: height * 0.02,
    color: 'white',
  },
  text1: {
    fontSize: 16,
    fontFamily: PoppinsBold,
    marginVertical: height * 0.02,
    color: '#1C75BC',
  },
});
