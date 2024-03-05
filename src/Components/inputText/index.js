import React, {useState} from 'react';
import {
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import closeeye from '../../Assests/closeeye.png';
import {PoppinsRegular} from '../../Utilites/font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputText = ({
  onChangeText,
  value,
  secureTextEntry,
  pass,
  placeholder,
  keyboardType,
  editable,
}) => {
  const [icon, seticon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {pass ? (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            placeholderTextColor={'#1C75BC'}
            placeholder={placeholder}
            editable={editable}
            secureTextEntry={icon ? !showPassword : ''}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={togglePasswordVisibility}>
            {showPassword ? (
              <Ionicons name="eye" size={30} color={'#1C75BC'} />
            ) : (
              <Ionicons name="eye-off" size={30} color={'#1C75BC'} />
            )}
            {/* <Image source={closeeye} style={styles.icon} /> */}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            value={value}
            placeholder={placeholder}
            editable={editable}
            placeholderTextColor={'#1C75BC'}
          />
        </View>
      )}
    </>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1C75BC',
    borderRadius: 10,
    height: height * 0.07,
    marginVertical: height * 0.01,
  },
  textInput: {
    flex: 1,
    paddingLeft: width * 0.04,
    width: width * 0.2,
    color: '#000',
    fontFamily: PoppinsRegular,
  },
  icon: {
    width: width * 0.07,
    height: height * 0.03,
    marginRight: width * 0.03,
    position: 'absolute',
    right: width * 0.02, // Adjust the position to suit your layout
  },
  toggleButton: {
    padding: width * 0.03,
  },
});
