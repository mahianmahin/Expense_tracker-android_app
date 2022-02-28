import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './screens/forgotPass';
import ForgotPassVerification from './screens/forgotPassVerification';
import Login from './screens/login';
import Register from './screens/register';
import RegisterVerification from './screens/registerVerification';
import SetNewPassword from './screens/setNewPass';
import Welcome from './screens/welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="register-verification" component={RegisterVerification} />
          <Stack.Screen name="forgot-password" component={ForgotPassword} />
          <Stack.Screen name="forgot-password-verification" component={ForgotPassVerification} />
          <Stack.Screen name="set-new-password" component={SetNewPassword} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
