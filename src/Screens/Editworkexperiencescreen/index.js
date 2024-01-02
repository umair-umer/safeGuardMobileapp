import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import DP from '../../Assests/dp.png';
import Feather from 'react-native-vector-icons/dist/Feather';
import { ArrowBack,Button } from '../../Components';

function Editworkexpscreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText1, setEditableText1] = useState('Gate Guard');
  const [editableText2, setEditableText2] = useState('PeopleReady Eagle Pass, TX');
  const [editableText3, setEditableText3] = useState('Dec 2022 - Present');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal:width*0.04}}>

<ArrowBack/>
</View>
      <View style={styles.heder}>
        <Text style={styles.profiletextheader}>Edit work experience</Text>
      </View>
      <View style={styles.headingcon}>
        <Text style={styles.hedingtxt}>Add work experience</Text>
      </View>
      <ScrollView>

      <View style={styles.inpcon}>
        <TextInput
          placeholder='Employment type'
          placeholderTextColor="#000"
          style={styles.inp}
          />
        <View style={styles.inp2}>
  <Text style={{ color: "#206CB3", marginVertical: height * 0.006, fontWeight: "600" }}>Employment type</Text>
  {isEditing ? (
    <View style={styles.editableInputContainer}>
      <TextInput
        style={styles.editableInput}
        placeholder="Enter Employment type"
        placeholderTextColor={"#000"}
        value={editableText1}
        onChangeText={text => setEditableText1(text)}
        />
      <TextInput
        style={styles.editableInput}
        placeholder="Enter Employment place"
        placeholderTextColor={"#000"}
        value={editableText2}
        onChangeText={text => setEditableText2(text)}
        />
      <TextInput
        style={styles.editableInput}
        placeholder="Enter Employment date"
        placeholderTextColor={"#000"}
        value={editableText3}
        onChangeText={text => setEditableText3(text)}
        />
    </View>
  ) : (
    <View style={styles.text}>
      <Text style={{ color: "#000", fontSize: calculateFontSize(16), fontWeight: "700" }}>{editableText1}</Text>
      <Text style={{ color: "#000" }}>{editableText2}</Text>
      <Text style={{ color: "#000" }}>{editableText3}</Text>
    </View>
  )}
</View>
      </View>
      <View style={styles.addexpcon}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.addbtn}>
            <Text style={styles.addtxt}>+</Text>
          </TouchableOpacity>
          <Text style={styles.btntxt}>Add Experience</Text>
        </View>
      </View>
      <View style={styles.procon}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={styles.wrkexperience}>
            <View style={styles.dpPic}>
              <Image resizeMode="center" source={DP} style={styles.img} />
            </View>
            <View style={{ paddingHorizontal: width * 0.03 }}>
              <Text style={{ color: "#000", fontSize: calculateFontSize(16), fontWeight: "700" }}>{editableText1}</Text>
              <Text style={{ color: "#000" }}>{editableText2}</Text>
              <Text style={{ color: "#000" }}>{editableText3}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleEditToggle}>
            <Feather color="#8D8D8D" name={isEditing ? "save" : "edit"} size={calculateFontSize(20)} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.btncon}>

<Button fill={true} name={"Upddate"}/>
</View>
</ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
  heder: {
    paddingVertical: height * 0.001,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    ...Platform.select({
      ios: {
        paddingVertical: height * 0.01,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
    }),
  },
  profiletextheader: {
    color: "#206CB3",
    fontSize: calculateFontSize(20),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "700"
  },
  headingcon: {

    paddingHorizontal: width * 0.04,
  },
  hedingtxt: {

    color: "#000",
    fontSize: calculateFontSize(18),
    fontWeight: "600"
  },
  inpcon: {

    paddingHorizontal: width * 0.04
  },
  inp: {

    borderColor: "#206CB3",
    borderWidth: 1,
    borderRadius: 10,
    height: height * 0.09,
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.02,
    color:"#000"
  },
  inp2: {

    borderColor: "#206CB3",
    borderWidth: 1,
    borderRadius: 10,
    // height: height * 0.14,
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.02
  },
  addexpcon: {

    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.01
  },
  btn: {

    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: "#C3E5FF",
    paddingHorizontal: width * 0.07,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",



  },
  btntxt: {

    color: "#000",
    fontSize: calculateFontSize(16),
    fontWeight: "600",
    marginHorizontal: width * 0.05
  },
  addbtn: {

    width: width * 0.06,
    height: height * 0.028,
    backgroundColor: "#206CB3",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"

  },
  addtxt: {

    color: "#fff",
    fontSize: calculateFontSize(16),
    fontWeight: "600"
  },
  text: {

    paddingVertical: height * 0.01
  },
  wrkexperience: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: height * 0.02,
  },
  wrkexp: {
    color: "#000",
    fontSize: calculateFontSize(13),
    textTransform: "capitalize",
    fontFamily: "Poppins",

  },
  dpPic: {

    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: "#ffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

  },

  img: {
    width: "100%",
    height: "100%",
  },
  procon: {

    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.03
  },
  updatebtncon: {
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.22

  },
 
  editableInput:{
    color:"#000"

},
btncon:{
  alignItems:"center",
  paddingHorizontal:width*0.04,
  marginVertical:height*0.2,
  ...Platform.select({
    ios: {
    
      marginVertical:height*0.09
    },
  }),
},






})


export default Editworkexpscreen
