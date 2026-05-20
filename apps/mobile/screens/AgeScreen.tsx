import {View, Text} from 'react-native';
import React from "react";

interface AgeScreenProps {
    navigation: any
}

const AgeScreen: React.FC<AgeScreenProps> = ({navigation}) => {

    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
    )

};


export default AgeScreen;