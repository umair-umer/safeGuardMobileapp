import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity,  View, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import imagebackground from '../../Assests/imagebackground.png';
import { calculateFontSize } from '../../Utilites/font';
import profileimage from '../../Assests/Profilekiimg.png';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Individualprofilescreen = ({navigation}) => {
  const [show, setshow] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgresi}>

        <ImageBackground resizeMode='cover' style={[{ width: "100%", height: "100%", }, styles.bg]} source={imagebackground}>
          <View style={styles.heder}>
            <Text style={styles.profiletextheader}>My Profile</Text>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: width * 0.04 }}>
            <View style={styles.prof}>
              <View style={styles.profileimage}>
                <Image resizeMode='cover' style={{ width: "1005", height: "100%" }} source={profileimage} />
              </View>
              <View style={{ marginHorizontal: width * 0.05 }}>
                <Text style={styles.prname}>Securitas USA</Text>
                <Text style={styles.premail}>www.SecuritasUSA.com</Text>
                <Text style={styles.prnumb} >Miami, United state of America</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Feather name="edit" color="#fff" size={calculateFontSize(20)} onPress={()=>navigation.navigate('editprofile')} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: width * 0.04, marginTop: height * 0.02, }}>
            <View style={styles.vbgcon}><Text style={styles.probgtext}>1000-1200</Text><Text style={styles.probgtext}>employees</Text></View>
            <View style={styles.vbgcon1}><Text style={styles.probgtext}>19/20/2023</Text><Text style={styles.probgtext}>member Since</Text></View>

            <View style={styles.vbgcon}><Text style={styles.probgtext}>30</Text><Text style={styles.probgtext}>Job posted</Text></View>

          </View>

        </ImageBackground>
      </View>
        <ScrollView>
      <View style={{ paddingHorizontal: width * 0.04, }}>
        <View style={styles.aboutparacontainer}>
          <Text style={styles.aboutmehead}>about company </Text>
          <Text style={styles.textpara}>
          Securitas USA is the most locally-focused security company in the country
          Our 80,000+ employees help organizations of all sizes achieve superior security programs and results.
         </Text>
        </View>


        

<View style={styles.setmem}><Text style={styles.txt}>Setting</Text><Ionicons name="chevron-forward-sharp" color="#949494" size={20} /></View>
<View style={styles.divder}></View>
<View style={styles.setmem}><Text style={styles.txt} >Membership</Text><Ionicons name="chevron-forward-sharp" color="#949494" size={20}  /></View>




      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Individualprofilescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  bgresi: {
    width: width,
    height: height * 0.3,
    backgroundColor: "red"

  },
  heder: {
    paddingVertical: height * 0.04,
    justifyContent: "center",
    alignItems: "center"
  },
  profiletextheader: {
    color: "#fff",
    fontSize: calculateFontSize(20),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "700"
  },
  profileimage: {
    width: width * 0.20,
    height: height * 0.10,
    overflow: "hidden",
    borderRadius: 100,
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.18,
        overflow: "hidden",
        borderRadius: 100,

      },
    },),
  },
  prof: {
    flexDirection: "row"
  },
  prname: {
    color: "#fff",
    fontSize: calculateFontSize(20),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "700"
  },
  premail: {
    marginTop: height * 0.01,
    color: "#fff",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    // fontWeight:"700"
  },
  prnumb: {
    color: "#fff",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    // fontWeight:"700"
  },
  vbgcon: {
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: width * 0.03,

  },
  vbgcon1: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: width * 0.09,
  },
  probgtext: {
    color: "#fff",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
  },
  aboutmehead: {
    color: "#000",
    fontSize: calculateFontSize(25),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "700"
  },
  workexperdive:{
    color: "#000",
    fontSize: calculateFontSize(25),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "700",
    marginTop:height*0.03,
  },
  textpara: {
    color: "#000",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
  },
  aboutparacontainer: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: "#CACACA"
  },
  readmore: {
    color: "#004F98",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
  },
  skillscontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: height * 0.02,
  },
  skillpoincontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "#CACACA",
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  skilsscon: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.01,
    padding: 5,
    marginVertical: height * 0.009,
    borderRadius:5
  },
  skilltext: {
    color: "#000",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "300"
  },
  dpPic: {

    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: "#ffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

  },

  img: {
    width: "100%",
    height: "100%",
  },
  wrkexperience:{
    flexDirection:"row",
    alignItems:"center",
    paddingTop:height*0.02,
   
  },
  wrkexp:{
    color: "#000",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",
  
  },
  badgeimagecontainer:{
    width:width,
    height:height*0.35,
    // paddingVertical:height*0.03,
  

},
badgeimagecontainerpareent:{
    width:width,
    height:height*0.25,
    backgroundColor:"#EAEAEA",
    justifyContent:"center",
    alignItems:"center"
},

iconbtn:{

     flexDirection:"row",
     
},
setmem: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: height * 0.01,
  color: "#000"

},
divder: {
  borderBottomWidth: 1,
  borderBottomColor: "#949494"
},
txt: {
  color: "#000",
  fontSize: calculateFontSize(14),
  fontWeight: "600"
}

})