import React from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import {useState} from "react";

interface IntroScreenProps {
    navigation: any
}


const IntroScreen: React.FC<IntroScreenProps> = ({navigation}: IntroScreenProps) => {

    const introSteps = [
        {
            id: 1,
            image: require('../assets/sushil-ghimire-5UbIqV58CW8-unsplash.jpg'),
            text: 'Find the right workout for what you need'
        },
        {
            id: 2,
            image: require('../assets/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'),
            text: 'Make suitable workouts and great results'
        },
        {
            id: 3,
            image: require('../assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg'),
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
            {/*<Image source={introSteps.find(c => c.id == currentStep)?.image} style={{width: '100%', height: '60%'}}*/}
            {/*       resizeMode={'cover'}/>*/}
            <View style={{width: '100%', height: '60%', position: 'relative'}}>
                {introSteps.map((step) => {
                    const isVisible = step.id === currentStep;
                    return (
                        <Image
                            key={step.id}
                            source={step.image}
                            resizeMode={"cover"}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: isVisible ? 1 : 0,
                                zIndex: isVisible ? 1 : 0
                            }}
                        />
                    )
                })}
            </View>

            <View style={{
                flex: 1,
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: '#1f2129',
            }}>
                <Text style={{
                    fontSize: 20,
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
                    width: '100%',
                    paddingVertical: 5,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }} onPress={() => handleNextStep()}>
                    <Text style={
                        {
                            color: '#ffffff',
                            fontSize: 15,
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