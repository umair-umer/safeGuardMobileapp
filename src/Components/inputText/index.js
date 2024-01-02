import React, { useState } from 'react'
import { TextInput,Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get("window");
import closeeye from '../../Assests/closeeye.png'
import { Button } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
const InputText = ({onChangeText,value,secureTextEntry,pass ,placeholder}) => {
    const [icon, seticon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
   {pass ? <View style={styles.container}>
   <TextInput
     style={styles.textInput}
     onChangeText={onChangeText}
     value={value}
     placeholderTextColor={"#1C75BC"}
     placeholder={placeholder}
     secureTextEntry={icon?!showPassword:""}
     
   />
   <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
   <Image
     source={closeeye} // Replace with your icon source
     style={styles.icon}
   />
   </TouchableOpacity>
  
 </View>: <View style={styles.container}>
 <TextInput
   style={styles.textInput}
   onChangeText={onChangeText}
   value={value}
   placeholder={placeholder}
   placeholderTextColor={"#1C75BC"}
   
   
 />
 

</View>}</>
  )
}

export default InputText

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1C75BC',
        borderRadius: 10,
        height: height*0.07,
        marginVertical:height*0.01,
      },
      textInput: {
        flex: 1,
        paddingLeft: width*0.04,
        width:width*0.2,
        color:"#000"
       
      },
      icon: {
        width:width*0.07,
        height: height*0.03,
        marginRight: width*0.03,
        position: 'absolute',
        right:width*0.02, // Adjust the position to suit your layout
    
      },
    
      toggleButton: {
        padding:width*0.03,
      },
    })
