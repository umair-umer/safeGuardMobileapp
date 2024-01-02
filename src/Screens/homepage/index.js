import React, { useState, useRef } from 'react';
import { FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import imagebackground from '../../Assests/imagebackground.png';
import { calculateFontSize } from '../../Utilites/font';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Button, InputWithLeftIcon } from '../../Components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DP from '../../Assests/dp.png';
import security from '../../Assests/security.png';
import savedicon from '../../Assests/savedicon.png';
import armedsecurity from '../../Assests/armedsecurity.png';
// import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'; // Import connect
import { saveJob } from '../../store/Action'; // Import your action creator

const Home = ({ navigation, savedJobs, saveJob }) => {

    const [showAll, setShowAll] = useState(false);
    console.log("Saved Jobs home:", savedJobs);
    // Sample data for the job listings
    const data = [
        { key: '1', title: 'Gate Guard', location: 'PeopleReady .Eagle Pass, TX', image: DP },
        { key: '2', title: 'Security Patrol Guard', location: 'Signal of Seattle    Mount , WA', image: security },
        { key: '3', title: 'Gate Guard', location: 'PeopleReady .Eagle Pass, TX', image: DP },
        { key: '4', title: 'Security Patrol Guard', location: 'Signal of Seattle    Mount , WA', image: security },

        // Add more job listings as needed
    ];


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

    const renderItem = ({ item,}) => (
        <TouchableOpacity onPress={()=>{navigation.navigate("jobdetail")}} style={styles.jobBox}>
            <View style={styles.dpPic}>
                <Image resizeMode='center' source={item.image} style={styles.img} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.txt3}>{item.title}</Text>
                <Text style={{color:"#000"}}>{item.location}</Text>
            </View>
            <View style={styles.iconbox}>
                <MaterialCommunityIcons name="dots-horizontal" size={30} color={"#000"} />
            </View>
        </TouchableOpacity>
    );

    const SugestJob = ({ item }) => (

        <View style={styles.sugestboxjob}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.dpPic}>
                        <Image resizeMode='center' source={armedsecurity} style={styles.img} />
                    </View>
                    <View style={{ marginLeft: width * 0.04, }}><Text style={styles.sugestjobtext} >{item.title}</Text><Text style={styles.sugestsubtext}>{item.company}</Text></View>
                </View>

                <View style={styles.savedicon}>

                    <TouchableOpacity onPress={() => saveJob(item)}>
                        <Image source={savedicon} style={{ width: "100%", height: "100%" }} />
                    </TouchableOpacity>
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

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bgresiheight}>
                <View style={styles.bgresi}>

                    <ImageBackground resizeMode='cover' style={[{ width: "100%", height: "100%", }, styles.bg]} source={imagebackground}>

                        <View style={{ paddingHorizontal: width * 0.06, paddingVertical: height * 0.09, }}>
                            <View>
                                <Text style={styles.wellcome}>Welcome Ben</Text>
                            </View>

                            <View style={styles.weldiv}>
                                <Text style={styles.letfindjob}>Let’ Find Job 💼</Text>
                                <View style={styles.iconconwell}>
                                    <Ionicons name="notifications" style={styles.iconsty} />
                                    <FontAwesome name="sliders" style={styles.iconsty} 
                                    onPress={()=>navigation.navigate('spacial')} />

                                </View></View>

                            <View style={styles.whitebox}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('jobsearch')}
                            >
                                <InputWithLeftIcon

                                    icon="search"
                                    placeholder="Search job,company"
                                    onChangeText={(text) => console.log(text)}
                                    value=""
                                     
                                   
                                />
                                </TouchableOpacity>
                                <TouchableOpacity
                                 onPress={()=>navigation.navigate("locationsearch")}
                                >
                                <InputWithLeftIcon

                                    icon="location-dot"
                                    placeholder="Location"
                                    onChangeText={(text) => console.log(text)}
                                    value=""
                                    
                                   
                                />
                                </TouchableOpacity>
                               
                               <Button name="Search" fill={true} onPress={()=>navigation.navigate('spacial')}  />
                           
                            </View>




                        </View>
                    </ImageBackground>
                </View>

            </View>
            <View style={styles.textCon}>
                <Text style={styles.txt}>
                    Popular Jobs
                </Text>
                <TouchableOpacity onPress={toggleShowAll}>
                    <Text style={styles.txt2}>{showAll ? 'Show Less' : 'See All'}</Text>
                </TouchableOpacity>

            </View>






            <ScrollView >
                <View style={styles.JobCON}>

                    <FlatList
                        data={showAll ? data : data.slice(0, 2)} // Show all data when showAll is true
                        keyExtractor={(item) => item.key}
                        renderItem={renderItem}
                    />





                    <View style={styles.textConsug}>
                        <Text style={styles.txt}>
                            Suggested Job
                        </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('sugestjobscreen') }}>
                            <Text style={styles.txt2}>{showAll ? 'Show Less' : 'See All'}</Text>
                        </TouchableOpacity>

                    </View>



                    <FlatList
                        data={showAll ? suggestedJobsData : suggestedJobsData.slice(0, 2)} // Show all data when showAll is true
                        keyExtractor={(item) => item.key}
                        renderItem={SugestJob}
                    />

                </View>
            </ScrollView>













        </SafeAreaView>
    )
}
const mapStateToProps = (state) => ({
    savedJobs: state.savedJobs.savedJobs,
  });

export default connect(mapStateToProps,{ saveJob })(Home)
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    bgresi: {
        width: width,
        height: height * 0.3,
        // backgroundColor: "red"

    },
    bgresiheight: {
        width: width,
        height: height * 0.52,


    },
    weldiv: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconconwell: {
        flexDirection: "row"
    },
    wellcome: {
        color: "#fff",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
    },
    letfindjob: {
        color: "#fff",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(15),
    },
    iconsty: {
        color: "#fff",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(25),
        marginHorizontal: width * 0.02,
    },
    whitebox: {
        marginTop: height * 0.04,
        height: height * 0.3,
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.04,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    JobCON: {
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.04,

    },

    textCon: {
        flexDirection: "row",
        paddingHorizontal: width * 0.06,
        justifyContent: "space-between",
    },
    textConsug:{
        flexDirection: "row",
        paddingHorizontal: width * 0.02,
        justifyContent: "space-between",
    },
    
    txt: {
        color: "#000",
        fontWeight: "600",
        fontSize: calculateFontSize(20)
    },

    txt2: {

        fontWeight: "500",
        color: "#1C75BC"
    },

    jobBox: {

        width: width * 0.9,
        height: height * 0.1,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginVertical: height * 0.01,
        borderRadius: 20,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.02,
        alignItems:"center"

    },
    dpPic: {

        width: width * 0.14,
        height: height * 0.06,
        backgroundColor: "#F3F3F3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding:4,
        

    },
   
    savedicon: {
        width: width * 0.06,
        height: height * 0.04,
    },


    img: {
        width: "100%",
        height: "100%",
    },
    textbox: {

        width: width * 0.5,
        height: height * 0.08,
        justifyContent: "center",
        bottom: height * 0.01,
        left: width * 0.03
    },
    iconbox: {

        width: width * 0.09,
        height: height * 0.07,
        justifyContent: "center",
        left: width * 0.08
    },
    txt3: {

        color: "#000",
        fontSize: calculateFontSize(16),
        fontWeight: "500",

    },
    secCon: {

        marginVertical: height * 0.01,
    },
    sugestjobtext: {
        color: "#000",
        fontSize: calculateFontSize(16),
        fontWeight: "500",
        fontFamily: "Poppins"
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
 



})