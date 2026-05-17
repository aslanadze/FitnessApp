import React from "react";
import {useEffect, useRef} from "react";
import {View, Animated, StyleSheet, Text} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";

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
        <View>
            <Animated.Image source={require('../assets/39d6892e4758ab23644379ca8958b118.jpg')}
                            style={[styles.logo, {
                                opacity: fadeAnim,
                                transform: [{scale: scaleAnim}]
                            }]}
            />

            <Text>
                Hello
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#0D9488'},
    logo: {width: 120, height: 120}
});

export default SplashScreen;