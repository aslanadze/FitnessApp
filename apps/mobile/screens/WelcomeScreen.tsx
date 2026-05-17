import React from "react";
import {View, StyleSheet, Text, StatusBar, ImageBackground, TouchableOpacity, Dimensions} from "react-native";
import {ArrowRight, HeartHandshake} from "lucide-react-native";

interface WelcomeScreenProps {
    navigation: any
}

const {height} = Dimensions.get('window');
const WelcomeScreen: React.FC<WelcomeScreenProps> =
    ({navigation}) => {

        return (
            <View style={{flex: 1, backgroundColor: "#000000"}}>
                <StatusBar barStyle={'light-content'} translucent backgroundColor={"transparent"}/>
                <ImageBackground source={require('../assets/WelcomeScreenImage.jpg')}
                                 style={styles.container}
                                 resizeMode={'cover'}
                >
                    <View style={styles.darkOverlay}>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.welcomeText}>
                                Welcome to
                                <HeartHandshake color={"#ffdf00"} size={40}/>
                            </Text>

                            <Text style={styles.subTitleText}>
                                Aslanadze Fit
                            </Text>

                            <Text style={styles.description}>
                                Track your workouts, set custom goals, and stay consistent every single day.
                            </Text>
                            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                                              onPress={() => navigation.replace("Splash")}>
                                <Text style={styles.buttonText}>
                                    Get Started
                                </Text>
                                <ArrowRight color={"#ffffff"} size={20} strokeWidth={2.5}/>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ImageBackground>

            </View>
        );
    };


export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    darkOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        paddingBottom: height * 0.06
    },
    bottomContainer: {
        width: '100%',
        alignItems: 'flex-start',
        paddingBottom: 70
    },
    welcomeText: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: "bold",
        lineHeight: 44,
        marginBottom: 12
    },

    subTitleText: {
        color: '#ffffff',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    description: {
        paddingTop: 20,
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'light'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#007bff',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 50
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    }
})
