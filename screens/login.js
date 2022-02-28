import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';


const baseColor = '#575DFB';

export default function Login({navigation}) {
    let [fontLoaded, error] = useFonts({Inter_700Bold, Inter_400Regular});

    if (!fontLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPressIn={() => navigation.goBack()}><View style={styles.back}><Image source={require('../assets/icons/back_arrow.png')} /></View></TouchableWithoutFeedback>
            <View style={styles.upperSection}>
                <Text style={styles.heading}>Login</Text>
                <Text style={{marginTop: 19}}>Login now to track all your expenses and income at a place!</Text>
            </View>

            <View style={styles.lowerSection}>
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Email</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/at.png')} />
                        <TextInput selectionColor={baseColor} style={styles.inputField} placeholder="Eg. abc@example.com" placeholderTextColor={'#C8C8C8'} />
                    </View>
                </View>
                
                
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Your Password</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/lock.png')} />
                        <TextInput secureTextEntry={true} selectionColor={baseColor} style={styles.inputField} placeholder="$PXE@KDK!#" placeholderTextColor={'#C8C8C8'} />
                    </View>
                    <Text onPress={() => navigation.navigate('forgot-password')} style={{marginTop: 6, color: baseColor}}>Forgot Password?</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text><Text style={{fontFamily: "Inter_700Bold", fontSize: 16, color: 'white'}}>Login</Text></Text>
                </TouchableOpacity>
                
            </View>

            {/* <View style={styles.bar}></View>

            <TouchableOpacity style={styles.buttonGoogle}>
                    <Text><Image style={styles.icon} source={require('../assets/icons/google.png')} /> <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Continue with Google</Text></Text>
            </TouchableOpacity> */}

            <View style={styles.lastSection}>
                <Text style={{fontFamily: "Inter_400Regular", fontSize: 16}}>Don't have an account? <Text onPress={() => navigation.navigate('register')} style={{fontFamily: "Inter_700Bold", color: baseColor}}>Register</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        marginTop: 40
        // justifyContent: 'center'
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
        marginTop: 10,
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
    
    buttonGoogle: {
        marginTop: 10,
        paddingTop: 10,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 16,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginBottom: 20
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
    },

    bar: {
        height: 1,
        backgroundColor: 'black',
        marginTop: 20,
        marginBottom: 20
    }
    
})