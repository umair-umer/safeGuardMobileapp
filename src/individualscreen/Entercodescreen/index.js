import React, { useState, useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, Platform } from 'react-native';
const { width, height } = Dimensions.get("window");
import Vector from '../../Assests/Vector.png';
import mess from '../../Assests/mess.png';
import email from '../../Assests/email.png';
import { ArrowBack, Button, InputText } from '../../Components';
import { calculateFontSize } from '../../Utilites/font';
import { NavigationContainer } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
function IndividualEntercode({ navigation }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
     <View style={{paddingHorizontal:width * 0.04}}>
      <ArrowBack />
     </View>

      <View style={styles.forgotcontainer}>
        <Text style={styles.forgottext}>Enter Code</Text>
        <Text style={styles.forgottextdetail}>Please enter verification code  </Text>
        <Text style={styles.forgottextdetail}>from the SMS sent to (406) 555-0120  </Text>


      </View>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />




      <View style={styles.btcontainer}>
        <Button fill={true} name={'Verify'} onPress={() => { navigation.navigate('individualcodeverify') }} />
      </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    ...Platform.select({
      ios: {
        flex: 1,
        paddingHorizontal: width * 0.03,
      }
    })

  },
  aerrowbackicon: {
    width: width * 0.04,
    height: height * 0.04,
    ...Platform.select({
      ios: {
        width: width * 0.04,
        height: height * 0.04,
      }
    })
  },
  arrowcontainer: {
    marginTop: height * 0.04,
    width: width * 0.08,
    height: height * 0.06,
    paddingHorizontal: width * 0.03,
    ...Platform.select({
      ios: {
        marginTop: height * 0.04,
        width: width * 0.08,
        height: height * 0.06,
        paddingHorizontal: width * 0.03,
      }
    })
  },
  forgotcontainer: {
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.05,
        alignItems: "center",
      }
    })
  },
  forgottext: {
    color: "#1C75BC",
    fontfamily: "poppins",
    fontWeight: "700",
    fontSize: calculateFontSize(30),
    ...Platform.select({
      ios: {
        color: "#1C75BC",
        fontfamily: "poppins",
        fontWeight: "700",
        fontSize: calculateFontSize(30),
      }
    })
  },
  forgottextdetail: {
    color: "#939393",
    fontfamily: "poppins",
    fontWeight: "400",
    fontSize: calculateFontSize(13),
    ...Platform.select({
      ios: {
        color: "#939393",
        fontfamily: "poppins",
        fontWeight: "400",
        fontSize: calculateFontSize(13),
      }
    })
  },

  btcontainer: {
    top: height * 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        top: height * 0.56,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }
    })


  },
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.03,
    width: width * 0.98,
    ...Platform.select({
      ios: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
        width: width * 0.98,
      }
    })
  },
  cell: {
    width: width * 0.15,
    height: height * 0.07,
    lineHeight: height * 0.07,
    fontSize: calculateFontSize(24),
    borderWidth: 2,
    borderColor: '#00000030',
    color: "black",
    textAlign: 'center',
    marginHorizontal: width * 0.02,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        width: width * 0.15,
        height: height * 0.07,
        lineHeight: height * 0.06,
        fontSize: calculateFontSize(24),
        borderWidth: 2,
        borderColor: '#00000030',
        color: "black",
        textAlign: 'center',
        marginHorizontal: width * 0.02,
        borderRadius: 10,
      }
    })
  },
  focusCell: {
    borderColor: '#1C75BC',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        borderColor: '#1C75BC',
        borderRadius: 10
      }
    })
  },

})


export default IndividualEntercode
