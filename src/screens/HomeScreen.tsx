import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

const HomeScreen: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: signOut,
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CarAI</Text>
          <Text style={styles.subtitle}>Your AI-powered car assistant</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>User Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>User ID:</Text>
            <Text style={styles.infoValue}>{user?.uid}</Text>
          </View>
        </View>

        <View style={styles.features}>
          <Text style={styles.featuresTitle}>Features Coming Soon</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>🚗 Car Diagnostics</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>🔧 Maintenance Reminders</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>⛽ Fuel Efficiency Tracking</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>📊 Driving Analytics</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  userInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  features: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  featureItem: {
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#34495e',
  },
  signOutButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen; 