import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { connect } from 'react-redux';
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import armedsecurity from '../../Assests/armedsecurity.png';
import savedicon from '../../Assests/savedicon.png';
import Swipeout from 'react-native-swipeout';
import { removeSavedJob } from '../../store/Action';
const SavedJobScreen = ({ savedJobs, removeSavedJob }) => {
 
  const handleRemoveJob = (index) => {
    removeSavedJob(index);
  };
  const renderJobs = () => {
    return savedJobs.map((job, index) => {
      const swipeoutBtns = [
        {
          component: (
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveJob(index)}>
              {/* <Text style={styles.deleteButtonText}>Delete</Text> */}
              <EvilIcons name="trash" size={50} color="#1C75BC" style={styles.trashIcon} />
            </TouchableOpacity>
          ),
        },
      ];

      return (
        <Swipeout style={styles.swipeoutContainer} right={swipeoutBtns} autoClose={true}>     
     
    
    <View style={styles.sugestboxjob} key={index}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.dpPic}>
                <Image resizeMode='cover' source={armedsecurity} style={styles.img} />
            </View>
            <View style={{ marginLeft: width * 0.04, }}><Text style={styles.sugestjobtext} >{job.title}</Text>
            <Text style={styles.sugestsubtext}>{job.company}</Text></View>
        </View>
   
        <View style={styles.savedicon}>
   
            <TouchableOpacity onPress={() => removeJob(job)}>
                <Image source={savedicon} style={{ width: "100%", height: "100%" }} />
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.btcontainer}>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{job.jobTime}</Text></View>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{job.armed}</Text></View>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{job.location}</Text></View>
    </View>
    <View style={styles.flexlocationsugestjob}><Text style={styles.locationtext}><EvilIcons size={15} name={"location"} />{job.locationjob}</Text>
        <Text style={styles.locationtext}>{job.salary}</Text>
    </View>
   </View>

   
        </Swipeout>
      );
    });
  };


  return (
   <SafeAreaView style={styles.container}>
    <ArrowBack />
    <Text style={styles.txt}>
    saved jobs
    </Text>
    <View style={styles.padding}>
    <ScrollView showsVerticalScrollIndicator={false}
    
    >{renderJobs()}</ScrollView>




   
    </View>


  
   </SafeAreaView>
  )
}
const mapStateToProps = (state) => ({
  savedJobs: state.savedJobs.savedJobs,
});
const mapDispatchToProps = (dispatch) => ({
  removeSavedJob: (index) => dispatch(removeSavedJob(index))
});
export default connect(mapStateToProps, mapDispatchToProps )(SavedJobScreen) 
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:"#fff",
         paddingHorizontal:width*0.022

    },
    sugestsubtext: {
      color: "#BBBBBB",
      fontSize: calculateFontSize(10),
      fontFamily: "Poppins"
  },
  sugestboxjob: {
      backgroundColor: "#fff",
      paddingHorizontal: width * 0.02,
      paddingVertical: height * 0.02,
      borderRadius: 10,
      marginVertical: height * 0.02,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 15,
  },
  jobtiming: {
      backgroundColor: "#1C75BC",
      padding: 10,
      borderRadius: 5,
      marginLeft: width * 0.03,
  },
  textjobtiming: {
      color: "#fff",
      fontSize: calculateFontSize(10),

      fontFamily: "Poppins"
  },
  sugestjobtext: {
    color: "#000",
    fontSize: calculateFontSize(16),
    fontWeight: "500",
    fontFamily: "Poppins"
},
btcontainer: {
  flexDirection: "row", alignItems: "center", marginVertical: height * 0.02,
},
flexlocationsugestjob: {
  flexDirection: "row",
  justifyContent: "space-between"
},
locationtext: {
  color: "#000",
  fontSize: calculateFontSize(15),

  fontFamily: "Poppins"
},
dpPic: {

  width: width * 0.13,
  height: height * 0.06,
  backgroundColor: "#F3F3F3",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",

},
savedicon: {
  width: width * 0.06,
  height: height * 0.04,
},
img: {
  width: "100%",
  height: "100%",
},
padding:{
  // paddingHorizontal:width*0.04,
},
deleteButton: {
  backgroundColor:"#fff",
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  // borderRadius: 10, // Add your desired radius

},
deleteButtonText: {
  color: '#1C75BC',
  fontSize: calculateFontSize(16),
  fontFamily: 'Poppins',
},
trashIcon: {
  marginTop: 5,
},
swipeoutContainer:{

    backgroundColor:"#fff"
},
txt:{

    color:"#1C75BC",
    textAlign:"center",
    fontWeight:"500",
    bottom:height*0.023,
    fontSize:calculateFontSize(16)
}







  })