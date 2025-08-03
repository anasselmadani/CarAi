# CarAI - AI-Powered Car Assistant

A React Native application with Firebase authentication for car diagnostics and management.

## Features

- 🔐 **Firebase Authentication**
  - Email/Password Sign Up
  - Email/Password Sign In
  - Password Reset
  - Secure User Sessions

- 🎨 **Modern UI/UX**
  - Beautiful and responsive design
  - Smooth navigation transitions
  - Loading states and error handling
  - Form validation

- 🚗 **CarAI Features** (Coming Soon)
  - Car Diagnostics
  - Maintenance Reminders
  - Fuel Efficiency Tracking
  - Driving Analytics

## Prerequisites

- Node.js (>= 18)
- React Native CLI
- Firebase project setup
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CarAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Firebase Configuration

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication with Email/Password provider

2. **Configure Firebase in your app**
   - Update the Firebase configuration in `lib/firebase.js`
   - Replace the placeholder values with your actual Firebase config:

   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

3. **iOS Configuration**
   - Download `GoogleService-Info.plist` from Firebase Console
   - Add it to your iOS project in Xcode
   - Place it in the `ios/CarAI/` directory

4. **Android Configuration**
   - Download `google-services.json` from Firebase Console
   - Place it in the `android/app/` directory

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Metro Bundler
```bash
npm start
```

## Project Structure

```
CarAI/
├── src/
│   ├── context/
│   │   └── AuthContext.tsx          # Authentication context
│   ├── navigation/
│   │   └── AppNavigator.tsx         # Navigation setup
│   └── screens/
│       ├── auth/
│       │   ├── LoginScreen.tsx      # Login screen
│       │   ├── SignUpScreen.tsx     # Sign up screen
│       │   └── ForgotPasswordScreen.tsx # Password reset screen
│       └── HomeScreen.tsx           # Main app screen
├── lib/
│   └── firebase.js                  # Firebase configuration
├── App.tsx                          # Main app component
└── package.json
```

## Authentication Flow

1. **App Launch**: The app checks for existing user authentication
2. **Login Screen**: Users can sign in with email/password
3. **Sign Up Screen**: New users can create accounts
4. **Forgot Password**: Users can reset their passwords
5. **Home Screen**: Authenticated users see the main app interface

## Key Components

### AuthContext
Manages authentication state throughout the app using React Context.

### Firebase Integration
- `signUp()`: Create new user accounts
- `signIn()`: Authenticate existing users
- `signOut()`: Sign out users
- `resetPassword()`: Send password reset emails
- `onAuthStateChanged()`: Listen for authentication state changes

### Navigation
Uses React Navigation with stack navigation for smooth transitions between screens.

## Styling

The app uses a modern, clean design with:
- Consistent color scheme (#3498db, #2c3e50, #7f8c8d)
- Rounded corners and shadows
- Responsive layouts
- Loading states and animations

## Error Handling

- Form validation for all inputs
- Firebase error messages
- Network error handling
- User-friendly error alerts

## Security Features

- Secure password requirements
- Email validation
- Firebase security rules
- AsyncStorage for local data persistence

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Note**: Make sure to configure your Firebase project properly and add the necessary configuration files before running the app.
# CarAi
