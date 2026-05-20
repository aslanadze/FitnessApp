import React, {useState} from "react";
import {View, Text, TouchableOpacity, Dimensions} from "react-native";
import {Venus, Mars} from "lucide-react-native";

interface GenderScreenProps {
    navigation: any;
}

const {width} = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.55;
const GenderScreen: React.FC<GenderScreenProps> = ({navigation}) => {
    const [gender, setGender] = useState('');
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

                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Tell Us About
                    Yourself</Text>
                <Text style={{fontSize: 20, textAlign: "center", color: 'white', fontWeight: 'ultralight'}}>To give you
                    a
                    better
                    experience, we need
                    to know your gender.</Text>
            </View>

            <View style={{
                alignItems: 'center',
                gap: 20,
            }}>
                <TouchableOpacity
                    style={{
                        width: CIRCLE_SIZE,
                        height: CIRCLE_SIZE,
                        borderRadius: CIRCLE_SIZE / 2,
                        backgroundColor: gender == 'male' ? '#aa0bcf' : '#303030',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 8,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 4},
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5,
                    }}
                    onPress={() => {
                        setGender("male")
                    }}
                >
                    <Mars size={80} color={"white"}/>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: CIRCLE_SIZE,
                        height: CIRCLE_SIZE,
                        borderRadius: CIRCLE_SIZE / 2,
                        backgroundColor: gender == 'female' ? '#aa0bcf' : '#303030',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 8,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 4},
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5
                    }}
                    onPress={() => {
                        setGender('female')
                    }}
                >
                    <Venus size={80} color={"white"}/>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Female</Text>
                </TouchableOpacity>
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
                                      navigation.replace("Age")
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
    );
};

export default GenderScreen;