import React from "react";
import {useEffect, useRef} from "react";
import {View, Animated, ActivityIndicator, StyleSheet, Text} from "react-native";
import {Dumbbell} from "lucide-react-native";


interface SplashScreenProps {
    navigation: any
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1, duration: 800,
                useNativeDriver: true
            }),
            Animated.spring(scaleAnim, {
                toValue: 1, friction: 5,
                useNativeDriver: true
            })
        ]).start();

        const timer = setTimeout(() => {
            navigation.replace("Welcome");
        }, 2500)

        return () => clearTimeout(timer);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: '#6f51ec',
                justifyContent: "center",
                gap: 100
            }}>
            <Dumbbell color={"white"} size={200}/>

            <ActivityIndicator size={'large'} color={"white"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#0D9488'},
    logo: {width: 100, height: 120}
});

export default SplashScreen;