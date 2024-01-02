import React, { useState,useRef } from 'react'

import { View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { IntroComponentOne, IntrocomponentThree, IntrocomponentTwo,Introcomponentfour } from '../../Components';

const { width, height } = Dimensions.get("window");

const slides = [
    {
        id: 1,
        text: <IntroComponentOne />,
    },
    {
        id: 2,
        text: <IntrocomponentTwo/>,
    },
    {
        id: 3,
        text: <IntrocomponentThree/>,
    },
    {
        id: 4,
        text: <Introcomponentfour/>,
    },
    
];



const IntroDuctionSlider = ({navigation}) => {
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
            scrollViewRef.current.scrollTo({ x: (currentIndex + 1) * width, animated: true });
        }
    };

    return (
        <View
          style={{ flex: 1 }}
        >
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const offsetX = event.nativeEvent.contentOffset.x;
                    const index = Math.round(offsetX / width);
                    setCurrentIndex(index);
                }}
            //   style={{ flex: 1 }}
            >
                {slides.map((slide) => (
                    <View key={slide.id} style={{
                        flex: 1, 
                        // justifyContent: 'center',
                        //  alignItems: 'center'
                    }}>
                        <Text>{slide.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{
                flexDirection: 'row', justifyContent: 'flex-start',
                bottom: height * 0.28,

                paddingHorizontal: width * 0.03, 
                ...Platform.select({
                    ios: {
                        flexDirection: 'row', justifyContent: 'flex-start',
                        bottom: height * 0.22,

                paddingHorizontal: width * 0.03, 
          
                    },
                },),

                // backgroundColor: "black"
            }}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: width*0.06,
                            height: height*0.01,
                            backgroundColor: index === currentIndex ? 'blue' : 'gray',
                            borderRadius: 5,
                            margin: 5,
                        }}
                    />
                ))}
            </View>

       {currentIndex === slides.length - 1 ? 
        <TouchableOpacity
             onPress={()=>{navigation.navigate('wellcome')}}
                style={{
                    
                    backgroundColor: '#1C75BC',
                    padding: 15,
                    borderRadius: 8,
                    alignSelf: 'center',
                    margin: 20,
                }}
            >
                <Text style={{ color: 'white' }}>Let’s Get Started</Text>
            </TouchableOpacity>
        : 
          <View style={{flexDirection:"row",justifyContent:"space-between",}}>
       
       <TouchableOpacity

                onPress={() => {
                    setCurrentIndex(slides.length - 1);
                    scrollViewRef.current.scrollTo({ x: (slides.length - 1) * width, animated: true });
                }}
                style={{
                    
                  
                    padding: 15,
                    borderRadius: 8,
                    alignSelf: 'center',
                    margin: 20,
                }}
            >
                <Text style={{color:"#1C75BC"}}>{currentIndex === slides.length - 1 ? 'skip' : 'skip'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleNext}
                style={{
                    
                    backgroundColor: '#1C75BC',
                    padding: 15,
                    borderRadius: 8,
                    alignSelf: 'center',
                    margin: 20,
                }}
            >
                <Text style={{ color: 'white' }}>{currentIndex === slides.length - 4 ? 'Start' : 'Next'}</Text>
            </TouchableOpacity>
          </View>
            }


        </View>
    );
}

export default IntroDuctionSlider
