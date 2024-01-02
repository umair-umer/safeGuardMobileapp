import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView,FlatList } from 'react-native';
import { InputWithLeftIcon } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
const { width, height } = Dimensions.get("window");
import savedicon from '../../Assests/savedicon.png';
import armedsecurity from '../../Assests/armedsecurity.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons'








const suggestedJobsData = [
    {
        id: '1',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    {
        id: '2',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    {
        id: '3',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    {
        id: '4',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    {
        id: '5',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    {
        id: '6',
        title: 'Armed Security Guard',
        company: 'Admiral Security Services',
        locationjob: 'Columbia, MD',
        salary: '$20,000/Month',
        jobTime:"Full Time",
        armed:"Armed",
        location:"location"
    },
    // Add more job listings as needed
];

const SugestedJob = () => {

    const [searchText, setSearchText] = useState('');
    const filteredJobs = suggestedJobsData.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
    );





    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.paddingcontainer}>
                <InputWithLeftIcon 
                 icon="search"
                 placeholder="Search job, company"
                 onChangeText={setSearchText}
                 value={searchText}
                     />


                <View>

                    <Text style={styles.jobstext}>{filteredJobs.length} Jobs available</Text>
                </View>

                <View>
                    <FlatList
                showsVerticalScrollIndicator={false}
                        data={filteredJobs}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.sugestboxjob}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.dpPic}>
                                        <Image resizeMode='cover' source={armedsecurity} style={styles.img} />
                                    </View>
                                    <View style={{ marginLeft: width * 0.04, }}><Text style={styles.sugestjobtext} >{item.title}</Text><Text style={styles.sugestsubtext}>{item.company}</Text></View>
                                </View>
    
                                <View style={styles.savedicon}><Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={savedicon} /></View>
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
                        )}
                    />

                  


                </View>






            </View>


        </SafeAreaView>
    )
}

export default SugestedJob

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff"


    },
    paddingcontainer: {
        paddingHorizontal: width * 0.05
    },
    jobstext: {
        color: "#000",
        fontWeight: "700",
        fontSize: calculateFontSize(20),
        textTransform: "capitalize",
        fontFamily: "Poppins"
    },
    sugestboxjob: {
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.02,
        borderRadius: 10,
        // marginVertical:height*0.0,
        marginBottom:height*0.03,
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
    flexlocationsugestjob: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    locationtext: {
        color: "#000",
        fontSize: calculateFontSize(15),

        fontFamily: "Poppins"
    },
    jobtiming: {
        backgroundColor: "#1C75BC",
        padding: 10,
        borderRadius: 5,
        marginLeft:width*0.03,
    },
    textjobtiming: {
        color: "#fff",
        fontSize: calculateFontSize(10),

        fontFamily: "Poppins"
    },
    sugestsubtext: {
        color: "#BBBBBB",
        fontSize: calculateFontSize(10),

        fontFamily: "Poppins"
    },
})