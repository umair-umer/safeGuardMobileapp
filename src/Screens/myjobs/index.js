import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");

const myjobs = () => {
  return (
  <SafeAreaView style={styles.container}>
<View>
  <Text>myjobs</Text>
</View>

  </SafeAreaView>
  )
}

export default myjobs
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:"#fff"

    },
  })