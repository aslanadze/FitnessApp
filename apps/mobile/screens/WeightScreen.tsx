import React, {useState, useRef} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    NativeSyntheticEvent,
    NativeScrollEvent,
    FlatList
} from "react-native";

interface WeightScreenProps {
    navigation: any
}


const {width} = Dimensions.get("window");
const ITEM_WIDTH = 65;
const KG_DATA = Array.from({length: 180 - 30 + 1}, (_, i) => i + 30)
const WeightScreen: React.FC<WeightScreenProps> = ({navigation}) => {
    const [selectedWeight, setSelectedWeight] = useState<number>(70);
    const flatListRef = useRef<FlatList>(null);


    const renderItem = ({item}: { item: number }) => {
        const isSelected = item === selectedWeight;
        return (
            <View style={{
                width: ITEM_WIDTH,
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100%',
                gap: 2,

                transform: [
                    {perspective: 400},
                    {rotateY: isSelected ? '0deg' : '15deg'},
                    {scale: isSelected ? 1.5 : 0.9}
                ]
            }}>
                <View style={{
                    width: isSelected ? 3 : 2,
                    height: isSelected ? 28 : 12,
                    backgroundColor: isSelected ? '#007bff' : '#4e515c',
                }}/>
                <Text style={{
                    fontSize: isSelected ? 35 : 20,
                    color: isSelected ? 'white' : '#6e717c',
                    fontWeight: isSelected ? 'bold' : '500',
                    borderBottomWidth: isSelected ? 2 : 0,
                    borderColor: '#ffdf00'
                }}>
                    {item}
                </Text>
            </View>
        )
    }

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / ITEM_WIDTH);
        if (index >= 0 && index < KG_DATA.length) {
            setSelectedWeight(KG_DATA[index]);
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
            backgroundColor: "#1f2129"
        }}>
            <View style={{gap: 16, alignItems: 'center'}}>
                <Text style={{
                    fontSize: 35, textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white'
                }}>
                    What is Your Weight?
                </Text>
                <Text style={{
                    fontSize: 20, textAlign: 'center',
                    color: 'white',
                    fontWeight: 'ultralight'
                }}>
                    Weight in kg Don't worry, you can always change it later.
                </Text>
            </View>
            <View style={{
                height: 100,
                width: '100%',
                justifyContent: 'center',
                alignItems: "center",
                position: 'relative',
                // borderColor: "#fff",
                // borderWidth: 2,
                // borderTopLeftRadius: 30,
                // borderTopRightRadius: 30,
                // elevation: 5


            }}>


                <FlatList
                    ref={flatListRef}
                    data={KG_DATA}
                    keyExtractor={(item) => item.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={ITEM_WIDTH}
                    decelerationRate={'fast'}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    initialScrollIndex={40}
                    contentContainerStyle={{
                        paddingHorizontal: (width - ITEM_WIDTH) / 2,

                    }}
                    getItemLayout={(data, index) => (
                        {length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index}
                    )}
                    renderItem={renderItem}
                />
            </View>

            <View style={{width: '100%', alignItems: "center"}}>
                <TouchableOpacity style={{
                    backgroundColor: '#007bff',
                    width: '100%',
                    paddingVertical: 16,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                                  onPress={() => {
                                      navigation.replace("Height")
                                  }}
                >
                    <Text style={{
                        color: "#ffffff",
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
};


export default WeightScreen;