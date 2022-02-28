import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import ForgotPassword from './screens/forgotPass';
// import ForgotPassVerification from './screens/forgotPassVerification';
// import SetNewPassword from './screens/setNewPass';
// import Register from './screens/register';
// import RegisterVerification from './screens/registerVerification';
import Welcome from './screens/welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      {/* <Register /> */}
      {/* <RegisterVerification /> */}
      {/* <ForgotPassword /> */}
      {/* <ForgotPassVerification /> */}
      {/* <SetNewPassword /> */}
      <StatusBar style="auto" backgroundColor='white'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
