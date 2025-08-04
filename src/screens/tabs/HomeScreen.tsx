import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useAuth } from '../../context/AuthContext';

const HomeScreen = () => {
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'CarAI needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true; // iOS handles permissions through Info.plist
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8,
    };

    try {
      const result = await launchCamera(options);
      if (result.assets && result.assets[0]) {
        setSelectedImage(result.assets[0].uri || null);
        Alert.alert('Success', 'Photo captured successfully!');
      }
    } catch (error) {
      console.error('Camera error:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
    }
  };

  const selectFromGallery = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8,
    };

    try {
      const result = await launchImageLibrary(options);
      if (result.assets && result.assets[0]) {
        setSelectedImage(result.assets[0].uri || null);
        Alert.alert('Success', 'Photo selected successfully!');
      }
    } catch (error) {
      console.error('Gallery error:', error);
      Alert.alert('Error', 'Failed to select photo. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CarAI Camera</Text>
        <Text style={styles.subtitle}>Capture your car moments</Text>
      </View>

      <View style={styles.mainContent}>
        {selectedImage ? (
          <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: selectedImage }} style={styles.capturedImage} />
            <View style={styles.imageActions}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => setSelectedImage(null)}
              >
                <Text style={styles.actionButtonText}>🗑️ Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.actionButton, styles.primaryButton]}
                onPress={() => Alert.alert('Coming Soon', 'AI analysis feature will be available soon!')}
              >
                <Text style={styles.primaryButtonText}>🤖 Analyze</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.cameraPlaceholder}>
            <Text style={styles.cameraIcon}>📸</Text>
            <Text style={styles.cameraText}>No photo captured yet</Text>
            <Text style={styles.cameraSubtext}>Take a photo to get started</Text>
          </View>
        )}

        <View style={styles.cameraButtons}>
          <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
            <Text style={styles.cameraButtonIcon}>📷</Text>
            <Text style={styles.cameraButtonText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.galleryButton} onPress={selectFromGallery}>
            <Text style={styles.galleryButtonIcon}>🖼️</Text>
            <Text style={styles.galleryButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  imagePreviewContainer: {
    flex: 1,
    marginBottom: 20,
  },
  capturedImage: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    marginBottom: 20,
  },
  imageActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f8c8d',
  },
  primaryButton: {
    backgroundColor: '#3498db',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    padding: 40,
  },
  cameraIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  cameraText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  cameraSubtext: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  cameraButtons: {
    gap: 15,
  },
  cameraButton: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cameraButtonIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  cameraButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  galleryButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  galleryButtonIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  galleryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3498db',
  },
});

export default HomeScreen; 