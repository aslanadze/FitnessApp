import {View, Text, TouchableOpacity, Dimensions, ScrollView} from "react-native";
import React, {useState} from "react";
import {Flame, Dumbbell, Trophy, Heart, CheckCircle2} from "lucide-react-native";

interface GoalsScreenProps {
    navigation: any;
}

interface GoalItem {
    id: string,
    title: string,
    description: string,
    icon: React.ComponentType<any>,
}

const GOALS_DATA: GoalItem[] = [
    {id: '1', title: 'Lose Weight', description: 'Stay fit by losing weight', icon: Dumbbell},
    {id: '2', title: 'Build Muscle', description: 'Gain muscle by working out', icon: Flame},
    {id: '3', title: 'Gain Strength', description: 'Improve your strength and endurance', icon: Heart},
    {id: '4', title: 'Improve Health', description: 'Stay healthy by exercising regularly', icon: Trophy},
]

const GoalsScreen: React.FC<GoalsScreenProps> = ({navigation}) => {
    const [selectedGoal, setSelectedGoal] = useState<string[]>([]);

    const handleSelectedGoal = (id: string) => {
        if (selectedGoal.includes(id)) {
            setSelectedGoal(selectedGoal.filter(item => item !== id))
        } else {
            setSelectedGoal([...selectedGoal, id])
        }
    }
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
                    What is Your Goal?
                </Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white', fontWeight: "ultralight"
                }}>
                    We will adapt the training regimens and metrics to your goals.
                </Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 24, flex: 1}}
                contentContainerStyle={{gap: 16}}
            >
                {GOALS_DATA.map((item) => {
                    const isSelected = selectedGoal.includes(item.id);
                    const IconComponent = item.icon;

                    return (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.85}
                            onPress={() => handleSelectedGoal(item.id)}
                            style={{
                                backgroundColor: isSelected ? 'rgba(0,123,255,0.1)' : '#282a34',
                                borderWidth: 2,
                                borderColor: isSelected ? '#007bff' : 'transparent',
                                borderRadius: 20,
                                padding: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 16,
                                shadowColor: '#000',
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: isSelected ? 0.4 : 0.1,
                                shadowRadius: 6,
                                transform: [{scale: isSelected ? 1.001 : 1}]
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 16,
                                flex: 1
                            }}>

                                <View style={{
                                    backgroundColor: isSelected ? '#007bff' : '#343746',
                                    padding: 12,
                                    borderRadius: 14,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <IconComponent size={24} color={isSelected ? '#fff' : '#6e717c'}/>
                                </View>

                                <View style={{flex: 1, gap: 4}}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                                        {item.title}
                                    </Text>
                                    <Text style={{fontSize: 14, color: '#9da1b0', lineHeight: 20}}>
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                {isSelected ? <CheckCircle2 size={24} color="#007bff"/> : <View style={{
                                    width: 22,
                                    height: 22,
                                    borderRadius: 11, borderWidth: 2,
                                    borderColor: "#4e515c",

                                }}/>}
                            </View>
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


export default GoalsScreen;