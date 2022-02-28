import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

const baseColor = '#575DFB';

export default function Register({navigation}) {
    let [fontLoaded, error] = useFonts({Inter_700Bold, Inter_400Regular});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const header = {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: name,
            email: email,
            password: password
        })
    };

    const handleRegister = () => {
        if (email !== '' && name !== '' && password !== '') {
            fetch('https://xpensetracker.pythonanywhere.com/signup/', header)
            .then(
                response => response.json()
            ).then(
            data => {
                console.log(data.data);
            }
            )
        }
    }

    if (!fontLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPressIn={() => navigation.goBack()}><View onPress={() => navigation.goBack()} style={styles.back}><Image source={require('../assets/icons/back_arrow.png')} /></View></TouchableWithoutFeedback>
            <View style={styles.upperSection}>
                <Text style={styles.heading}>Register</Text>
                <Text style={{marginTop: 19}}>Create an <Text style={{fontFamily: "Inter_700Bold", color: baseColor}}>account</Text> to access all the features of <Text style={{fontFamily: "Inter_700Bold"}}>Maxpense!</Text></Text>
            </View>

            <View style={styles.lowerSection}>
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Email</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/at.png')} />
                        <TextInput onChange={(e) => setEmail(e.target.value)} value={email} selectionColor={baseColor} style={styles.inputField} placeholder="Eg. abc@example.com" placeholderTextColor={'#C8C8C8'} />
                    </View>
                </View>
                
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Your Name</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/user.png')} />
                        <TextInput onChange={(e) => setName(e.target.value)} value={name} selectionColor={baseColor} style={styles.inputField} placeholder="Eg. Kazi Nazrul" placeholderTextColor={'#C8C8C8'} />
                    </View>
                </View>
                
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Your Password</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/lock.png')} />
                        <TextInput onChange={(e) => setPassword(e.target.value)} value={password} secureTextEntry={true} selectionColor={baseColor} style={styles.inputField} placeholder="$PXE@KDK!#" placeholderTextColor={'#C8C8C8'} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text><Text style={{fontFamily: "Inter_700Bold", fontSize: 16, color: 'white'}}>Register</Text></Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.lastSection}>
                <Text style={{fontFamily: "Inter_400Regular", fontSize: 16}}>Already have an account? <Text onPress={() => navigation.navigate('login')} style={{fontFamily: "Inter_700Bold", color: baseColor}}>Login</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        justifyContent: 'center'
    },

    heading: {
        fontSize: 35,
        fontFamily: "Inter_700Bold",
        color: baseColor
    },

    upperSection: {
        justifyContent: 'center'
    },

    lowerSection: {
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: 'center',
    },

    button: {
        marginTop: 20,
        color: 'white',
        borderRadius: 16,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: baseColor,
        fontFamily: "Inter_700Bold", 
        fontSize: 16
    },

    icon: {
        height: 24,
        width: 24,
    },

    lastSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    }, 

    back: {
        marginBottom: 40,
        height: 20,
        width: 30,
    },

    textField: {
        borderWidth: 1.5,
        borderColor: baseColor,
        borderRadius: 16,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },

    inputField: {
        marginLeft: 15,
        fontSize: 16,
    },

    inputSection: {
        marginBottom: 24
    }
    
})