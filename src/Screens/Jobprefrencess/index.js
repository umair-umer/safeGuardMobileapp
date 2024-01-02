import React, { useState } from 'react';
import { Dimensions, 
        Text, 
        View,
        StyleSheet,
        TextInput,TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
const{width,height}=Dimensions.get("window")
import { Button } from '../../Components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { calculateFontSize } from '../../Utilites/font';

const allCategories = [
    'Armed Security Guard',
    'Unarmed Security Guard',
    'Corporate Security Guard',
    'Customer Service',
    'Event Security Guard',
    'Office Administration',
    'Armed Security Guard',
  ]

function Prefrencesmodal({navigation}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState(null);
    const [salaryRange, setSalaryRange] = useState([50000, 100000]); // Initial salary range
    const toggleCategories = () => {
      setShowAllCategories(!showAllCategories);
    };
  
    const categoriesToShow = showAllCategories ? allCategories : allCategories.slice(0, 5);
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  
    const jobTypes = [
      'Full-time',
      'Part-time',
      'Freelance',
    ];
  
    const handleJobTypeSelect = (jobType) => {
      setSelectedJobType(jobType);
    };
  
    const handleSalaryChange = (values) => {
      setSalaryRange(values);
    };

    const applyFilter = () => {
      // Perform actions when Apply Filter button is clicked
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Job Type:', selectedJobType);
      console.log('Salary Range:', salaryRange);

      navigation.navigate('home')
      // Add logic here to apply the filter based on the selected values
      // For instance, you can dispatch an action, update a state, or make an API call to filter data
    };

    const clearValues = () => {
      setSelectedCategory(null);
      setSelectedJobType(null);
      setSalaryRange([50000, 100000]); // Reset the salary range to the initial state
    };
  
    return (
      <SafeAreaView style={styles.mainCon}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text style={styles.headingtxt}>Set Your Preferences</Text>
              <TouchableOpacity 
               style={styles.cenbtn}
               onPress={()=>navigation.navigate('home')}
              >
                    <Text
                    style={styles.btntxt}
                    >x</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.search}>
              <TextInput
                placeholder="Search location"
                placeholderTextColor={"#000"}
                style={styles.inp}
              />
            </View>
  
            <View style={styles.jobCategory}>
              <Text style={styles.txt}>Job Categories</Text>
              {categoriesToShow.map((category) => (
                <View style={styles.categoryItem} key={category}>
                  <RadioBtn selected={selectedCategory === category} onPress={() => handleCategorySelect(category)} />
                  <Text style={styles.txt1}>{category}</Text>
                </View>
              ))}
              {!showAllCategories && allCategories.length > 5 && (
                <TouchableOpacity onPress={toggleCategories}>
                  <Text style={styles.moreBtn}>+ More</Text>
                </TouchableOpacity>
              )}
            </View>
  
            <View style={styles.lineCon}>
              <View style={styles.lane}></View>
            </View>
  
            <View style={styles.jobType}>
              <Text style={styles.txt}>Job Type</Text>
              {jobTypes.map((jobType) => (
                <View style={styles.categoryItem} key={jobType}>
                  <RadioBtn
                    selected={selectedJobType === jobType}
                    onPress={() => handleJobTypeSelect(jobType)}
                  />
                  <Text style={styles.txt1}>{jobType}</Text>
                </View>
              ))}
            </View>
  
            <View style={styles.lineCon}>
              <View style={styles.lane}></View>
            </View>
            <View style={styles.salaryRange}>
            <Text style={styles.txt}>Salary Range</Text>
            <MultiSlider
        values={salaryRange}
        min={0}
        max={200000}
        step={1000}
        sliderLength={width - 100}
        onValuesChange={handleSalaryChange}
        selectedStyle={{ backgroundColor: '#1C75BC' }}
        unselectedStyle={{ backgroundColor: '#E0E0E0' }}
        containerStyle={{ marginTop: height*0.01,alignItems:"center" }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width*0.05 }}>
        <Text style={styles.btxt}>${salaryRange[0]}k</Text>
        <Text style={styles.btxt}>${salaryRange[1]}k</Text>
      </View>
    </View>
            
       <View style={styles.btncon}>
 
  
          <TouchableOpacity style={styles.clrbtn} onPress={clearValues}>
            <Text style={styles.btxt}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rstbtn} onPress={applyFilter}>
            <Text style={styles.restxt}>Apply Filter</Text>
          </TouchableOpacity>

       </View>

         </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const RadioBtn = ({ selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.radioBtn}>
      {selected ? <View style={styles.radioInner} /> : null}
    </TouchableOpacity>
  );

