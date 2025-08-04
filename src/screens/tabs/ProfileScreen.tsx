import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
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
          onPress: async () => {
            const result = await signOut();
            if (result.success) {
              console.log('Signed out successfully');
            } else {
              console.log('Sign out error:', result.error);
            }
          },
        },
      ]
    );
  };

  const profileSections = [
    {
      title: 'Account Information',
      items: [
        { label: 'Email', value: user?.email || 'Not available' },
        { label: 'User ID', value: user?.uid || 'Not available' },
        { label: 'Account Created', value: user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Not available' },
      ],
    },
    {
      title: 'App Settings',
      items: [
        { label: 'Notifications', value: 'Enabled', action: 'toggle' },
        { label: 'Location Services', value: 'Enabled', action: 'toggle' },
        { label: 'Data Usage', value: 'Unlimited', action: 'toggle' },
      ],
    },
    {
      title: 'Support',
      items: [
        { label: 'Help & FAQ', action: 'navigate' },
        { label: 'Contact Support', action: 'navigate' },
        { label: 'Privacy Policy', action: 'navigate' },
        { label: 'Terms of Service', action: 'navigate' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
            </Text>
          </View>
          <Text style={styles.userName}>{user?.email || 'User'}</Text>
          <Text style={styles.userSubtitle}>CarAI User</Text>
        </View>

        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.profileItem}
                onPress={() => {
                  if (item.action === 'toggle') {
                    Alert.alert('Coming Soon', 'This feature will be available soon!');
                  } else if (item.action === 'navigate') {
                    Alert.alert('Coming Soon', 'This feature will be available soon!');
                  }
                }}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  {item.value && (
                    <Text style={styles.itemValue}>{item.value}</Text>
                  )}
                  {(item.action === 'toggle' || item.action === 'navigate') && (
                    <Text style={styles.itemArrow}>›</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>CarAI v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  userSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  profileItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    color: '#2c3e50',
    flex: 1,
  },
  itemValue: {
    fontSize: 14,
    color: '#7f8c8d',
    marginRight: 10,
  },
  itemArrow: {
    fontSize: 18,
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  versionText: {
    fontSize: 14,
    color: '#bdc3c7',
  },
});

export default ProfileScreen; 