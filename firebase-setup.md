# Firebase Setup Guide for CarAI

This guide will help you set up Firebase for the CarAI application.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "CarAI")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## Step 3: Get Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Register your app with a nickname (e.g., "CarAI Web")
6. Copy the Firebase configuration object

## Step 4: Update Firebase Configuration

1. Open `lib/firebase.js` in your project
2. Replace the placeholder configuration with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Step 5: iOS Configuration

1. In Firebase Console, go to Project Settings
2. In the "Your apps" section, click "Add app" and select iOS
3. Enter your iOS bundle ID (found in Xcode project settings)
4. Download the `GoogleService-Info.plist` file
5. Add it to your iOS project:
   - Open your project in Xcode
   - Drag `GoogleService-Info.plist` into the project navigator
   - Make sure it's added to your target

## Step 6: Android Configuration

1. In Firebase Console, go to Project Settings
2. In the "Your apps" section, click "Add app" and select Android
3. Enter your Android package name (found in `android/app/build.gradle`)
4. Download the `google-services.json` file
5. Place it in the `android/app/` directory of your project

## Step 7: Update Android Build Files

1. Open `android/build.gradle`
2. Add the Google Services plugin to the dependencies:

```gradle
buildscript {
    dependencies {
        // ... other dependencies
        classpath 'com.google.gms:google-services:4.3.15'
    }
}
```

3. Open `android/app/build.gradle`
4. Add the plugin at the bottom:

```gradle
apply plugin: 'com.google.gms.google-services'
```

## Step 8: Test Authentication

1. Run your app: `npm run ios` or `npm run android`
2. Try creating a new account
3. Try signing in with existing credentials
4. Test password reset functionality

## Troubleshooting

### Common Issues:

1. **"Firebase not initialized" error**
   - Make sure you've added the configuration files correctly
   - Check that the bundle ID/package name matches

2. **Authentication not working**
   - Verify Email/Password provider is enabled in Firebase Console
   - Check that your Firebase config is correct

3. **iOS build errors**
   - Make sure `GoogleService-Info.plist` is added to your Xcode project
   - Clean and rebuild: `cd ios && xcodebuild clean`

4. **Android build errors**
   - Verify `google-services.json` is in the correct location
   - Clean and rebuild: `cd android && ./gradlew clean`

### Security Rules

For production, consider setting up Firebase Security Rules:

```javascript
// Example Firestore rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Next Steps

Once Firebase is configured:

1. Test all authentication flows
2. Set up additional Firebase services as needed (Firestore, Storage, etc.)
3. Implement user profile management
4. Add data persistence for user preferences

## Support

If you encounter issues:
1. Check the [Firebase documentation](https://firebase.google.com/docs)
2. Review [React Native Firebase docs](https://rnfirebase.io/)
3. Check the Firebase Console for error logs 