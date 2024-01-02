
import React, { useState, useRef } from 'react';
import { FlatList, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import send from '../../Assests/send.png';
import savedicon from '../../Assests/savedicon.png';
import { calculateFontSize } from '../../Utilites/font';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import DP from '../../Assests/dp.png';
import employes from '../../Assests/employes.png';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import mdicompany from '../../Assests/mdicompany.png';
import doll from '../../Assests/doll.png';

import AntDesign from 'react-native-vector-icons/AntDesign';





import { Button } from '../../Components';


const JobDetail = ({navigation}) => {
const [show,setshow]=useState(false)
const [jobdesciption, setJobDescription] = useState(true);
const [company, setCompany] = useState(false);
const [benifit, setBenifit] = useState(false);




const handleJobDescriptionClick = () => {
    setJobDescription(true);
    setCompany(false);
    setBenifit(false);
  };

  const handleCompanyClick = () => {
    setJobDescription(false);
    setCompany(true);
    setBenifit(false);
  };

  const handleBenifitClick = () => {
    setJobDescription(false);
    setCompany(false);
    setBenifit(true);
  };


    return (
        <SafeAreaView styl={styles.container}>
            <View style={{ paddingHorizontal: width * 0.04, paddingVertical: height * 0.03 }}>
                <View style={styles.headerjobdetail}>
                    <View style={styles.arrowbutton}>
                        <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Vector} />
                    </View>
                    <View>
                        <Text style={styles.headertext}>Job Details</Text>
                    </View>
                    <View style={styles.headerbuttonflex}>
                        <TouchableOpacity>
                            <View style={styles.savedicon}>
                                <Image source={savedicon} resizeMode='center' style={{ width: "100%", height: "100%" }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.savedicon}>
                                <Image source={send} resizeMode='center' style={{ width: "100%", height: "100%" }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.centerimage}>
                    <View style={styles.dpPicbg}>
                        <View style={styles.dpPic}>
                            <Image resizeMode='center' source={DP} style={styles.img} />
                        </View>
                    </View>
                    <View style={styles.namecontainer}>
                        <Text style={styles.companyname}>Gate Guard</Text>
                        <Text>PeopleReady</Text>
                    </View>

                </View>

                <View style={styles.jobdetail}>
                    <View style={styles.flexdesjob}>
                        <FontAwesome6 name={"location-dot"} size={20} color="#005BAF" style={styles.icon} /><Text style={styles.joblocationname}>Eagle, TX</Text>
                    </View>
                    <View style={styles.flexdesjob}>
                        <FontAwesome name={"dollar"} size={20} color="#005BAF" style={[styles.icon,]} /><Text style={styles.joblocationname}>10K/Mo</Text>
                    </View>
                    <View style={styles.flexdesjob}>
                        <MaterialCommunityIcons name={"timer-outline"} size={20} color="#005BAF" style={styles.icon} /><Text style={styles.joblocationname}>Full Time</Text>
                    </View>

                </View>


                <View style={styles.tabparentcontainer}>


                    <View style={styles.mainbutton}>
                        < TouchableOpacity onPress={handleJobDescriptionClick}  style={jobdesciption? styles.conpndyjobdescriptionActive:styles.conpndyjobdescription}><Text style={jobdesciption ?styles.destexActive:styles.destex}>Job Descriptions</Text></ TouchableOpacity>
                        < TouchableOpacity onPress={handleCompanyClick}  style={company?styles.conpndyjobdescriptionActive :styles.conpndyjobdescription}><Text style={company?styles.destexActive:styles.destex}>Company</Text></ TouchableOpacity>
                        < TouchableOpacity onPress={handleBenifitClick}  style={benifit? styles.conpndyjobdescriptionActive :styles.conpndyjobdescription}><Text style={benifit?styles.destexActive:styles.destex}>Benefits</Text></ TouchableOpacity>
                    </View>

                    <ScrollView style={styles.scroll}
                     showsVerticalScrollIndicator={false}
   
   
   
   >



    {jobdesciption  &&(
         <View style={styles.containbox}>

         <View style={styles.payra}>
             <Text style={styles.jobdesciptioncontaint}>We are seeking a professional Security Guard to join our team. In this role, your primary
                 responsibility will be to create a safe and secure environment. You will protect our premises, 
                 assets, and..{show ? <Text style={styles.jobdesciptioncontaint}>We are seeking a professional Security Guard to join our team. In this role, your primary
                 responsibility will be to create a safe and secure environment. You will protect our premises, 
                 assets,We are seeking a professional Security Guard to join our team. In this role, your primary
                 responsibility will be to create a safe and secure environment. You will protect our premises, 
                 assets,We are seeking a professional Security Guard to join our team. In this role, your primary
                 responsibility will be to create a safe and secure environment. You will protect our premises, 
                 assets,</Text>:""}<Text onPress={()=>setshow(!show)} style={styles.readmore}>Read more </Text></Text>
         </View>
     
     <View>
         <Text style={styles.textres}>Responsibilities </Text>
     </View>
     
     <View style={styles.rescontain}>
     <AntDesign color={"#206CB3"}  name="checkcircleo" size={25}/>
     <View style={styles.payraconteintext}>
     <Text style={styles.textt}>In this role, your primary responsibility will be to create a safe and secure environment</Text>
     </View>
     </View>
     <View style={styles.rescontain}>
     <AntDesign color={"#206CB3"} name="checkcircleo" size={25}/>
     <View style={styles.payraconteintext}>
     <Text style={styles.textt}>Patrol the premises and maintain a high level of visibility</Text>
     </View>
     </View>
     <View style={styles.rescontain}>
     <AntDesign color={"#206CB3"}  name="checkcircleo" size={25}/>
     <View style={styles.payraconteintext}>
     <Text style={styles.textt}>Monitor surveillance cameras</Text>
     </View>
     </View>
     <View style={styles.rescontain}>
     <AntDesign  color={"#206CB3"}  name="checkcircleo" size={25}/>
     <View style={styles.payraconteintext}>
     <Text style={styles.textt}>PMonitor entrances and exits to ensure only authorized personnel access the facility</Text>
     </View>
     </View>
     <View style={styles.rescontain}>
     <AntDesign color={"#206CB3"}  name="checkcircleo" size={25}/>
     <View style={styles.payraconteintext}>
     <Text style={styles.textt}>You will protect our premises, assets, and employees and prevent any illegal or inappropriate occurrences</Text>
     </View>
     </View>
     
     
     
        </View>
    )}
  
{company &&(  <View style={styles.containbox}>
   <View style={styles.margin}>
    <Text style={styles.textres}>About Company  </Text>
</View>
<Text style={styles.text1}>
Gate Guard is the most locally-focused
 security company in the country. Our 80,000+ employees help organizations
 of all sizes achieve superior security programs and results.
</Text>
<View style={styles.margin}>
    <Text style={styles.textres}> Company info  </Text>
</View>
<View style={styles.companyinfo}>
<MaterialCommunityIcons name="web" size={20} color={"#1C75BC"}/>
 <Text style={styles.webstext}>https://www.google.com</Text>
</View>
<View style={styles.companyinfo}>
<FontAwesome6 name="location-dot" size={20} color={"#1C75BC"}/>
 <Text style={styles.webstext}>Mountain View, California USA</Text>
</View>

<View style={styles.companyinfo}>
<View style={styles.iconimage}><Image  resizeMode='center' style={{width:"100%",height:"100%"}} source={mdicompany}/></View>
 <Text style={styles.webstext}>2005</Text>
</View>

<View style={styles.companyinfo}>


<View style={styles.iconimage}><Image  resizeMode='center' style={{width:"100%",height:"100%"}} source={employes}/></View>
 <Text style={styles.webstext}>1000 To 4000 Employees</Text>
</View>

<View style={styles.companyinfo}>
<View style={styles.iconimage}><Image  resizeMode='center' style={{width:"100%",height:"100%"}} source={doll}/></View>

 <Text style={styles.webstext}>https://www.google.com</Text>
</View>



   </View>
)}
{benifit && (
     <View style={styles.containbox} >
     <View style={styles.margin}>
      <Text style={styles.textres}>Facilities and Others  </Text>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15} color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Medical</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15}color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Dental</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15}color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Technical Cartification</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15} color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Meal Allowance</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15} color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Transport Allowance</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15} color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Regular Hours</Text>
  </View>
  </View>
  <View style={styles.rescontainbenifite}>
  <FontAwesome name="circle-thin" size={15}color="#1C75BC"/>
  <View style={styles.payraconteintext}>
  <Text style={styles.textt}>Mondays-Fridays</Text>
  </View>
  </View>
  
     </View>
)

}
 
  



   </ScrollView>









