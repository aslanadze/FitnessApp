import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import IntroScreen from "../screens/IntroScreen";
import GenderScreen from "../screens/GenderScreen";
import AgeScreen from "../screens/AgeScreen";

export type RootStackParamList = {
    Splash: undefined;
    Welcome: undefined;
    Intro: undefined;
    Gender: undefined;
    Age: undefined;
    // Weight: undefined;
    // Height: undefined;
    // Goals: undefined;
    // ActivityLevel: undefined;
    // ProfileSetup: undefined;
    // ProfileComplete: undefined;
    // Login: undefined;
    // Register: undefined;
    // RegisterComplete: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Splash'}
                screenOptions={{headerShown: false, gestureEnabled: false, animation: 'slide_from_right'}}
            >

                <Stack.Screen name={"Splash"} component={SplashScreen}/>
                <Stack.Screen name={"Welcome"} component={WelcomeScreen}/>
                <Stack.Screen name={"Intro"} component={IntroScreen}/>
                <Stack.Screen name={"Gender"} component={GenderScreen}/>
                <Stack.Screen name={"Age"} component={AgeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}