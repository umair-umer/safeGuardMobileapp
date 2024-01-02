import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from '../../Assests/guard.png'
import { InputWithLeftIcon } from '../../Components';
const { width, height } = Dimensions.get("window");

function Specialization({navigation}) {
  const [boxColors, setBoxColors] = useState(['grey', 'grey', 'grey', 'grey', 'grey', 'grey']); // Initial colors for 3 boxes

  const handleBoxPress = (index) => {
    setBoxColors(prevColors => {
      const newColors = [...prevColors];
      newColors[index] = prevColors[index] === 'grey' ? '#1C75BC' : 'grey';
      navigation.navigate("jobsearch")
      return newColors;
    });

  };

  const renderJobBoxes = () => {
    return (
      <SafeAreaView>
      <View style={styles.clr}>

<View style={{paddingHorizontal:width*0.04,}}>
<InputWithLeftIcon
            icon="search"
            placeholder="Location"
            onChangeText={(text) => console.log(text)}
            value=""
           

        />
        <View style={styles.headingCon}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>Spacialization</Text>
        </View>
</View>
        <View style={styles.main}>
          {boxColors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.JobBox, { backgroundColor: color }]}
              onPress={() => handleBoxPress(index)}
            >
              <View style={styles.circle}>
                <View style={styles.img}>
                  <Image
                    source={Icon}
                    style={{ width: '70%', height: '70%', resizeMode: 'contain' }}
                  />
                </View>
              </View>
              <Text style={{ color: "#fff", fontWeight: "600" }}>Event Security guard</Text>
              <Text style={{ color: "#fff", fontWeight: "600" }}>120 jobs</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </SafeAreaView>
    );
  };

  return (
    <>
      {renderJobBoxes()}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    // paddingVertical: height * 0.0,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 'wrap', // Allow boxes to wrap to the next line
    height:height,
    marginVertical:height*0.02,
  },
  JobBox: {
    width: width * 0.4,
    height: height * 0.2,
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  circle: {
    width: width * 0.13,
    height: height * 0.06,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  headingCon: {
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
    color: "#000",
  
  },
  img: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clr:{

    backgroundColor:"#fff"
  }


});

export default Specialization;