import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent
} from "react-native";
import React, {useState, useRef} from "react";

interface HeightScreenProps {
    navigation: any;
}

const {width} = Dimensions.get("window");
const ITEM_HEIGHT = 80;
const HEIGHT_DATA = Array.from({length: 220 - 60 + 1}, (_, i) => i + 60)

const HeightScreen: React.FC<HeightScreenProps> = ({navigation}) => {
    const [selectedHeight, setSelectedHeight] = useState<number>(110);
    const flatListRef = useRef<FlatList>(null);

    const renderItem = ({item}: { item: number }) => {
        const isSelected = item === selectedHeight;
        return (
            <View style={{
                height: ITEM_HEIGHT,
                justifyContent: 'center',
                alignItems: 'center',
                width: width - 48
            }}>
                <Text
                    style={{
                        fontSize: isSelected ? 60 : 24,
                        color: '#6e717c',
                        fontWeight: isSelected ? 'bold' : '500'
                    }}
                >
                    {item}
                </Text>

            </View>
        )
    }

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        const index = Math.round(yOffset / ITEM_HEIGHT);
        if (index > -0 && index < HEIGHT_DATA.length) {
            setSelectedHeight(HEIGHT_DATA[index]);
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 24,
            paddingTop: 80,
            paddingBottom: 40,
            gap: 20,
            backgroundColor: '#1f2129'
        }}>
            <View style={{gap: 16, alignItems: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>What is Your
                    Height?</Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white', fontWeight: "ultralight"
                }}>Height in cm. Don'
                    t worry,
                    you can
                    always change
                    it later.</Text>
            </View>

            <View style={{
                height: ITEM_HEIGHT * 5,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                <View style={{
                    position: 'absolute',
                    height: ITEM_HEIGHT,
                    width: '100%',
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: '#007bff'
                }} pointerEvents={"none"}/>

                <FlatList
                    ref={flatListRef}
                    data={HEIGHT_DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate={'fast'}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{paddingVertical: ITEM_HEIGHT * 2,}}
                />

            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#007bff',
                        width: '100%',
                        paddingVertical: 16,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        navigation.replace("Goals")
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        padding: 10,
                        borderRadius: 5,
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default HeightScreen;