const styles = StyleSheet.create({

    mainCon:{

        flex:1,        
        backgroundColor:"#1C75BC"
    },
    content:{

          width:"100%",
          height:"auto",
          backgroundColor:"#fff",
          marginTop:height*0.09,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          ...Platform.select({
            ios: {
              width:"100%",
              height:"auto",
              backgroundColor:"#fff",
              // marginTop:height*0.08,
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
            },
          }),
    },
    cenbtn:{
        width:width*0.09,
        height:height*0.04,
        backgroundColor:"#1C75BC",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
    },
    btntxt:{
        color:"#fff",
        fontSize:calculateFontSize(20),
        fontWeight:"500",
        bottom:height*0.003
      

    },
    heading:{

          justifyContent:"space-between",
          alignItems:"center",
          marginVertical:height*0.03,
          paddingHorizontal:width*0.05,
          flexDirection:"row",
          alignItems:"center"
          
    },
    txt:{

        color:"#1C75BC",
        fontSize:18,
        fontWeight:"600",
        
    },
    headingtxt:{

      color:"#1C75BC",
      fontSize:18,
      fontWeight:"600",
      // marginHorizontal:width*0.21
  },
    search:{

          justifyContent:"center",
          paddingHorizontal:width*0.05
    },
    inp:{

        backgroundColor:"#F2F2F2",
        borderRadius:10,
        paddingHorizontal:width*0.05,
        ...Platform.select({
          ios: {
            height:height*0.04,
            backgroundColor:"#F2F2F2",
            borderRadius:10,
            paddingHorizontal:width*0.05,
          
         
          },
        }),
    },
    jobCategory:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.04
    },
    textcon:{
        paddingVertical:height*0.01,
        paddingHorizontal:width*0.01
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:height*0.01,
        
      },
      radioBtn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1C75BC',
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioInner: {
        width: 10,
        height: 10,
        borderRadius: 6,
        backgroundColor: '#1C75BC',
      },
      txt1:{

          color:"#000",
          fontSize:15,
          fontWeight:"600",
          marginHorizontal:width*0.03
      },
      moreBtn: {
        color: '#1C75BC',
        marginTop: height*0.03,
        textAlign:"center",
        fontWeight:"600",
        fontSize:17
      },

      lineCon:{

         paddingHorizontal:width*0.05
      },
      lane:{

           width:width*0.9,
           borderBottomWidth:0.9,
           color:"#EBEBEB",
           opacity:0.3
      },
      jobType:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.04
    },
    salaryRange:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.02,
    },
    btncon:{
      paddingHorizontal:width*0.08,
      paddingVertical:height*0.05,
      flexDirection:"row",
      justifyContent:"space-between",
  },
  clrbtn:{

     width:width*0.3,
     height:height*0.07,
     borderColor:"#B9B9B9",
     borderWidth:1,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:20
  },
  btxt:{
      color:"#1C75BC",
      fontSize:calculateFontSize(14),
      fontWeight:"500"
  },
  rstbtn:{

    width:width*0.3,
    height:height*0.07,
    backgroundColor:"#1C75BC",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  },
  restxt:{

      color:"#fff",
      fontSize:calculateFontSize(14),
      fontWeight:"500"
  }

    

 


    
})

export default Prefrencesmodal