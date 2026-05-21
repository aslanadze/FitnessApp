import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {ArrowRight, Camera, User} from "lucide-react-native";

interface ProfileSetupScreenProps {
    navigation: any;
}


const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({navigation}) => {
    const [image, setImage] = useState<string | null>(null);
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'We need camera roll permissions to make this work!')
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                              style={{
                                  flex: 1,
                                  backgroundColor: '#1f2129',
                                  paddingHorizontal: 24,
                                  paddingTop: 80,
                                  paddingBottom: 40,
                                  justifyContent: 'space-between'
                              }}
        >
            <View style={{gap: 16, alignItems: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>
                    Fill Your Profile
                </Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white', fontWeight: "ultralight"
                }}>
                    Don't worry, you can always change it later or you can skip it for now.
                </Text>


            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal: 24,
                paddingTop: 80, paddingBottom: 40, alignItems: 'center'
            }}>

                <TouchableOpacity onPress={pickImage} activeOpacity={0.9}
                                  style={{position: 'relative', marginBottom: 36}}>
                    <View style={{
                        width: 130,
                        height: 130,
                        borderRadius: 65,
                        backgroundColor: "#282a34",
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: image ? '#007bff' : '#4e515c',
                        overflow: 'hidden'
                    }}>
                        {image ? (
                                <Image source={{uri: image}} style={{width: '100%', height: '100%'}}/>
                            ) :
                            (
                                <User size={50} color="#6e717c"/>
                            )}
                    </View>
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 4,
                        backgroundColor: '#007bff',
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 3,
                        borderColor: '#1f2129'
                    }}>
                        <Camera size={16} color={"white"}/>
                    </View>
                </TouchableOpacity>
                <View style={{width: '100%', gap: 20, marginBottom: 40}}>
                    <View style={{gap: 8}}>
                        <Text style={{color: '#9da1b0', fontSize: 14, fontWeight: '600'}}>Full Name</Text>
                        <TextInput placeholder={"Enter your full name"} placeholderTextColor={"#535766"}
                                   value={fullName} onChangeText={setFullName}
                                   onFocus={() => setFocusedInput("fullName")} onBlur={() => setFocusedInput("")}
                                   style={{
                                       backgroundColor: '#282a34',
                                       color: 'white',
                                       paddingVertical: 14,
                                       paddingHorizontal: 16,
                                       borderRadius: 14,
                                       fontSize: 16,
                                       borderWidth: 1.5,
                                       borderColor: focusedInput === "fullName" ? "#007bff" : "#4e515c"
                                   }}/>
                    </View>

                    <View style={{gap: 8}}>
                        <Text style={{color: '#9da1b0', fontSize: 14, fontWeight: '600'}}>Email</Text>
                        <TextInput placeholder={"Enter your email"} placeholderTextColor={"#535766"}
                                   value={email} onChangeText={setEmail}
                                   onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput("")}
                                   style={{
                                       backgroundColor: '#282a34',
                                       color: 'white',
                                       paddingVertical: 14,
                                       paddingHorizontal: 16,
                                       borderRadius: 14,
                                       fontSize: 16,
                                       borderWidth: 1.5,
                                       borderColor: focusedInput === "email" ? "#007bff" : "#4e515c"
                                   }}
                        />
                    </View>

                    <View style={{gap: 8}}>
                        <Text style={{color: '#9da1b0', fontSize: 14, fontWeight: '600'}}>Phone Number</Text>
                        <TextInput placeholder={"Enter your phone number"} placeholderTextColor={"#535766"}
                                   value={phoneNumber} onChangeText={setPhoneNumber}
                                   onFocus={() => setFocusedInput("phoneNumber")} onBlur={() => setFocusedInput("")}
                                   style={{
                                       backgroundColor: '#282a34',
                                       color: 'white',
                                       paddingVertical: 14,
                                       paddingHorizontal: 16,
                                       borderRadius: 14,
                                       fontSize: 16,
                                       borderWidth: 1.5,
                                       borderColor: focusedInput === "email" ? "#007bff" : "#4e515c"
                                   }}
                        />
                    </View>

                </View>
                <TouchableOpacity disabled={!fullName || !email || !phoneNumber} style={{
                    backgroundColor: (fullName && email && phoneNumber) ? '#007bff' : '#4e515c',
                    opacity: (fullName && email && phoneNumber) ? 1 : 0.5,
                    width: '100%',
                    paddingVertical: 16,
                    borderRadius: 30,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8
                }}
                                  onPress={() => navigation.navigate('RegisterComplete')}
                >
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Complete Registration</Text>
                    <ArrowRight color={"white"} size={20}/>
                </TouchableOpacity>
            </ScrollView>

        </KeyboardAvoidingView>
    )
};


export default ProfileSetupScreen;