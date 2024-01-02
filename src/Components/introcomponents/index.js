import React from 'react'
import { SafeAreaView, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,Platform } from 'react-native';
const { width, height } = Dimensions.get("window");
import introimage1 from "../../Assests/introimage1.jpg"
import { calculateFontSize } from '../../Utilites/font';
import introimage2 from '../../Assests/introimage2.jpg';
import intro3 from '../../Assests/intro3.jpg';
import introimage4 from '../../Assests/introimage4.jpg'
 const IntroComponentOne = () => {
    console.log(calculateFontSize, "===>fontsize");
    return (
        <SafeAreaView
        // style={{backgroundColor:"green"}}
        >
            <View style={styles.imageview} >
                <Image style={styles.image} source={introimage1} />
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.highlitetext}>Are you a
                    security guard?</Text>
            </View>

            <View style={styles.payraview}>
                <Text style={styles.payra}>Looking to put your badge to better use? Browse a live feed 
                    of security jobs in your area that match your profile.</Text>
            </View>

        </SafeAreaView>
    )
}




 export const IntrocomponentTwo = () => {
  return (
    <SafeAreaView
    // style={{backgroundColor:"green"}}
    >
        <View style={styles.imageview} >
            <Image style={styles.image} source={introimage2} />
        </View>
        <View style={Platform.OS === 'ios'?styles.textcontainer:styles.androidtextcontainer}>
            <Text style={Platform.OS === 'ios'?styles.highlitetext:styles.androidhighlitetext}>Are You A security 
company? </Text>
        </View>

        <View style={styles.payraview}>
            <Text style={styles.payra}>Recruiter by browsing out live list of register staff in your local area, or by advertising specific job: all whilst marketing your security company to potential clients!</Text>
        </View>

    </SafeAreaView>
  )
}
export const IntrocomponentThree = () => {
    return (
      <SafeAreaView
      // style={{backgroundColor:"green"}}
      >
          <View style={styles.imageview} >
              <Image style={styles.image} source={intro3} />
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.highlitetext}>are you a security Trainer 
or training institute? </Text>
          </View>
  
          <View style={styles.payraview}>
              <Text style={styles.payra}>Unlock security expertise with us. Learn, certify, and stay secure. Join for industry-leading training and a safer tomorrow.</Text>
          </View>
  
      </SafeAreaView>
    )
  }
  
  export const Introcomponentfour = () => {
    return (
      <SafeAreaView
      // style={{backgroundColor:"green"}}
      >
          <View style={styles.imageview} >
              <Image style={styles.image} source={introimage4} />
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.highlitetext}>Post jobs more effectively & search jobs easier </Text>
          </View>
  
          <View style={styles.payraview}>
              <Text style={styles.payra}>Safe Guard Select- Uniting the security industry</Text>
          </View>
  
      </SafeAreaView>
    )
  }
  




export default IntroComponentOne

const styles = StyleSheet.create({
    imageview: {
        width: width,
        height: height * 0.6,
        borderBottomLeftRadius: 250,
        overflow: 'hidden'

    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",

    },
    textcontainer: {
        // top:10,
        // backgroundColor:"red",
        // marginTop:height*0.06,
        width: width *0.9,
        marginTop: width * 0.05,
        marginHorizontal: width * 0.0,
        paddingHorizontal: width * 0.04


    },
    highlitetext: {
        color: "#1C75BC",
        fontFamily: "Poppins",
        fontSize: calculateFontSize(23),
        fontWeight: "700"
    },
    payraview:{
        marginTop:height*0.02,
        paddingHorizontal:width*0.03,
        width:width*0.9,
        
    },
    payra: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: calculateFontSize(12),
        fontWeight: "500"
    },
    Androidpayraview:{
        marginTop:height*0.02,
        paddingHorizontal:width*0.03,
        width:width*0.9,
        
    },
    Androidpayra: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: calculateFontSize(12),
        fontWeight: "500"
    },
   androidtextcontainer: {
        // top:10,
        // backgroundColor:"red",
        // marginTop:height*0.06,
        width: width *0.9,
        marginTop: width * 0.05,
        marginHorizontal: width * 0.0,
        paddingHorizontal: width * 0.04


    },
    androidhighlitetext: {
        color: "#1C75BC",
        fontFamily: "Poppins",
        fontSize: calculateFontSize(30),
        fontWeight: "700"
    },

})