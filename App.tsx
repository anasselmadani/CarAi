/**
 * CarAI - AI-powered car assistant
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import firebase from '@react-native-firebase/app';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMtDanymUlG3vl3GBU_W-vpkPyYr7yc4Y",
  authDomain: "carai-92e0c.firebaseapp.com",
  projectId: "carai-92e0c",
  storageBucket: "carai-92e0c.firebasestorage.app",
  messagingSenderId: "625380289376",
  appId: "1:625380289376:ios:9dd806deaefcde0392cc05"
};

// Initialize Firebase at app startup
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
