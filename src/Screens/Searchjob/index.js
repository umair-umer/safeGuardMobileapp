import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../Utilites/font';
const initialJobs = [
  'Security Guard',
  'Event Security Guard',
  'Night Security Guard',
  'Retail Security Guard',
  'Hotel Security Guard',
  'School Security Guard',
  'Office Security Guard',
];
import {Button} from '../../Components';
function Searchingjob({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = text => {
    setSearchText(text);
    const filteredJobs = initialJobs.filter(job =>
      job.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filteredJobs);
  };

  const handleJobSelect = job => {
    setSelectedJob(job);
    navigation.navigate('locationsearch')
  };

  const handleRemoveSelectedJob = () => {
    setSelectedJob(null);
  };

  const renderJobItem = ({item}) => {
    const isInitialJob = initialJobs.includes(item);
    const backgroundColor = isInitialJob ? '#C3E5FF' : '#1C75BC';

    return (
      <TouchableOpacity
      
        style={{
          ...styles.searchResultItem,
          backgroundColor,
        }}
        onPress={() => handleJobSelect(item)}>
        <Text
          style={{
            color: '#1C75BC',
            fontWeight: '600',
            paddingHorizontal: width * 0.007,
            fontSize: calculateFontSize(10),
          }}>
          {item}
        </Text>
        {selectedJob === item && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemoveSelectedJob}>
            <Text style={styles.removeButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.heading}>
          <Text style={styles.txt}>
            What job or company are you looking for?
          </Text>
          <Text style={styles.slogan}>
            Choose your job role for better search
          </Text>
        </View>

        <TextInput
          style={styles.searchBar}
          placeholder="Search for jobs"
          value={searchText}
          placeholderTextColor={'#000'}
          onChangeText={handleSearch}
        />

        <View style={{height:height*0.55}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderJobItem}
            numColumns={2}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button name="search" fill={true} onPress={()=>navigation.navigate('locationsearch')}/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    // width: width * 0.58,
  },
  txt: {
    color: '#1C75BC',
    fontSize: calculateFontSize(40),
    fontWeight: '700',
    ...Platform.select({
      ios: {
        color: '#1C75BC',
        fontSize: calculateFontSize(36),
        fontWeight: '700',
      },
    }),
  },
  slogan: {
    color: '#939393',
    fontWeight: '600',
    fontSize: calculateFontSize(15),
  },
  searchBar: {
    height: height * 0.07,
    borderColor: '#B3B3B3',
    borderWidth: 2,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    color: '#000',
  },
  selectedJobView: {
    padding: height * 0.02,
    // marginTop: height * 0.02,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    color: '#1C75BC',
  },
  selectedJobText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  searchResultItem: {
    padding: height * 0.01,
    marginBottom: height * 0.008,
    marginRight: width * 0.02,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    width: width * 0.43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    width: width * 0.056,
    height: height * 0.026,
    backgroundColor: '#1C75BC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#C3E5FF',
    fontWeight: '500',
    fontSize: calculateFontSize(10),
  },
  btnn: {
    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: '#1C75BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    //  marginVertical:height*0.1,
    marginTop: height * 0.27,
  },
});

export default Searchingjob;
