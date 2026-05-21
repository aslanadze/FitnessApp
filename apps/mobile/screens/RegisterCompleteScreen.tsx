import React from "react";
import {View, Text, TouchableOpacity, Dimensions, Platform} from "react-native";
import {HeartHandshake} from 'lucide-react-native';

interface RegisterCompleteScreenProps {
    navigation: any;
}


const RegisterCompleteScreen: React.FC<RegisterCompleteScreenProps> = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#1f2129',
                paddingHorizontal: 24,
                paddingTop: 80,
                paddingBottom: 40,
                justifyContent: 'center',
                gap: 50
            }}
        >
            <View style={{gap: 16, alignItems: 'center'}}>
                <HeartHandshake size={100} color="#007bff"/>
                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>
                    Registration Complete
                </Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white', fontWeight: "ultralight"
                }}>
                    Thanks for your registration! You're now part of Aslanadze Fit You can now start using the app.
                </Text>


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
                        navigation.replace("Welcome")
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
                        Reload
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default RegisterCompleteScreen;