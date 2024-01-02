import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';
import { InputWithLeftIcon } from '../../Components';
import recruiter from '../../Assests/recruiter.png'

const chatData = [
  {
    id: '1',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '2',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '3',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '4',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '5',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '6',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '7',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '8',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  {
    id: '9',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../Assests/recruiter.png'),
  },
  // Add more chat data as needed
];


const Messagesscreen = ({navigation}) => {




  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatbox}
    onPress={() => navigation.navigate('chatroom', { senderName: item.senderName })}
    >
      <View style={styles.chatroomboxcontaint}>
        <View style={styles.recprofile}>
          <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={item.image} />
        </View>
        <View>
          <Text style={styles.recruname}>{item.senderName}</Text>
          {/* <Text style={styles.lastMessage}>{item.lastMessage}</Text> */}
        </View>
      </View>
      <View>
        <Text style={styles.time}>{item.time}</Text>
        <View style={styles.messageCounter}>
          <Text style={styles.messgecounter}>{item.unreadCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myjobstext}>message</Text>
      </View>
      <InputWithLeftIcon icon="search" placeholder={"Search"} onChangeText={(text) => console.log(text)} value={""} />
      {/* <View style={styles.chatbox}>
        <View style={styles.chatroomboxcontaint}>
          <View style={styles.recprofile}>
            <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={recruiter} />
          </View>
          <Text style={styles.recruname}>Opu Hassan</Text>
        </View>
        <View>
          <Text style={styles.time}>5 mins</Text>
          <Text style={styles.messgecounter}>3</Text>
        </View>
      </View> */}
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        showsVerticalScrollIndicator={false}
      />




    </SafeAreaView>
  )
}

export default Messagesscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.04,

  },
  header: {
    paddingVertical: height * 0.03,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingVertical: height * 0.02,
        justifyContent: "center",
        alignItems: "center",
      },
    }),
    
  },
  myjobstext: {
    color: "#206CB3",
    fontSize: calculateFontSize(15),
    textTransform: "capitalize",
    fontFamily: "Poppins"
  },
  recprofile: {
    width: width * 0.2,
    height: height * 0.07,
    ...Platform.select({
      ios: {
        width: width * 0.2,
        height: height * 0.06,
      },
    }),
  },
  chatroomboxcontaint: {
    flexDirection: "row",
    alignItems: "center",

  },
  chatbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: height * 0.004,
    borderBottomColor: "#CACACA",
    marginVertical:height*0.01,
    ...Platform.select({
      ios: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingBottom: height * 0.001,
        borderBottomColor: "#CACACA",
        marginVertical:height*0.001,
      },
    }),
  },
  messgecounter: {
    backgroundColor: "#206CB3",
    alignSelf: "center",
    paddingVertical: height * 0.002,
    paddingHorizontal: width * 0.019,
    borderRadius: 100,
    color: "#fff",
    marginVertical: height * 0.02,
    ...Platform.select({
      ios: {
        backgroundColor: "#206CB3",
        alignSelf: "center",
        paddingVertical: height * 0.003,
        paddingHorizontal: width * 0.019,
        borderRadius: 12,
        overflow: 'hidden',
        color: "#fff",
        marginVertical: height * 0.02,
        
      },
    }),
    
  },
  time: {
    color: "#515151",
    fontSize: calculateFontSize(12),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    marginLeft: width * 0.03,
    alignSelf: "center",
    
    ...Platform.select({
      ios: {
        
        color: "#515151",
        fontSize: calculateFontSize(12),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        marginLeft: width * 0.02,
        alignSelf: "center",
        
      },
    }),
    
  },
  recruname: {
    color: "#515151",
    fontSize: calculateFontSize(15),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    marginLeft: width * 0.03,
  }
})