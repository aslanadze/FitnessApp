import React from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import {useState} from "react";

interface IntroScreenProps {
    navigation: any
}


const IntroScreen: React.FC<IntroScreenProps> = ({navigation}: IntroScreenProps) => {

    const introSteps = [
        {id: 1, image: require('../assets/WelcomeScreenImage.jpg'), text: 'Find the right workout for what you need'},
        {
            id: 2,
            image: require('../assets/39d6892e4758ab23644379ca8958b118.jpg'),
            text: 'Make suitable workouts and great results'
        },
        {
            id: 3,
            image: require('../assets/39d6892e4758ab23644379ca8958b118.jpg'),
            text: 'Lets do a workout and live healthy with us'
        }
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        if (currentStep < introSteps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.replace("Gender");
        }
    }

    return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <Image source={introSteps.find(c => c.id == currentStep)?.image} style={{width: '100%', height: '70%'}}
                   resizeMode={'center'}/>

            <View style={{
                flex: 1,
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1f2129',
            }}>
                <Text style={{
                    fontSize: 37,
                    fontWeight: 'bold',
                    lineHeight: 50,
                    color: '#ffffff',
                    textAlign: "center"
                }}>{introSteps.find(step => step.id === currentStep)?.text}</Text>
                <View style={{flexDirection: 'row'}}>
                    {introSteps.map((step, index) => (
                        <View key={index} style={{
                            width: currentStep == step.id ? 30 : 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: currentStep > index ? '#007bff' : '#ffffff',
                            marginHorizontal: 5
                        }}/>
                    ))}
                </View>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#007bff',
                    width: '80%',
                    paddingVertical: 10,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }} onPress={() => handleNextStep()}>
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
}

export default IntroScreen;