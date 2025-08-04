import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/tabs/HomeScreen';
import HistoryScreen from '../screens/tabs/HistoryScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Tab = createBottomTabNavigator();

// Custom tab bar icons
const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const getIconName = () => {
    switch (name) {
      case 'Home':
        return 'camera-alt';
      case 'History':
        return 'history';
      case 'Profile':
        return 'person';
      default:
        return 'home';
    }
  };

  return (
    <View style={{ 
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: focused ? 20 : 0,
      backgroundColor: focused ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
      minWidth: 60,
    }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: focused ? 40 : 32,
        height: focused ? 40 : 32,
        borderRadius: focused ? 20 : 16,
        backgroundColor: focused ? '#3498db' : 'transparent',
        marginBottom: 4,
      }}>
        <Icon 
          name={getIconName()}
          size={focused ? 20 : 18}
          color={focused ? '#ffffff' : '#95a5a6'}
        />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: focused ? '#3498db' : '#95a5a6',
          fontWeight: focused ? '700' : '500',
          textAlign: 'center',
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name={route.name} focused={focused} />
          ),
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#95a5a6',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            paddingBottom: 12,
            paddingTop: 12,
            height: 80,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 12,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarItemStyle: {
            paddingVertical: 4,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Camera',
          }}
        />
        <Tab.Screen 
          name="History" 
          component={HistoryScreen}
          options={{
            title: 'History',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default TabNavigator; 