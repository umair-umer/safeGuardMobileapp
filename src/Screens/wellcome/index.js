import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get("window");
import IMG from '../../Assests/loginImg.png'
import { Button } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';

function Wellcome({navigation}) {
  return (

    <SafeAreaView style={styles.container}>

    <View>
    <View style={styles.img}>

<Image
  source={IMG}
  style={styles.image}
/>

</View>
<View style={styles.wellcomtexcontainer}>
<Text style={styles.welltext}>Welcome to</Text>
<Text style={styles.welltext}>Safe Guard Select</Text>
</View>

<View style={styles.bContainer}>
  <Button  name={"login"} onPress={()=>{navigation.navigate("login")}}/>
  <Button fill={true}  name={"Register"} onPress={()=>{navigation.navigate("usersignup")}}/>
</View>

    </View>
   
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({


  container: {
    flex:1,
    // flexDirection: "column",
    alignItems: "center",
    // justifyContent:"center"

  },
  img: {
    width: width * 0.9,
    height: height * 0.4,
    //    backgroundColor:"red",
    marginVertical: height * 0.1

  },
  btn1: {

    width: width * 0.8,
    height: height * 0.07,
    borderColor: "#1C75BC",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    top: height * 0.22
  },
  btn2: {

    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    alignItems: "center",
    top: height * 0.24,
    borderRadius: 10,

  },


  text: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: height * 0.020,
    color: "white"
  },
  text1: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: height * 0.020,
    color: "#1C75BC"
  },
  image: {

    width:"100",
    height:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text3: {

    textAlign: "center",
    fontSize: 22,
    fontWeight: "400",
    color: "#1C75BC"

  },
  text4: {

    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    color: "#1C75BC"

  },
  wellcomtexcontainer:{
    alignItems:"center"
  },
  welltext:{
    fontWeight: "700",
    color: "#1C75BC",
    fontSize:calculateFontSize(30)
  },
  bContainer:{
    marginTop:height*0.03,
    justifyContent:"center",
    alignItems:"center"
  }


})

export default Wellcome