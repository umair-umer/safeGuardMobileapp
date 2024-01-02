import React,{useState} from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView,TextInput } from 'react-native';
const { width, height } = Dimensions.get("window");
import { RadioButton } from 'react-native-paper';
import { Button } from '../../Components';
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
function IndividualSalaryexpscreen({navigation}) {
    const [selectedType, setSelectedType] = useState(null);
    const jobTypes = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        // { label: 'Internship', value: 'Internship' },
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
<Text style={styles.heading}>Salary</Text>
</View>

<View style={styles.inpcon}>
<TextInput
placeholder='start from'
placeholderTextColor="#1C75BC"
style={styles.inp}

/>
<TextInput
placeholder='To'
placeholderTextColor="#1C75BC"
style={styles.inp}

/>
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
   style={{color:"#000",fontSize:calculateFontSize(20),
   color:"#1C75BC",fontWeight:"500"}} 
   >{type.label}</Text>

 </View>
))}
</View>


<View style={{alignItems:"center",bottom:height*0.02}}>
<Button fill={true} name={"Next"}   onPress={()=>navigation.navigate("individualrolescreen")} />

</View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainCon: {
      flex:1,
      paddingHorizontal: width * 0.05,
      // paddingVertical: height * 0.06,
      backgroundColor:"#fff",
    },
  
    heading: {
      color: "#1C75BC",
      fontSize: calculateFontSize(24),
      fontWeight: "700",
      marginVertical: height * 0.05,
    },

    inpcon:{

        
        backgroundColor:"#fff"
    },

    inp:{


        borderColor:"#1C75BC",
        borderWidth:1,
        backgroundColor:"#fff",
        borderRadius:10,
        marginVertical:height*0.008,
        paddingHorizontal:width*0.04,
        paddingBottom:height*0.03,
        color:"#000"
    },
    typeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      type:{

 flex:1,
          marginVertical:height*0.04  
      },
  
   
})  

export default IndividualSalaryexpscreen


