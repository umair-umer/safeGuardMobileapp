import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView , Platform } from 'react-native';
import { ArrowBack } from '../../Components';
const { width, height } = Dimensions.get("window");
import pendingimage from "../../Assests/pendingimage.png"
import { calculateFontSize } from '../../Utilites/font';
const RejectedApplications = () => {
    return (
        <SafeAreaView style={styles.maincon}>
            <ArrowBack title="Rejected applicants " />
            <View style={styles.pendingApliictaionview}>
                <View style={styles.pendview}>
                    <View style={styles.imgeTextdiv}>
                        <View style={styles.imsmalpendin}>
                            <Image resizeMode="cover" style={{ width: "100%", height: "100%" }} source={pendingimage} />
                        </View>
                        <View style={{ paddingHorizontal: width * 0.02, }}>
                            <Text style={styles.aplicantname}>Tania Sultana</Text>
                            <Text style={styles.aplicantjobtitle}>Admiral Security Services</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.durationtime}>15 mins ago</Text>
                    </View>
                </View>
                <View style={styles.rsView}>
                    <TouchableOpacity ><Text style={styles.rej}>Reject</Text></TouchableOpacity>

                    <TouchableOpacity ><Text style={styles.shortlist}>Shortlist</Text></TouchableOpacity>
                </View>






            </View>
            <View style={styles.pendingApliictaionview}>
                <View style={styles.pendview}>
                    <View style={styles.imgeTextdiv}>
                        <View style={styles.imsmalpendin}>
                            <Image resizeMode="cover" style={{ width: "100%", height: "100%" }} source={pendingimage} />
                        </View>
                        <View style={{ paddingHorizontal: width * 0.02, }}>
                            <Text style={styles.aplicantname}>Tania Sultana</Text>
                            <Text style={styles.aplicantjobtitle}>Admiral Security Services</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.durationtime}>15 mins ago</Text>
                    </View>
                </View>
                <View style={styles.rsView}>
                    <TouchableOpacity ><Text style={styles.rej}>Reject</Text></TouchableOpacity>

                    <TouchableOpacity ><Text style={styles.shortlist}>Shortlist</Text></TouchableOpacity>
                </View>






            </View>

        </SafeAreaView>
    )
}

export default RejectedApplications
const styles = StyleSheet.create({

    maincon: {

        flex: 1,
        paddingHorizontal: width * 0.04,
        ...Platform.select({
            ios:{
                flex: 1,
                paddingHorizontal: width * 0.04,
            }
        })
   

    },
    pendview: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        paddingBottom: height * 0.02,
        borderStyle: 'dotted'
    },
    imgeTextdiv: {
        flexDirection: "row",
        alignItems: "center"
    },
    imsmalpendin: {
        width: width * 0.13,
        height: height * 0.06,
        borderRadius: 15,
        overflow: "hidden"
    },
    aplicantname: {

        color: "#000",
        fontfamily: "poppins",
        fontWeight: "500",
        fontSize: calculateFontSize(20),
        textTransform: "capitalize"
    },
    aplicantjobtitle: {
        color: "#000",
        fontfamily: "poppins",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize"
    },
    durationtime: {
        color: "#fff",
        fontfamily: "poppins",
        fontSize: calculateFontSize(10),
        textTransform: "capitalize",
        backgroundColor: "#206CB3",
        borderRadius: 5,
        padding: 4,
    },
    rej: {
        color: "#808080",
        fontfamily: "poppins",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize"
    },
    shortlist: {
        color: "#1C75BC",
        fontfamily: "poppins",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize",
        borderWidth: 1,
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.02,
        borderRadius: 10,
        borderColor: "#1C75BC"
    },
    rsView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: height * 0.03,
    },
    pendingApliictaionview: {

        marginTop: height * 0.04,
        backgroundColor: "#fff",
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.04,
        borderRadius: 10, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 4,
    }
})