import React, {useState} from "react";
import {View, Text, TouchableOpacity, Dimensions, ScrollView} from "react-native";
import {CheckCircle2} from "lucide-react-native";

interface ActivityLevelScreenProps {
    navigation: any;
}

interface ActivityItem {
    id: string,
    title: string,
}

const ACTIVITY_DATA: ActivityItem[] = [
    {id: '1', title: 'Beginner',},
    {id: '2', title: 'Intermediate',},
    {id: '3', title: 'Advanced',},
]

const ActivityLevelScreen: React.FC<ActivityLevelScreenProps> = ({navigation}) => {
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1f2129',
            paddingHorizontal: 24,
            paddingTop: 80,
            paddingBottom: 40,
            justifyContent: 'space-between'
        }}>
            <View style={{gap: 16, alignItems: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>
                    Physical Activity Level?
                </Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white', fontWeight: "ultralight"
                }}>
                    Choose your regular activity level. This will help us recommend the right exercises for you.
                </Text>


            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 24, flex: 1}}
                contentContainerStyle={{gap: 16}}
            >
                {ACTIVITY_DATA.map((item) => {
                    const isSelected = selectedActivity === item.id;
                    return (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.05}
                            onPress={() => setSelectedActivity(item.id)}
                            style={{
                                backgroundColor: isSelected ? 'rgba(0,123,255,0.1)' : '#282a34',
                                borderWidth: 2,
                                borderColor: isSelected ? '#007bff' : 'transparent',
                                borderRadius: 20,
                                padding: 30,
                                shadowColor: '#000',
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: isSelected ? 0.4 : 0.1,
                                shadowRadius: 6,
                                transform: [{scale: isSelected ? 1.001 : 1}]
                            }}
                        >
                            <Text style={{fontSize: 22,textAlign:'center', fontWeight: 'bold', color: '#fff'}}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
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
                        navigation.replace("ActivityLevel")
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
export default ActivityLevelScreen;