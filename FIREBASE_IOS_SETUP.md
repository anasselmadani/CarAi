# 🔥 Firebase iOS Setup Guide for CarAI

This guide will help you set up Firebase for iOS only in your CarAI application.

## 📋 Prerequisites

- Xcode installed
- iOS Simulator or physical device
- Firebase project (we'll create this)

## 🚀 Step-by-Step Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: **"CarAI"**
4. Enable Google Analytics (recommended)
5. Click "Create project"

### Step 2: Add iOS App to Firebase

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. In the "Your apps" section, click "Add app" and select **iOS**
4. Enter your iOS bundle ID: **`com.carai`**
5. Enter app nickname: **"CarAI iOS"**
6. Click "Register app"

### Step 3: Download Configuration File

1. Download the `GoogleService-Info.plist` file
2. **Replace** the existing file at `ios/CarAI/GoogleService-Info.plist`
3. Make sure the file is added to your Xcode project target

### Step 4: Update Bundle Identifier

1. Open your project in Xcode: `ios/CarAI.xcworkspace`
2. Select the "CarAI" project in the navigator
3. Select the "CarAI" target
4. In "General" tab, verify Bundle Identifier is: `com.carai`

### Step 5: Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### Step 6: Test the Setup

1. Clean and rebuild the project:
   ```bash
   cd ios
   xcodebuild clean
   cd ..
   npm run ios
   ```

## 🔧 Configuration Files

### Current `GoogleService-Info.plist` (Template)
The file at `ios/CarAI/GoogleService-Info.plist` is a template. You need to replace it with your actual Firebase configuration.

### What to Replace:
- `YOUR_API_KEY` → Your actual Firebase API key
- `YOUR_PROJECT_NUMBER` → Your Firebase project number
- `YOUR_PROJECT_ID` → Your Firebase project ID
- `YOUR_APP_ID` → Your Firebase app ID

## 🧪 Testing Authentication

Once Firebase is configured:

1. **Run the app**: `npm run ios`
2. **Test Sign Up**: Create a new account
3. **Test Sign In**: Login with existing credentials
4. **Test Password Reset**: Use forgot password feature

## 🐛 Troubleshooting

### Common Issues:

1. **"Native module RNFBAppModule not found"**
   - Solution: Make sure `GoogleService-Info.plist` is added to Xcode project
   - Check that bundle ID matches in Firebase and Xcode

2. **Build Errors**
   - Clean the project: `cd ios && xcodebuild clean && cd ..`
   - Reinstall pods: `cd ios && pod install && cd ..`

3. **Authentication Not Working**
   - Verify Email/Password provider is enabled in Firebase Console
   - Check that `GoogleService-Info.plist` is in the correct location

4. **Bundle ID Mismatch**
   - Ensure bundle ID in Xcode matches Firebase configuration
   - Default should be: `com.carai`

### Verification Steps:

1. **Check Firebase Console**:
   - Go to Authentication → Users
   - You should see new users when they sign up

2. **Check Xcode**:
   - Verify `GoogleService-Info.plist` is in project navigator
   - Ensure it's added to the CarAI target

3. **Check Bundle ID**:
   - Xcode: Project settings → Bundle Identifier = `com.carai`
   - Firebase: Project settings → iOS app → Bundle ID = `com.carai`

## 📱 App Features Ready

Once configured, your app will have:
- ✅ User registration
- ✅ User login
- ✅ Password reset
- ✅ Session management
- ✅ Secure authentication
- ✅ Beautiful UI

## 🎯 Next Steps

After Firebase is working:
1. Test all authentication flows
2. Customize the UI if needed
3. Add additional Firebase services (Firestore, Storage, etc.)
4. Implement user profile management

---

**Important**: Replace the template `GoogleService-Info.plist` with your actual Firebase configuration file! 