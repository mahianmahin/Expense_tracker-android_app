import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const baseColor = '#575DFB';

export default function SetNewPassword() {
    let [fontLoaded, error] = useFonts({Inter_700Bold, Inter_400Regular});

    if (!fontLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.back}><Image source={require('../assets/icons/back_arrow.png')} /></View>
            <View style={styles.upperSection}>
                <Text style={styles.heading}>Forgot Password?</Text>
                <Text style={{marginTop: 19}}>Set your new password to login into your account!</Text>
            </View>

            <View style={styles.lowerSection}>
                <View style={styles.inputSection}>
                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 6}}>Email</Text>
                    <View style={styles.textField}>
                        <Image source={require('../assets/icons/lock.png')} />
                        <TextInput selectionColor={baseColor} style={styles.inputField} placeholder="$PXE@KDK!#" placeholderTextColor={'#C8C8C8'} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text><Text style={{fontFamily: "Inter_700Bold", fontSize: 16, color: 'white'}}>Confirm</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        marginTop: 57
    },

    heading: {
        fontSize: 32,
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
        marginBottom: 40
    },

    textField: {
        borderWidth: 1.5,
        borderColor: baseColor,
        borderRadius: 16,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
        // justifyContent: 'center',
    },

    inputField: {
        marginLeft: 15,
        fontSize: 16,
    },

    inputSection: {
        marginBottom: 24
    }
    
})