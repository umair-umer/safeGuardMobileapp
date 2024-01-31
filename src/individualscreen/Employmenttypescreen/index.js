import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { RadioButton } from 'react-native-paper';
const { width, height } = Dimensions.get("window");
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Button } from '../../Components';
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';

function IndividualEmployetypescreen({ navigation }) {
  const [selectedType, setSelectedType] = useState(null);
  const [salaryRange, setSalaryRange] = useState([50000, 100000]); // Initial salary range
  const jobTypes = [
    { label: 'Full time', value: 'Full time' },
    { label: 'Part time', value: 'Part time' },
    { label: 'Contract', value: 'Contract' },
    { label: 'Internship', value: 'Internship' },
  ];

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <View style={{ bottom: height * 0.03, paddingHorizontal: width * 0.01 }}>
        <ArrowBack />
      </View>
      <View style={styles.headCon}>
        <Text style={styles.heading}>Employment type</Text>
      </View>

      <View style={styles.type}>
        {jobTypes.map((type) => (

          <View key={type.value} style={styles.typeItem}>
            <RadioButton
              value={type.value}
              status={selectedType === type.value ? 'checked' : 'unchecked'}
              onPress={() => handleTypeChange(type.value)}
              uncheckedColor="#1C75BC"
              color="#1C75BC"
            />
            <Text
              style={{
                color: "#000", fontSize: calculateFontSize(20),
                color: "#1C75BC", fontWeight: "500"
              }}
            >{type.label}</Text>

          </View>
        ))}
      </View>

      <View style={styles.willing}>
        <Text style={{ fontSize: calculateFontSize(18), color: "#000", fontWeight: "600" }}>
          Willing To Travel
        </Text>
      </View>

      <View style={styles.salaryRange}>
        <MultiSlider
          values={salaryRange}
          min={0}
          max={200000}
          step={1000}
          sliderLength={width - (width * 0.1)}
          onValuesChange={handleSalaryChange}
          selectedStyle={{ backgroundColor: '#1C75BC' }}
          unselectedStyle={{ backgroundColor: '#E0E0E0' }}
          containerStyle={{ alignItems: "center" }}
        />
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          paddingHorizontal: width * 0.05
        }}>
          <Text style={styles.btxt}>{salaryRange[0]}KM</Text>
          <Text style={styles.btxt}>{salaryRange[1]}KM</Text>
        </View>
      </View>

      <View style={styles.btncon}>
        <View style={{ alignItems: "center" }}>
          <Button fill={true} name={"Next"} onPress={() => navigation.navigate('individualsalaryscreen')} />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.07,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.07,
        backgroundColor: "#fff",
      }
    })
  },

  heading: {
    color: "#1C75BC",
    fontSize: calculateFontSize(24),
    fontWeight: "700",
    marginBottom: height * 0.05,
    ...Platform.select({
      ios: {
        color: "#1C75BC",
        fontSize: calculateFontSize(24),
        fontWeight: "700",
        marginBottom: height * 0.05,
      }
    })
  },

  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
      }
    })

  },
  willing: {
    marginVertical: height * 0.05,
    ...Platform.select({
      ios: {
        marginVertical: height * 0.05,
      }
    })
  },
  btxt: {
    color: "#1C75BC",
    ...Platform.select({
      ios: {
        color: "#1C75BC",
      }
    })
  },
  btncon: {

    height: height * 0.31,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: height * 0.31,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }
    })

  },

  btn: {

    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    ...Platform.select({
      ios:{
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: "#1C75BC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }
    })
  },
  btntx: {
    color: "#fff",
    fontSize: calculateFontSize(16),
    fontWeight: "500",
    ...Platform.select({
      ios:{
        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "500",
      }
    })
  },
});


export default IndividualEmployetypescreen;