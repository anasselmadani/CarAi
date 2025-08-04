import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HistoryScreen = () => {
  // Mock data for demonstration
  const tripHistory = [
    {
      id: 1,
      date: '2024-01-15',
      duration: '45 min',
      distance: '12.5 km',
      startLocation: 'Home',
      endLocation: 'Office',
      fuelUsed: '1.2L',
    },
    {
      id: 2,
      date: '2024-01-14',
      duration: '30 min',
      distance: '8.3 km',
      startLocation: 'Office',
      endLocation: 'Gym',
      fuelUsed: '0.8L',
    },
    {
      id: 3,
      date: '2024-01-13',
      duration: '1h 15min',
      distance: '25.7 km',
      startLocation: 'Home',
      endLocation: 'Shopping Mall',
      fuelUsed: '2.1L',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Trip History</Text>
          <Text style={styles.subtitle}>Your recent journeys</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Total Trips</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>46.5</Text>
            <Text style={styles.statLabel}>Total KM</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4.1L</Text>
            <Text style={styles.statLabel}>Fuel Used</Text>
          </View>
        </View>

        <View style={styles.historyContainer}>
          <Text style={styles.sectionTitle}>Recent Trips</Text>
          
          {tripHistory.map((trip) => (
            <TouchableOpacity key={trip.id} style={styles.tripCard}>
              <View style={styles.tripHeader}>
                <Text style={styles.tripDate}>{trip.date}</Text>
                <Text style={styles.tripDuration}>{trip.duration}</Text>
              </View>
              
              <View style={styles.tripDetails}>
                <View style={styles.tripRoute}>
                  <Text style={styles.routeText}>
                    📍 {trip.startLocation} → {trip.endLocation}
                  </Text>
                </View>
                
                <View style={styles.tripStats}>
                  <Text style={styles.tripStat}>📏 {trip.distance}</Text>
                  <Text style={styles.tripStat}>⛽ {trip.fuelUsed}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All Trips</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  historyContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  tripCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tripDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  tripDuration: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '500',
  },
  tripDetails: {
    gap: 8,
  },
  tripRoute: {
    marginBottom: 5,
  },
  routeText: {
    fontSize: 14,
    color: '#34495e',
  },
  tripStats: {
    flexDirection: 'row',
    gap: 15,
  },
  tripStat: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  viewAllButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HistoryScreen; 