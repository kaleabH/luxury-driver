import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Divider, Text } from 'react-native-paper';

const RideHistory = () => {
  const theme = {
    colors: {
      primary: '#B80028',
      background: '#FFFFFF',
      text: '#000000',
    },
  };

  const rideHistory = [
    {
      id: 1,
      date: 'September 6, 2024',
      time: '10:00 AM',
      pickup: 'Bole',
      dropoff: 'City Mall',
      fare: '250.00 br',
    },
    {
      id: 2,
      date: 'September 5, 2024',
      time: '2:30 PM',
      pickup: 'Chirchill Street',
      dropoff: 'Airport',
      fare: '450.00 br',
    },
    {
      id: 3,
      date: 'September 4, 2024',
      time: '5:15 PM',
      pickup: 'Freind Park',
      dropoff: 'Piassa',
      fare: '300.00 br',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* App Bar */}
      <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }}>
        <Appbar.Content title="Ride History" />
      </Appbar.Header>

      {/* Ride History List */}
      {rideHistory.map((ride) => (
        <Card key={ride.id} style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>{ride.date}</Title>
            <Paragraph style={styles.text}>Time: {ride.time}</Paragraph>
            <Paragraph style={styles.text}>Pickup: {ride.pickup}</Paragraph>
            <Paragraph style={styles.text}>Drop-off: {ride.dropoff}</Paragraph>
            <Paragraph style={styles.fare}>Fare: {ride.fare}</Paragraph>
          </Card.Content>
          <Divider style={styles.divider} />
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  card: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#B80028',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    color: '#B80028',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
  fare: {
    fontSize: 16,
    color: '#B80028',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#B80028',
    marginTop: 10,
  },
});

export default RideHistory;
