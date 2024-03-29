import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  PoppinsBold,
  PoppinsRegular,
  calculateFontSize,
} from '../../Utilites/font';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from '../../Components';
import {ArrowBack} from '../../Components';

const jobData = [
  {id: 1, title: '1. Armed Security Guard'},
  {id: 2, title: '2. Unarmed Security'},
  {id: 3, title: '3. Guard Corporate Security Guard'},
  {id: 4, title: '4. Residential Security Guard Retail'},
  {id: 5, title: '5. Security Guard Event Security Guard'},
  {id: 6, title: '6. Hospital Security Guard Industrial'},
  {id: 7, title: '7. Security Guard Transportation Security'},
  {id: 8, title: '8. Guard School Security Guard Bank'},
  {id: 9, title: '9.Security Guard Museum or Art Gallery'},
  {id: 10, title: '10. Security Guard'},
];

const Jobcategoriesscreen = ({navigation}) => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const toggleJobSelection = job => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter(selectedJob => selectedJob !== job));
    } else {
      setSelectedJobs([...selectedJobs, job]);
    }
  };

  const renderSelectedJobs = () => {
    return selectedJobs.map(job => (
      <View key={job.id} style={styles.selectedJob}>
        <Text style={styles.selectedJobText}>{job.title}</Text>
        <TouchableOpacity onPress={() => removeSelectedJob(job)}>
          <Entypo name="cross" size={10} color="#fff" style={styles.remove} />
        </TouchableOpacity>
      </View>
    ));
  };
  const removeSelectedJob = job => {
    setSelectedJobs(selectedJobs.filter(selectedJob => selectedJob !== job));
  };

  return (
    <SafeAreaView style={styles.mainCon}>
      <View style={{bottom: height * 0.03, paddingHorizontal: width * 0.02}}>
        <ArrowBack />
      </View>
      <View style={styles.headCon}>
        <Text style={styles.heading}>Job Category</Text>
      </View>
      <View style={styles.show}>{renderSelectedJobs()}</View>
      <View style={styles.jobListCon}>
        <FlatList
          data={jobData}
          contentContainerStyle={styles.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => toggleJobSelection(item)}>
              <Text
                style={{
                  backgroundColor: selectedJobs.includes(item)
                    ? '#C3E5FF'
                    : 'transparent',
                  fontSize: calculateFontSize(16),
                  justifyContent: 'center',
                  marginHorizontal: width * 0.04,
                  paddingVertical: height * 0.0028,
                  color: '#1C75BC',
                  fontFamily: PoppinsRegular,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.btncon}>
          <Button
            name="Next"
            fill={true}
            onPress={() => {
              navigation.navigate('jobdefine');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    ...Platform.select({
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.04,
    }),
  },
  headCon: {
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
    ...Platform.select({
      paddingHorizontal: width * 0.03,
      marginBottom: height * 0.03,
    }),
  },
  heading: {
    color: '#1C75BC',
    fontSize: calculateFontSize(28),
    fontFamily: PoppinsBold,
    ...Platform.select({
      color: '#1C75BC',
      fontSize: calculateFontSize(28),
      fontFamily: PoppinsBold,
    }),
  },
  show: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    ...Platform.select({
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }),
  },
  selectedJob: {
    backgroundColor: '#C3E5FF',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      backgroundColor: '#C3E5FF',
      padding: 5,
      margin: 5,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
  },
  selectedJobText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#1C75BC',
    fontFamily: PoppinsRegular,
    ...Platform.select({
      textAlign: 'center',
      fontSize: 11,
      color: '#1C75BC',
      fontFamily: PoppinsRegular,
    }),
  },
  jobListCon: {
    flex: 1,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: '#fff',
      },
    }),
  },
  btncon: {
    alignItems: 'center',
    height: height * 0.39,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    ...Platform.select({
      alignItems: 'center',
      height: height * 0.39,
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
    }),
  },
  btn: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      width: width * 0.9,
      height: height * 0.07,
      backgroundColor: '#1C75BC',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }),
    // marginVertical:height*0.001
  },
  btntx: {
    color: '#fff',
    fontSize: calculateFontSize(16),
    fontFamily: PoppinsRegular,
    ...Platform.select({
      ios: {
        color: '#fff',
        fontSize: calculateFontSize(16),
        fontFamily: PoppinsRegular,
      },
    }),
  },
  remove: {
    backgroundColor: '#1C75BC',
    borderRadius: 100,
    marginHorizontal: width * 0.02,
    ...Platform.select({
      ios: {
        backgroundColor: '#1C75BC',
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: width * 0.02,
      },
    }),
  },
});

export default Jobcategoriesscreen;
