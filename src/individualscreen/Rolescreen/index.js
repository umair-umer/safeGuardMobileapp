import React,{useState} from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView,TextInput } from 'react-native';
const { width, height } = Dimensions.get("window");
import { RadioButton } from 'react-native-paper';
import { Button } from '../../Components';
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
function IndividualRolescreen({navigation}) {
    const [selectedType, setSelectedType] = useState(null);
    const jobTypes = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
   
      ];

      const handleTypeChange = (value) => {
        setSelectedType(value);
      };
    
  return (
    <SafeAreaView style={styles.mainCon}>
    <View style={{paddingHorizontal:width*0.01}}>
<ArrowBack/>
</View>
<View style={styles.headCon}>
  <Text style={styles.heading}>
  Does this role require ammunition experience? 
  </Text>
</View>
<View style={styles.type}>
    {jobTypes.map((type) => (
      
      <View key={type.value} style={styles.typeItem}>
            <RadioButton
          value={type.value}
          status={selectedType === type.value ? 'checked' : 'unchecked'}
          onPress={() => handleTypeChange(type.value)}
          uncheckedColor="#BBBBBB" 
          color="#1C75BC"
        />
        <Text 
        style={{color:"#000",fontSize:20,
        color:"#1C75BC",fontWeight:"500"}} 
        >{type.label}</Text>
    
      </View>
    ))}
  </View>


<View style={{alignItems:"center",bottom:height*0.02}}>
<Button fill={true} name={"Next"}  onPress={()=>navigation.navigate('individualphotolocaton')}/>
</View>    


</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainCon: {
      flex:1,
      paddingHorizontal: width * 0.05,
      // paddingVertical: height * 0.04,
      backgroundColor:"#fff"
    },
  
    heading: {
      color: "#1C75BC",
      fontSize: calculateFontSize(34),
      fontWeight: "700",
      marginVertical: height * 0.06,
      textTransform:"capitalize"
    },
    typeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      type:{

   flex:1,
          // marginVertical:height*0.01,
      },
    
})

export default IndividualRolescreen