import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import security from '../../Assests/security.png';
import savedicon from '../../Assests/savedicon.png';
import armedsecurity from '../../Assests/armedsecurity.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const IndividualmyjobsScreen = () => {

  const [activeTab, setActiveTab] = useState('applied'); // Default active tab is 'applied'

  const suggestedJobsData = [
    {
      id: '1',
      title: 'Armed Security Guard',
      company: 'Admiral Security Services',
      locationjob: 'Columbia, MD',
      salary: '$20,000/Month',
      jobTime: "Full Time",
      armed: "Armed",
      location: "location"
    },
    {
      id: '2',
      title: 'Armed Security Guard',
      company: 'Admiral Security Services',
      locationjob: 'Columbia, MD',
      salary: '$20,000/Month',
      jobTime: "Full Time",
      armed: "Armed",
      location: "location"
    },



  ]






  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.myjobstext}>My Jobs</Text>
      </View>
      <View style={styles.activejobsview}>
        <Text style={styles.activejobtext}>2 Active Jobs</Text><Text style={styles.postjobs}>Post new job</Text>
      </View>


   <View style={{paddingHorizontal:width*0.02,}}>
   <FlatList
      data={suggestedJobsData}
      renderItem={({ item }) => (
        <View style={styles.sugestboxjob}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.dpPic}>
                <Image resizeMode='center' source={armedsecurity} style={styles.img} />
              </View>
              <View style={{ marginLeft: width * 0.04 }}>
                <Text style={styles.sugestjobtext}>{item.title}</Text>
                <Text style={styles.sugestsubtext}>{item.company}</Text>
              </View>
            </View>
          </View>
          <View style={styles.btcontainer}>
            <View style={styles.jobtiming}>
              <Text style={styles.textjobtiming}>{item.jobTime}</Text>
            </View>
            <View style={styles.jobtiming}>
              <Text style={styles.textjobtiming}>{item.armed}</Text>
            </View>
            <View style={styles.jobtiming}>
              <Text style={styles.textjobtiming}>{item.location}</Text>
            </View>
          </View>
          <View style={styles.flexlocationsugestjob}>
            <Text style={styles.locationtext}>
              <EvilIcons size={15} name={"location"} />
              {item.locationjob}
            </Text>
            <Text style={styles.locationtext}>{item.salary}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
   </View>




     

    </SafeAreaView>
  )
}

export default IndividualmyjobsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingHorizontal: width * 0.04

  },
  header: {
    paddingVertical: height * 0.04,
    justifyContent: "center",
    alignItems: "center"
  },
  myjobstext: {
    color: "#206CB3",
    fontSize: calculateFontSize(15),

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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  dpPic: {

    width: width * 0.13,
    height: height * 0.06,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding:2,

  },
  img: {
    width: "100%",
    height: "100%",
  },
  sugestjobtext: {
    color: "#000",
    fontSize: calculateFontSize(16),
    fontWeight: "500",
    fontFamily: "Poppins"
  },
  sugestsubtext:{
    color: "#000",
    fontSize: calculateFontSize(10),
    fontWeight: "500",
    fontFamily: "Poppins"
  },
  savedicon: {
    width: width * 0.06,
    height: height * 0.04,
  },
  btcontainer: {
    flexDirection: "row", alignItems: "center", marginVertical: height * 0.02,
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
  flexlocationsugestjob: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  locationtext: {
    color: "#000",
    fontSize: calculateFontSize(15),

    fontFamily: "Poppins"
  },
  activebottomeborder: {
    width: width * 0.15, borderBottomWidth: 4, left: width * 0.01, borderBottomColor: "#206CB3", top: height * 0.03
  },
  activebottomebordernone: {
    width: width * 0.11, bottom: height * 0.003
  },
  activejobtext:{
    color: "#8D8D8D",
    fontSize: calculateFontSize(20),
  fontWeight:"500",
    fontFamily: "Poppins"
  },
  postjobs:{
    color: "#fff",
    fontSize: calculateFontSize(15),
  fontWeight:"500",
    fontFamily: "Poppins",
    backgroundColor:"#0057A8",
    padding:10,
    borderRadius:10
  },
  activejobsview:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }

})