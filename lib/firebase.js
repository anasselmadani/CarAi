import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Firebase is initialized in App.tsx

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '625380289376-mvufq3861crl0q5eciubrhsftb89pmgp.apps.googleusercontent.com',
  iosClientId: '625380289376-mvufq3861crl0q5eciubrhsftb89pmgp.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  scopes: ['profile', 'email'],
});

// Authentication functions
export const signUp = async (email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    await storeUserData(userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const signInWithGoogle = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    
    // Sign out first to ensure clean state
    try {
      await GoogleSignin.signOut();
    } catch (signOutError) {
      console.log('Sign out error (ignored):', signOutError);
    }
    
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn();
    console.log('Google Sign-In userInfo:', userInfo);
    
    // Check if we have either idToken or accessToken
    if (!userInfo.idToken && !userInfo.accessToken) {
      console.log('No tokens received, trying to get tokens...');
      
      // Try to get tokens explicitly
      const tokens = await GoogleSignin.getTokens();
      console.log('Explicit tokens:', tokens);
      
      if (tokens && tokens.accessToken) {
        // Use access token if no ID token
        const googleCredential = auth.GoogleAuthProvider.credential(null, tokens.accessToken);
        const userCredential = await auth().signInWithCredential(googleCredential);
        console.log('Firebase userCredential (access token):', userCredential);
        await storeUserData(userCredential.user);
        return { success: true, user: userCredential.user };
      }
      
      throw new Error('No tokens received from Google Sign-In');
    }

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);

    // Sign-in the user with the credential
    const userCredential = await auth().signInWithCredential(googleCredential);
    console.log('Firebase userCredential:', userCredential);
    
    await storeUserData(userCredential.user);
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    
    // Try alternative approach for internal error
    if (error.code === 'auth/internal-error') {
      console.log('Internal error occurred, trying alternative approach...');
      try {
        // Try signing in with just the access token
        const userInfo = await GoogleSignin.getCurrentUser();
        if (userInfo && userInfo.accessToken) {
          const googleCredential = auth.GoogleAuthProvider.credential(null, userInfo.accessToken);
          const userCredential = await auth().signInWithCredential(googleCredential);
          await storeUserData(userCredential.user);
          return { success: true, user: userCredential.user };
        }
      } catch (fallbackError) {
        console.error('Fallback approach also failed:', fallbackError);
      }
      return { success: false, error: 'Google Sign-In failed. Please try again.' };
    }
    
    if (error.code === 'auth/account-exists-with-different-credential') {
      return { success: false, error: 'An account already exists with this email using a different sign-in method.' };
    }
    
    if (error.code === 'auth/invalid-credential') {
      return { success: false, error: 'Invalid Google credentials. Please try again.' };
    }
    
    if (error.code === 'SIGN_IN_CANCELLED') {
      return { success: false, error: 'Sign-in was cancelled.' };
    }
    
    if (error.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
      return { success: false, error: 'Google Play Services not available.' };
    }
    
    return { success: false, error: error.message || 'Google Sign-In failed. Please try again.' };
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('user');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (email) => {
  try {
    await auth().sendPasswordResetEmail(email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const onAuthStateChanged = (callback) => {
  return auth().onAuthStateChanged(callback);
};

// Store user data in AsyncStorage
export const storeUserData = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

// Get user data from AsyncStorage
export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export default auth;
