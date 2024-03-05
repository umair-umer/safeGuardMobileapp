import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Resgistrationsuccesmodal({isModalVisible, onPress, head, sucees}) {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  return (
    <View style={{flex: 1}}>
      {/* <Button title="Click Me" onPress={onPress} /> */}

      <Modal isVisible={isModalVisible}>
        <View style={styles.mainContainer}>
          <View style={styles.iconCon}>
            <View style={styles.iconCon2}>
              <AntDesign name="checkcircle" style={styles.icon} />
              {/* <Text style={styles.icon} >0</Text> */}
            </View>
          </View>

          <View style={styles.txtCon}>
            <Text style={styles.mainHeading}>{head}</Text>
            <Text style={styles.mainHeading}>{sucees}</Text>

            {/* <Text style={styles.ins}>
                Your password has been updated 
                </Text>

                <Text style={styles.ins}>
                successfully
                </Text> */}
          </View>

          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btntxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  iconCon: {
    width: width * 0.26,
    height: height * 0.12,
    backgroundColor: '#CCE5FF',
    borderRadius: 50,
    marginVertical: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCon2: {
    width: width * 0.2,
    height: height * 0.09,
    backgroundColor: '#3B71CA',
    borderRadius: 50,
    marginVertical: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  txtCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3B71CA',
  },
  ins: {
    fontSize: 18,
    color: '#A0A0A0',
    fontWeight: '600',
  },

  btn: {
    width: width * 0.7,
    height: height * 0.08,
    backgroundColor: '#3B71CA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: height * 0.03,
  },
  btntxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Resgistrationsuccesmodal;
