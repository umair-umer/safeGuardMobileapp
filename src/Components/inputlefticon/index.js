import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Platform} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {PoppinsRegular, calculateFontSize} from '../../Utilites/font';
import Feather from 'react-native-vector-icons/Ionicons';

function InputWithLeftIcon({icon, placeholder, onChangeText, value}) {
  return (
    <View style={styles.inputContainer}>
      {icon == 'search' ? (
        <Feather name={icon} size={20} color="gray" style={styles.icon} />
      ) : (
        <FontAwesome6 name={icon} size={20} color="gray" style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    paddingLeft: 10,
    margin: 7,
    backgroundColor: '#E0E0E0',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 5,
        paddingLeft: 10,
        margin: 7,
        backgroundColor: '#E0E0E0',
      },
    }),
  },
  icon: {
    width: '8%',
  },
  input: {
    fontSize: calculateFontSize(14),
    color: 'gray',
    fontFamily: PoppinsRegular,
    width: '90%',
  },
});

export default InputWithLeftIcon;
