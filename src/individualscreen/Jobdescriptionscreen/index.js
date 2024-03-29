import React from 'react'
import { Text, View, StyleSheet, Dimensions, Button, TextInput, FlatList, TouchableOpacity, SafeAreaView, Image, Platform } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import { ArrowBack } from '../../Components';
function IndividualJobdescriptionscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.miancon} >

      <View style={{ bottom: height * 0.03, paddingHorizontal: width * 0.03 }}>
        <ArrowBack />
      </View>

      <Text style={styles.heading}>
        Job Description

      </Text>




      <View style={styles.inpcon}>
        <TextInput
          placeholder='Type Title'
          placeholderTextColor={"#1C75BC"}
          style={styles.inp}
        />

        <TextInput
          placeholder='Add Company website URL'
          placeholderTextColor={"#1C75BC"}
          style={styles.inp}
        />

        <TextInput
          placeholder='Description'
          placeholderTextColor={"#1C75BC"}
          style={styles.inp1}
        />
      </View>

      <View style={styles.btncon}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('individualjobLoca')}
        >
          <Text style={styles.btntx}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


  miancon: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: width * 0.04,
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: width * 0.04,
      }
    })
  },

  heading: {
    paddingHorizontal: width * 0.02,
    color: "#1C75BC",
    fontSize: calculateFontSize(35),
    fontWeight: "600",
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.02,
        color: "#1C75BC",
        fontSize: calculateFontSize(35),
        fontWeight: "600",
      }
    })
  },
  btncon: {

    height: height * 0.45,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    ...Platform.select({
      height: height * 0.45,
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    })

  },

  inpcon:{
     
       paddingHorizontal : width * 0.03,
       ...Platform.select({
        paddingHorizontal: width * 0.03
       })
  },

  btn: {

    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: "#1C75BC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }
    })
  },
  btntx: {

    color: "#fff",
    fontSize: calculateFontSize(16),
    fontWeight: "500",
    ...Platform.select({
      ios: {
        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "500",
      }
    })
  },

  inp: {
    borderColor: "#1C75BC",
    borderWidth: 1,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    marginVertical: height * 0.01,
    color: "#000",
    ...Platform.select({
      ios:{
        borderColor: "#1C75BC",
        borderWidth: 1,
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.015,
        borderRadius: 10,
        marginVertical: height * 0.01,
      }
    })

  },
  inp1: {

    borderColor: "#1C75BC",
    borderWidth: 1,
    height: height * 0.2,
    paddingHorizontal: width * 0.06,
    paddingBottom: height * 0.15,
    borderRadius: 10,
    color: "#000",
    ...Platform.select({
      ios:{
        borderColor: "#1C75BC",
        borderWidth: 1,
        height: height * 0.2,
        paddingHorizontal: width * 0.06,
        paddingBottom: height * 0.15,
        borderRadius: 10,
        color: "#000",
      }
    })

  }

})


export default IndividualJobdescriptionscreen