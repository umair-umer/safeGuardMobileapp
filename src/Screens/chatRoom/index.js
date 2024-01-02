import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { ArrowBack, InputText } from '../../Components';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../Utilites/font';

import Feather from 'react-native-vector-icons/Feather'

const ChatRoom = ({ route }) => {
    const { senderName } = route.params;

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        // Initial messages here if any
    ]);
    const scrollViewRef = useRef();
    const handleSend = () => {
        if (message) {
            const newMessage = { text: message, isSender: true };
            setMessages([...messages, newMessage]);
            setMessage(''); // Clear the input field after sending
        }
    };

    // Scroll to the bottom when messages change or on initial render
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.hedr}>
        <ArrowBack/>
            <Text style={styles.txt}>Message</Text>
        </View>
           
            <View style={{ flex: 1, paddingVertical: height * 0.03, }}>
            <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.chatContainer}
        >
          {messages.map((msg, index) => (
            <View
              key={index}
              style={msg.isSender ? styles.senderchat : styles.reciverchat}
            >
              <Text style={msg.isSender ? styles.sendertext : styles.recivertext}>
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

                {/* <View style={styles.Reciverchat}>
                    <Text style={styles.recivertext}>The main body of matter in a manuscript, book,
                    </Text>
                </View>
      
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.senderchat}>
                    <Text style={styles.sendertext}>The main body of matter in a manuscript, book,
                    </Text>
                </View>
            </View> */}
            </View>
            <View style={styles.inputchatcontainer}>
                <View style={styles.inputcontainer}><InputText value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholder="Type a message" /></View><TouchableOpacity style={styles.iconsendcontainer} onPress={handleSend}>
                    <Feather name="send" size={calculateFontSize(27)} color="#1C75BC" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ChatRoom
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.04,
        
        

    },

    hedr:{
        ...Platform.select({
            ios: {
              
                paddingHorizontal:width*0.04,
                
              
            },
          }),
   
    },

    recivertext: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize",
        fontFamily: "Poppins"
    },
    senderchat: {
        width: width * 0.8,
        backgroundColor: "#F1F1F1",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: 10,
        marginVertical: height * 0.008,
        borderTopRightRadius: 0
    },
    sendertext: {
        color: "#9E9E9E",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize",
        fontFamily: "Poppins"
    },
    inputchatcontainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"space-between"
    },
    inputcontainer: {
        width: width * 0.8,
        ...Platform.select({
            ios: {
              
                width: width * 0.82,
                marginHorizontal:width*0.01
                
              
            },
          }),
    },
    iconsendcontainer: {
        width: width * 0.123,
        height: height * 0.07,
        backgroundColor: "#AAAAAA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: width * 0.02,
        ...Platform.select({
            ios: {
              
                width: width * 0.123,
                height: height * 0.07,
                backgroundColor: "#AAAAAA",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginLeft: width * 0.02,
                
              
            },
          }),
        
    },
    chatContainer: {
        flexGrow: 1,
        paddingVertical: height * 0.03,
        alignItems: 'flex-end',
    },
    reciverchat: {
        width: width * 0.8,
        backgroundColor: "#1C75BC",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        marginBottom: height * 0.01,
    },
    txt:{

        color:"#1C75BC",
        textAlign:"center",
        fontWeight:"600",
        bottom:height*0.023,
        fontSize:calculateFontSize(18),
        ...Platform.select({
            ios: {
              
              
                color:"#1C75BC",
                textAlign:"center",
                fontWeight:"600",
                bottom:height*0.033,
                fontSize:calculateFontSize(18),
              
            },
          }),

    }
})