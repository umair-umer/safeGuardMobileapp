import React from 'react';
import { View, TextInput, StyleSheet,Dimensions,Platform } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // You can use any icon library you prefer
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import Feather from 'react-native-vector-icons/Feather'; 

function InputWithLeftIcon({ icon, placeholder, onChangeText, value }) {
  return (
    <View style={styles.inputContainer}>
    { icon =="search"?<Feather name={icon} size={20} color="#555" style={styles.icon} /> : <FontAwesome6 name={icon} size={20} color="#555" style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={"#000"}
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
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: width*0.02,
    marginVertical: height*0.02,
    backgroundColor:"#E0E0E0",
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: width*0.02,
        marginVertical: height*0.02,
        backgroundColor:"#E0E0E0",
        // width:width*0.96,
        marginHorizontal:width*0.02
      },
    }),
    
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Take up the remaining space
    // width:width*0.3,
    height: height*0.05, // Adjust the height as needed
    fontSize: calculateFontSize(15),
    color: '#333',
  },
});

export default InputWithLeftIcon;