<View style={{justifyContent:"center", alignItems:"center"}}>
<Button name="Apply" fill={true} onPress={()=>navigation.navigate('applyjob')}/>
</View>





                </View>



            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"



    },
    arrowbutton: {
        width: width * 0.02,
        height: height * 0.02,
    },
    savedicon: {
        width: width * 0.06,
        height: height * 0.04,

    },
    headerjobdetail: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerbuttonflex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"red",
        width: width * 0.15,
        justifyContent: "space-between"
    },
    headertext: {
        color: "#206CB3",
        fontSize: calculateFontSize(15),

        fontFamily: "Poppins"
    },
    img: {
        width: "100%",
        height: "100%",
    },
    dpPic: {

        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: "#F3F3F3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding:3

    },
    centerimage: {
        height: height * 0.2,
        justifyContent: "center",
        alignItems: "center",

    },
    companyname: {
        color: "#000",
        fontSize: calculateFontSize(18),
        fontWeight: "700",
        fontFamily: "Poppins"
    },
    companynamesub: {
        color: "#000",
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        fontFamily: "Poppins"
    },
    namecontainer: {
        alignItems: "center"
    },
    dpPicbg: {

        width: width * 0.20,
        height: height * 0.08,
        backgroundColor: "#E4E4E4",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding:10,


    },
    jobdetail: {
        backgroundColor: "#EAF5FF",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 13,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    flexdesjob: {
        width: width * 0.23,

        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    joblocationname: {
        color: "#303030",
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        fontFamily: "Poppins"
    },
    conpndyjobdescription: {
        backgroundColor: "#E4E4E4",
        padding: 10,
        borderRadius: 10
    },
    conpndyjobdescriptionActive:{
        backgroundColor: "#1C75BC",
        padding: 10,
        borderRadius: 10
    },
    mainbutton: {
        marginTop: height * 0.03,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    destex: {
        color: "#000",
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        fontFamily: "Poppins"
    },
    destexActive: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        fontFamily: "Poppins"
    },

    readmore:{
        color: "#1C75BC",
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        fontFamily: "Poppins"
    },
    jobdesciptioncontaint:{
        color: "#000",
        fontSize: calculateFontSize(13),
        fontWeight: "200",
        fontFamily: "Poppins"
    },
    payra:{
        marginVertical:height*0.03
    },
    textres:{
        color: "#000",
        fontSize: calculateFontSize(20),
        fontWeight: "200",
        fontFamily: "Poppins"
    },
    rescontain:{
        flexDirection:"row",
        alignItems:"center",
      
        marginVertical:height*0.02,
        paddingVertical:height*0.01,
        borderBottomWidth:1,
        borderBottomColor:"#CECECE"
     
    },
    rescontainbenifite:{
        flexDirection:"row",
        alignItems:"center",
      
        marginVertical:height*0.02,
        paddingVertical:height*0.01,
        borderBottomWidth:1,
        borderBottomColor:"#CECECE"
    },
    payraconteintext:{
      width:width*0.7,
      marginLeft:width*0.03,
       
    },
    textt:{
        color: "#000",
        fontSize: calculateFontSize(15),
        fontWeight: "200",
        fontFamily: "Poppins",
        lineHeight:height*0.03
    },
    scroll:{
        height:height*0.5,
        overflow:"scroll"
    },
    margin:{
        marginVertical:height*0.03,
    },
    text1:{
        color: "#000",
        fontSize: calculateFontSize(15),
        fontWeight: "100",
        fontFamily: "Poppins",
        lineHeight:height*0.03
    },
    companyinfo:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:height*0.01,
    },
    webstext:{
        color: "#000",
        fontSize: calculateFontSize(20),
        fontWeight: "100",
        fontFamily: "Poppins",
        // lineHeight:height*0.03,
        marginHorizontal:width*0.03,
    },
    iconimage:{
        width:width*0.04,
        height:height*0.04,
    }
})

export default JobDetail
