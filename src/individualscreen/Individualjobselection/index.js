import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform } from 'react-native'
import { calculateFontSize } from '../../Utilites/font'
const { width, height } = Dimensions.get("window")
function Individualjobslectionscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.maincon}>
      <Text style={styles.heading}>
        My jobs
      </Text>

      <View style={styles.viewjob}>
        <Text style={styles.viewjobheading}>
          0 Active jobs
        </Text>
      </View>

      <View style={styles.btncon}>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('individualOtp')}
        >
          <Text style={styles.btntx}>
            Post job
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btntxt}>
            Apply For job
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  maincon: {
    flex:1,
    justifyContent: "center",
    paddingHorizontal: width * 0.04,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        flex:1,
        justifyContent: "center",
        paddingHorizontal: width * 0.04,
        backgroundColor: "#fff",
      }
    })

  },
  heading: {


    color: "#1C75BC",
    fontSize: 19,
    paddingVertical: height * 0.05,
    fontWeight: "500",
    textAlign: "center",
    ...Platform.select({
      ios: {
        color: "#1C75BC",
        fontSize: 19,
        paddingVertical: height * 0.05,
        fontWeight: "500",
        textAlign: "center",
      }
    })
  },
  viewjob: {

    width: width * 0.9,
    height: height * 0.5,
    ...Platform.select({
      ios: {
        width: width * 0.9,
        height: height * 0.5,
      }
    })
  },
  viewjobheading: {
    fontSize: calculateFontSize(19),
    fontWeight: "700",
    color: "grey",
    paddingHorizontal: width * 0.04,
    ...Platform.select({
      ios: {
        fontSize: calculateFontSize(19),
        fontWeight: "700",
        color: "grey",
        paddingHorizontal: width * 0.04
      }
    })
  },
  btncon: {

    paddingVertical: height * 0.12,
    paddingHorizontal: width * 0.01,
    ...Platform.select({
      ios:{
        paddingVertical: height * 0.12,
        paddingHorizontal: width * 0.05,
      }
    })
  },

  btn: {


    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: height * 0.005
  },
  btntx: {


    color: "#fff",
    fontSize: 16,
    fontWeight: "500",

  },
  btn2: {


    width: width * 0.9,
    height: height * 0.07,
    borderColor: "#1C75BC",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: height * 0.005
  },
  btntxt: {


    color: "#1C75BC",
    fontSize: 16,
    fontWeight: "500",

  },

})
export default Individualjobslectionscreen