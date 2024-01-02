import React from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import IMG from '../../Assests/sucss.png'
import { Button } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';

function Codeverifiedscreen({ navigation }) {
  return (

    <SafeAreaView style={styles.miancon} >

{/* <View style={{paddingHorizontal:width*0.01}}>
<ArrowBack/>
</View> */}

      <View style={styles.headcon}>
        <View style={styles.imgcon}>
          <Image
            source={IMG}
            style={{ width: "100%", height: "100%" }}

          />

        </View>
        <Text style={styles.heading}>
          Code verified successfully
        </Text>

      </View>


<View style={{alignItems:"center"}}>
<Button fill={true} name={"Start Posting job"} onPress={() => navigation.navigate('jobsslect')} />
  </View>   

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({

  miancon: {

    flex: 1,
    paddingHorizontal: width * 0.06,
    backgroundColor: "#fff",
    paddingBottom:height*0.04,

  },
  imgcon: {

    width: width * 0.2,
    height: height * 0.10,

  },
  headcon: {
flex:1,
    paddingVertical: height * 0.05

  },
  heading: {


    color: "#1C75BC",
    fontSize: calculateFontSize(25),
    fontWeight: "700",
    textAlign: "center"
  },
  salogan: {

    color: "#939393",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center"

  },
  btncon: {

    height: height * 0.67,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center", top: height * 0.07,
  },

  btn: {


    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: height * 0.07,
  },
  btntx: {


    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  }

})

export default Codeverifiedscreen
