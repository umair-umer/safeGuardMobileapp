import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const { width, height } = Dimensions.get('window');
import Icon from '../../Assests/solar_upload-linear.png'
import Icon1 from '../../Assests/certificate.png'
import { Resgistrationsuccesmodal } from '../../Components';
function ApplyjobScreen({navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const [uploadedDocument, setUploadedDocument] = useState('');
    const [attachedCertificate, setAttachedCertificate] = useState('');
  
    const handleDocumentPick = async (field) => {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        // Set the picked document to the appropriate state based on the field
        if (field === 'uploadDocument') {
          setUploadedDocument(result.name);
        } else if (field === 'attachCertificate') {
          setAttachedCertificate(result.name);
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker
        } else {
          console.error('Error picking document: ', err);
        }
      }
    };
  


  return (
    <View style={styles.mainCon}>
      <View style={styles.headingCon}>
        <Text style={styles.headingText}>Apply for this job</Text>
      </View>

      <View style={styles.inputCon}>
        <TextInput
          placeholder="Enter Full Name"
          placeholderTextColor="#000"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter Website or Portfolio Link"
          placeholderTextColor="#000"
          style={styles.input}
        />

        <View style={styles.uploadSection}>
          <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentPick('uploadDocument')}>
            <Image source={Icon} style={styles.iconImage} />
            <Text style={styles.uploadButtonText}>{uploadedDocument || 'Upload Documents'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.uploadSection}>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentPick('attachCertificate')}>
            <Image source={Icon1} style={styles.iconImage} />
            <Text style={styles.uploadButtonText}>{attachedCertificate || 'Attach Any Certificate'}</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Write a Message"
          placeholderTextColor="#000"
          style={styles.input2}
          multiline={true}
        />

        <TouchableOpacity  onPress={toggleModal} onPresss={()=>{setModalVisible(false)}}style={styles.button}>
          <Text style={styles.buttonText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
      < Resgistrationsuccesmodal isModalVisible={isModalVisible} onPress={()=>{navigation.navigate("bottomtab"),setModalVisible(false)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,

  },
  headingCon: {
    paddingVertical: height * 0.04,
    alignItems: 'center',
  },
  headingText: {
    color: '#206CB3',
    fontWeight: '600',
    fontSize: 18,
  },
  inputCon: {
    paddingVertical: height * 0.004,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.01,
    height:height*0.06
  },
  input2: {
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.010,
    height:height*0.17
  },
  
  button: {
    backgroundColor: '#206CB3',
    borderRadius: 10,
    padding: height*0.02,
    alignItems: 'center',
    marginTop: height*0.01,
    height:height*0.07
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    borderWidth: 1,
    borderStyle:"dashed",
    borderColor: '#000',
    borderRadius: 5,
    padding: height * 0.06,
    marginTop: height * 0.019,
  },
  uploadButton: {
    flex: 1,
  },
  uploadButtonText: {
    color: '#206CB3',
    fontWeight: 'bold',
    textAlign:"center"
    
  },
  iconImage:{

    width: 24, 
    height: 24,
     marginHorizontal:width*0.3
  }



 
});

export default ApplyjobScreen;