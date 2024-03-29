import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from '../../Components'
const { width, height } = Dimensions.get("window")
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
function IndividualOneTimeverify({ navigation }) {
  return (
    <SafeAreaView style={styles.miancon} >

    <View style={{paddingHorizontal:width*0.05}}>
    <ArrowBack/>
    </View>
          <View style={styles.headcon}>
            <Text style={styles.heading}>
              1 Time Verification
            </Text>
            <Text style={styles.salogan}>
              Choose your profile for registration
            </Text>
          </View>
    
          <View style={styles.btncon}>
    
          <Button fill={true} name={"Verify Phone"} onPress={() => navigation.navigate("individualverifyprocess")} />
          </View>
    
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  miancon: {
    flex: 1,
    // justifyContent:"center",
    // alignItems: "center",
    backgroundColor: "#fff"
  },
  headcon: {
    flex: 1,
    paddingVertical: height * 0.07

  },
  heading: {


    color: "#1C75BC",
    fontSize: calculateFontSize(32),
    fontWeight: "700",
    textAlign: "center"
  },
  salogan: {

    color: "#939393",
    fontSize: calculateFontSize(14),
    fontWeight: "500",
    textAlign: "center"

  },
  btncon: {
    // top: height * 0.09,
    // height: height * 0.1,
    bottom:height*0.02,
    flexDirection: "column",
    justifyContent: "flex-end",
    // paddingHorizontal: width * 0.01,
    alignItems:"center"

  },

  btn: {


    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: height * 0.02,
  },


})

export default IndividualOneTimeverify