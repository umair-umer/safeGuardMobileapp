import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView ,FlatList} from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import security from '../../Assests/security.png';
import savedicon from '../../Assests/savedicon.png';
import armedsecurity from '../../Assests/armedsecurity.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const MyjobsScreen = () => {
  
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


  const filteredJobs = suggestedJobsData.filter(item => {
    if (activeTab === 'applied') return true;
    if (activeTab === 'interview') return (
      <Appliedjobs/>
    )
    /* Apply your filter logic for interviews */;
    if (activeTab === 'archive') return (
      <Appliedjobs/>
    )
    
    /* Apply your filter logic for archived jobs */;
    return false;
  });

  const Appliedjobs = ({ item }) => (

    <View style={styles.sugestboxjob}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.dpPic}>
            <Image resizeMode='cover' source={armedsecurity} style={styles.img} />
          </View>
          <View style={{ marginLeft: width * 0.04, }}><Text style={styles.sugestjobtext} >{item.title}</Text><Text style={styles.sugestsubtext}>{item.company}</Text></View>
        </View>
      </View>
      <View style={styles.btcontainer}>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{item.jobTime}</Text></View>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{item.armed}</Text></View>
        <View style={styles.jobtiming}><Text style={styles.textjobtiming}>{item.location}</Text></View>
      </View>
      <View style={styles.flexlocationsugestjob}><Text style={styles.locationtext}><EvilIcons size={15} name={"location"} />{item.locationjob}</Text>
        <Text style={styles.locationtext}>{item.salary}</Text>
      </View>
    </View>
  );



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.myjobstext}>My Jobs</Text>



      </View>
      <View style={styles.tab}>
      <TouchableOpacity onPress={() => setActiveTab('applied')}>
          <Text style={activeTab === 'applied' ? styles.tabtextactive : styles.tabtext}>Applied</Text>
          <View style={activeTab === 'applied' ? styles.activebottomeborder : styles.activebottomebordernone}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('interview')}>
          <Text style={activeTab === 'interview' ? styles.tabtextactive : styles.tabtext}>Interviews</Text>
          <View style={activeTab === 'interview' ? styles.activebottomeborder : styles.activebottomebordernone}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('archive')}>
          <Text style={activeTab === 'archive' ? styles.tabtextactive : styles.tabtext}>Archived</Text>
          <View style={activeTab === 'archive' ? styles.activebottomeborder : styles.activebottomebordernone}></View>
        </TouchableOpacity>
      </View>
     
      
      

      <View>
        <FlatList
          data={filteredJobs} // Show all data when showAll is true
          keyExtractor={(item) => item.key}
          renderItem={Appliedjobs}
        />

    
      </View>

    </SafeAreaView>
  )
}

export default MyjobsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  tab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    paddingBottom: height * 0.03,
  },
  tabtext: {
    color: "#939393",
    fontSize: calculateFontSize(15),

    fontFamily: "Poppins"
  },
  tabtextactive: {
    color: "#1C75BC",
    fontSize: calculateFontSize(17),
    fontWeight: "700",
    fontFamily: "Poppins",
    textTransform: "capitalize",


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
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15,
  },
  dpPic: {

    width: width * 0.13,
    height: height * 0.06,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

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
  activebottomeborder:{
    width: width * 0.15, borderBottomWidth: 4, left: width * 0.01, borderBottomColor: "#206CB3", top: height * 0.03 
  },
  activebottomebordernone:{
    width: width * 0.11,  bottom: height * 0.003 
  }


})