import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RadioButton} from 'react-native-paper';
import {Button} from '../../Components';
import {ArrowBack} from '../../Components';
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';

const Rolescreen = ({navigation}) => {
  const [selectedType, setSelectedType] = useState(null);
  const jobTypes = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];

  const handleTypeChange = value => {
    setSelectedType(value);
  };

  return (
    <SafeAreaView style={styles.mainCon}>
      <View style={{paddingHorizontal: width * 0.02}}>
        <ArrowBack />
      </View>
      <View style={{width: '100%'}}>
        <Text style={styles.heading}>
          Does this role require ammunition experience?
        </Text>
      </View>
      <View style={styles.type}>
        {jobTypes.map(type => (
          <View key={type.value} style={styles.typeItem}>
            <RadioButton
              value={type.value}
              status={selectedType === type.value ? 'checked' : 'unchecked'}
              onPress={() => handleTypeChange(type.value)}
              uncheckedColor="#BBBBBB"
              color="#1C75BC"
            />
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                color: '#1C75BC',
                fontFamily: PoppinsBold,
              }}>
              {type.label}
            </Text>
          </View>
        ))}
      </View>

      <View style={{alignItems: 'center', bottom: height * 0.01}}>
        <Button
          fill={true}
          name={'Next'}
          onPress={() => navigation.navigate('photolocation')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        flex: 1,
        paddingHorizontal: width * 0.03,
        backgroundColor: '#fff',
      },
    }),
  },

  heading: {
    color: '#1C75BC',
    fontSize: calculateFontSize(28),
    fontFamily: PoppinsBold,
    marginVertical: height * 0.04,
    paddingHorizontal: width * 0.04,
    textTransform: 'capitalize',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: calculateFontSize(28),
        fontFamily: PoppinsBold,
        marginVertical: height * 0.04,
        paddingHorizontal: width * 0.04,
        textTransform: 'capitalize',
      },
    }),
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    }),
  },
  type: {
    flex: 1,
    // marginVertical:height*0.01,
    ...Platform.select({
      ios: {
        flex: 1,
        // marginVertical:height*0.01,
      },
    }),
  },
});

export default Rolescreen;
