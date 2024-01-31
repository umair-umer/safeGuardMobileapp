import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Button } from '../../Components';
const { width, height } = Dimensions.get("window");
import { ArrowBack } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
const initialJobs = [
  'Alaska',
  'Arizona',
  'Washington',
  'Louisiana',
  'Mississippi',
  'South Carolina',
  'New York',
  'South Carolina',
  'Texas'
];

function IndividualJoblocationscreen({ navigation }) {
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
  };

  const handleRemoveSelectedJob = () => {
    setSelectedJob(null);
  };

  const renderJobItem = ({ item }) => (
    <TouchableOpacity
      style={styles.searchResultItem}
      onPress={() => handleJobSelect(item)}
    >
      <Text>{item}</Text>
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

  return (
    <SafeAreaView style={styles.mainCon}>
      <View style={{ bottom: height * 0.03, paddingHorizontal: width * 0.03 }}>
        <ArrowBack />
      </View>

      <Text style={styles.txt}>
        Job location
      </Text>

      <View style={{ paddingHorizontal: width * 0.03 }}>
        <TextInput
          style={styles.searchBar}
          placeholder="Type Location, city or specific address"
          placeholderTextColor={"#1C75BC"}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ paddingHorizontal: width * 0.03 }}>
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderJobItem}
          numColumns={2}

        />
      </View>
      <View style={styles.btncon}>
        <Button fill={true} name="Next" onPress={() => navigation.navigate('individualempTyp')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.06,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.06,
        backgroundColor: "#fff",
      }
    })

  },

  txt: {
    color: "#1C75BC",
    fontSize: calculateFontSize(35),
    fontWeight: "700",
    paddingHorizontal: width * 0.04,
    ...Platform.select({
      ios: {
        color: "#1C75BC",
        fontSize: calculateFontSize(35),
        fontWeight: "700",
      }
    })
  },
  searchBar: {
    height: height * 0.07,
    borderColor: '#1C75BC',
    borderWidth: 1,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    color: "#000",
    ...Platform.select({
      ios: {
        height: height * 0.07,
        borderColor: '#1C75BC',
        borderWidth: 1,
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.03,
        borderRadius: 10,
        color: "#000",
      }
    })
  },
  selectedJobView: {
    padding: height * 0.02,
    marginTop: height * 0.02,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    color: "#1C75BC",
    ...Platform.select({
      ios: {
        padding: height * 0.02,
        marginTop: height * 0.02,
        backgroundColor: '#C3E5FF',
        borderRadius: 10,
        color: "#1C75BC",
      }
    })
  },
  selectedJobText: {
    fontSize: calculateFontSize(18),
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: calculateFontSize(18),
        fontWeight: 'bold',
      }
    })
  },
  searchResultItem: {
    padding: height * 0.012,
    marginBottom: height * 0.008,
    marginRight: width * 0.02,
    backgroundColor: "#C3E5FF",
    borderRadius: 10,
    color: "#000",
    width: width * 0.43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        padding: height * 0.012,
        marginBottom: height * 0.008,
        marginRight: width * 0.02,
        backgroundColor: "#C3E5FF",
        borderRadius: 10,
        color: "#000",
        width: width * 0.43,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    })
  },
  removeButton: {
    width: width * 0.069,
    height: height * 0.033,
    backgroundColor: '#1C75BC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        width: width * 0.069,
        height: height * 0.033,
        backgroundColor: '#1C75BC',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }
    })
  },
  removeButtonText: {
    color: '#C3E5FF',
    fontWeight: "500",
    ...Platform.select({
      ios: {
        color: '#C3E5FF',
        fontWeight: "500",
      }
    })
  },
  btncon: {

    height: height * 0.37,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: height * 0.37,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }
    })


  },


});

export default IndividualJoblocationscreen