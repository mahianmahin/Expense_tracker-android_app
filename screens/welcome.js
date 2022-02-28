import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const baseColor = '#575DFB';

export default function Welcome({navigation}) {
    let [fontLoaded, error] = useFonts({Inter_700Bold, Inter_400Regular});

    if (!fontLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <Text style={{fontFamily: "Inter_400Regular", fontSize: 24}}>Welcome to</Text>
                <Text style={styles.heading}>MaxPense</Text>
                <Text>A place where you can track all your expenses and incomes...</Text>
            </View>

            <View style={styles.lowerSection}>
                <Text style={{fontFamily: "Inter_400Regular", fontSize: 17, paddingBottom: 5}}>Let’s Get Started...</Text>
                {/* <TouchableOpacity style={styles.button}>
                    <Text><Image style={styles.icon} source={require('../assets/icons/google.png')} /> <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Continue with Google</Text></Text>
                </TouchableOpacity> */}
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register')}>
                    <Text><Image style={styles.icon} source={require('../assets/icons/at.png')} /> <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Continue with Email</Text></Text>
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
        paddingTop: 55,
        paddingBottom: 10,
        justifyContent: 'center',
    },

    button: {
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
    }
    
})