import {
    View,
    FlatList,
    Text,
    Dimensions,
    NativeSyntheticEvent,
    NativeScrollEvent,
    TouchableOpacity
} from 'react-native';
import React, {useState, useRef} from "react";

interface AgeScreenProps {
    navigation: any
}

const {width} = Dimensions.get("window");
const ITEM_Height = 80;
const AGE_DATA = Array.from({length: 80 - 6 + 1}, (_, i) => i + 6)

const AgeScreen: React.FC<AgeScreenProps> = ({navigation}) => {
    const [selectedAge, setSelectedAge] = useState<number>(25);
    const flatListRef = useRef<FlatList>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        const index = Math.round(yOffset / ITEM_Height);
        if (index > -0 && index < AGE_DATA.length) {
            setSelectedAge(AGE_DATA[index]);
        }
    }

    const renderItem = ({item}: { item: number }) => {
        const isSelected = item === selectedAge;

        return (
            <View style={{
                height: ITEM_Height,
                justifyContent: 'center',
                alignItems: 'center',
                width: width - 48
            }}>
                <Text style={{
                    fontSize: isSelected ? 60 : 24,
                    color: '#6e717c',
                    fontWeight: isSelected ? 'bold' : '500'
                }}>
                    {item}
                </Text>
            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "space-between",
            paddingHorizontal: 24,
            paddingTop: 80,
            paddingBottom: 40,
            gap: 20,
            backgroundColor: '#1f2129'
        }}>
            <View style={{gap: 16, alignItems: 'center'}}>

                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>How Old Are
                    You?</Text>
                <Text style={{fontSize: 20, textAlign: "center", color: 'white', fontWeight: 'ultralight'}}>
                    Age in years. This will help us to personalize an experience program plan that suits you.
                </Text>
            </View>

            <View style={{
                height: ITEM_Height * 5,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                <View style={{
                    position: 'absolute',
                    height: ITEM_Height,
                    width: '100%',
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: '#007bff',

                }} pointerEvents={"none"}/>

                <FlatList ref={flatListRef} data={AGE_DATA} renderItem={renderItem}
                          keyExtractor={(item) => item.toString()}
                          showsVerticalScrollIndicator={false}
                          snapToInterval={ITEM_Height}
                          decelerationRate={"fast"}
                          onScroll={handleScroll}
                          scrollEventThrottle={16}
                          contentContainerStyle={{paddingVertical: ITEM_Height * 2, }}
                />
            </View>
            <View style={{
                width: '100%',
                alignItems: 'center'

            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#007bff',
                    width: '100%',
                    paddingVertical: 16,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                                  onPress={() => {
                                      navigation.replace("Weight")
                                  }}
                >
                    <Text style={
                        {
                            color: '#ffffff',
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10,
                            borderRadius: 5,
                            textAlign: "center",
                            width: '100%'
                        }
                    }>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};


export default AgeScreen;