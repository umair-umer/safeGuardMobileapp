import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const{width,height}=Dimensions.get("window");
const Button = ({name,onPress,fill}) => {
  return (
   <View style={{marginVertical:height*0.01}}> 
     <TouchableOpacity style={fill ?styles.btn2:styles.btn1} onPress={onPress}>
            <Text style={fill ?styles.text:styles.text1}>{name}</Text>
         </TouchableOpacity>
   </View>
  )
}

export default Button

const styles = StyleSheet.create({

    btn1:{

        width:width * 0.8,
        height:height* 0.07,
        borderColor:"#1C75BC",
        borderWidth:1,
        alignItems:"center",
        borderRadius:10,
  
  },

  btn2:{

    width:width * 0.8,
    height:height* 0.07,
    backgroundColor:"#1C75BC",
    alignItems:"center",
  
    borderRadius:10,
   
},
text:{
    fontSize:16,
    fontWeight:"500",
    marginVertical:height * 0.020,
    color:"white"
},
text1:{
 fontSize:16,
 fontWeight:"500",
 marginVertical:height * 0.020,
 color:"#1C75BC"
},

})