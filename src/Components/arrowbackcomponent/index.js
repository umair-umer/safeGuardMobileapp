import React from 'react'
import Vector from '../../Assests/Vector.png';
import {FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import { useNavigation } from '@react-navigation/native';

const ArrowBack = ({title,skip ,name,onPress}) => {
    const navigation=useNavigation()
  return (<>
{skip ?   <View style={styles.arrowcontainer2}>
    <TouchableOpacity 
    style={styles.aerrowbackicon}
    onPress={() => navigation.goBack()}
    >
        <Image resizeMode='center' style={{ width: "100%", height: "100%" }}
            source={Vector} />
    </TouchableOpacity>
    <Text style={styles.registration2}>{name}</Text>
</View>:   <View style={styles.arrowcontainer}>
    <TouchableOpacity 
    style={styles.aerrowbackicon}
    onPress={() => navigation.goBack()}
    >
        <Image resizeMode='center' style={{ width: "100%", height: "100%" }}
            source={Vector} />
    </TouchableOpacity>
    <Text onPress={onPress} style={styles.registration}>{title}</Text>
</View>}
  </>
   
  )
}

export default ArrowBack

const styles=StyleSheet.create({
    aerrowbackicon: {
        width: width * 0.03,
        height: height * 0.03,
    },
     arrowcontainer: {
        marginTop: height * 0.04,
        // width: width * 0.08,
        // height: height * 0.06,
        // paddingHorizontal: width * 0.03,
        flexDirection:"row",
        alignItems:"center",
        // backgroundColor:"#fff",
        
        
    },
    arrowcontainer2: {
        marginTop: height * 0.04,
        // width: width * 0.08,
        // height: height * 0.06,
        // paddingHorizontal: width * 0.03,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        // backgroundColor:"#fff",
        
        
    },

    registration:{
        marginHorizontal:width*0.15,
      color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
        textTransform:"capitalize"
    },
    registration2:{
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
        textTransform:"capitalize",
        borderBottomWidth:1,
        borderBottomColor:"#1C75BC",
    }
})