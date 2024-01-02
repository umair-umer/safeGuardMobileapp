import React,{useEffect} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { calculateFontSize } from '../../Utilites/font';
const { width, height } = Dimensions.get("window");

const Loader = ({Cross,text }) => {

    
  return (
    <View style={{backgroundColor:'rgba(0, 0, 0, 0.8)',justifyContent:'center',position:"absolute",width:width,height:height,zIndex:11,paddingHorizontal:20}}>
   <TouchableOpacity onPress={Cross} style={{width:width*0.08,height:height*0.04,top:5,bottom:0,left:width*0.9,right:0,position:"absolute",backgroundColor:"#1C75BC",alignItems:"center",borderRadius:100,}} ><Text style={{fontSize:20,color:"#fff"}}>x</Text></TouchableOpacity>
    {text ?<View style={{paddingHorizontal:width*0.03,justifyContent:"center",alignItems:"center",backgroundColor:"#fff",height:height*0.4,borderRadius:10,}}><Text style={{fontSize:calculateFontSize(20),color:"#1C75BC",fontFamily:"Poppins",textAlign:"center",borderRadius:15}}>{text}</Text></View>:<ActivityIndicator color={"#88CFF1"} size={50} />}
    </View>
 
  );
};

export default Loader;