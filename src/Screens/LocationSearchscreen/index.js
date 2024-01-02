import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';

import { ArrowBack,Button } from '../../Components';


const initialJobs = [
  'New york',
  'Canda',
  'London uk',
  'Brazil',
  'Portugal',
  'America',
  'UAE'
];

function Loctionsearching({navigation}) {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
  
    const handleSearch = (text) => {
      setSearchText(text);
      const filteredJobs = initialJobs.filter(job => job.toLowerCase().includes(text.toLowerCase()));
      setSearchResults(filteredJobs);
    };
  
    const handleJobSelect = (job) => {
      setSelectedJob(job);
      navigation.navigate('jobprefer')
    };
  
    const handleRemoveSelectedJob = () => {
        setSelectedJob(null);
      };

      const renderJobItem = ({ item }) => {
        const isInitialJob = initialJobs.includes(item);
        const backgroundColor = isInitialJob ? '#C3E5FF' : '#1C75BC';
      
        return (
          <TouchableOpacity
            style={{
              ...styles.searchResultItem,
              backgroundColor,
            }}
            onPress={() => handleJobSelect(item)}
          >
            <Text style={{color:"#1C75BC",fontWeight:"600",paddingHorizontal:width*0.02, fontSize:calculateFontSize(10) }}>{item}</Text>
            {selectedJob === item && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={handleRemoveSelectedJob}
              >
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        );
      };
  return (
    <SafeAreaView >
  <View style={styles.mainCon}>
  <View style={styles.heading}>
      <Text style={styles.txt}>
      where are your 
        preferred locations?
      </Text>
      <Text style={styles.slogan}>
      Choose your preferred locations for better search
      </Text>
    </View>

    <TextInput
      style={styles.searchBar}
      placeholder="Search for location"
      placeholderTextColor={"#000"}
      value={searchText}
      onChangeText={handleSearch}
    />

<View style={{height:height*0.55}}>
<FlatList
      data={searchResults}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderJobItem}
      numColumns={2}  
    />

</View>
 

<View style={styles.btncon}>

<Button fill={true} name={"Search"} onPress={()=> navigation.navigate('jobprefer')}/>
</View>
  </View>

</SafeAreaView>

   
  );
}

const styles = StyleSheet.create({
  mainCon: {
    // flex:1,
    // justifyContent: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.06,
  },
  heading: {
    // width: width * 0.58,
  },
  txt: { 
    color: '#1C75BC',
    fontSize: calculateFontSize(42),
    fontWeight: '700',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: calculateFontSize(32),
        fontWeight: '700',
      },
    }),
  },
  slogan: {
    color: "#939393",
    fontWeight: "600",
    fontSize: calculateFontSize(15),
  },
  searchBar: {
    height:height* 0.07,
    borderColor: '#B3B3B3',
    borderWidth: 2,
    marginTop: height *0.02,
    marginBottom: height *0.02,
    paddingHorizontal: width * 0.03,
    borderRadius:10,
    color:"#000"
  },
  selectedJobView: {
    padding: height*0.02,
    marginTop:height*0.02,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    color:"#1C75BC"
  },
  selectedJobText: {
    fontSize: calculateFontSize(25),
    fontWeight: 'bold',
    color:"black"
  },
  searchResultItem: {
    padding: height *0.01,
    marginBottom:height*0.008,
    marginRight:width*0.02,
    backgroundColor: "#C3E5FF",
    borderRadius: 10,
    width: width * 0.43,  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    width:width*0.056,
    height:height*0.026,
    backgroundColor: '#1C75BC', 
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#C3E5FF',
    fontWeight:"500",
    fontSize:calculateFontSize(10)
  },
  btncon:{

    paddingHorizontal:width*0.04
 }

});

export default Loctionsearching;