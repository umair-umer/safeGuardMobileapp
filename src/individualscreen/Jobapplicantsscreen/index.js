import React from 'react'
import { Text, View, StyleSheet, Dimensions,Button, TextInput, FlatList,TouchableOpacity, SafeAreaView, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
function Myjpobapplicantscreen({navigation}) {
  return (
    <SafeAreaView style={styles.miancon} >


    <View style={styles.headcon}>
    <Text style={styles.heading}>
    25 Applicants

    </Text>
     
    </View>
   

   <View style={styles.contents}>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('pendgingapplication')}} style={styles.blucontent}>
        <Text style={styles.txt}>
            10
        </Text>
        <Text style={styles.txt1}>
            pending
        </Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.blucontent} onPress={()=>{navigation.navigate('shortlistscreen')}}>
        <Text style={styles.txt}>
            10
        </Text>
        <Text style={styles.txt1}>
        shortlisted
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blucontent} onPress={()=>{navigation.navigate('rejectscreen')}}>
        <Text style={styles.txt}>
            05
        </Text>
        <Text style={styles.txt1}>
        rejected
        </Text>
      </TouchableOpacity>

<TouchableOpacity style={styles.blucontent1}>
        <Text style={styles.txt}>
            08
        </Text>
        <Text style={styles.txt1}>
        expired
        </Text>
      </TouchableOpacity>


   </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


    miancon:{
      flex:1,
        paddingHorizontal:width*0.06,
        backgroundColor:"#fff",
        // justifyContent:"center",
       
       
  },
  headcon:{

    
    paddingHorizontal:width*0.06,
    alignItems:"center"
   
  },
  heading:{


    color:"#1C75BC",
    fontSize:23,
    fontWeight:"600",
    marginVertical:height*0.06
},
contents:{
      
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
},
blucontent:{

       width:width*0.9,
       height:height*0.07,
       backgroundColor:"#0057A8",
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:width*0.05,
       borderRadius:10,
       marginVertical:height*0.01
},
blucontent1:{

    width:width*0.9,
    height:height*0.07,
    backgroundColor:"#0057A8",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:width*0.05,
    borderRadius:10,
    marginVertical:height*0.01,
    opacity:0.4
},

txt:{

      color:"#fff",
      fontSize:34,
      fontWeight:"800"
},
txt1:{

    color:"#fff",
    fontSize:14,
    fontWeight:"700"
}



})


export default Myjpobapplicantscreen
