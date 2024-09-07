import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Text, Divider } from 'react-native-paper';

const Wallet = () => {
  const theme = {
    colors: {
      primary: '#B80028',
      background: '#FFFFFF',
      text: '#000000',
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Bar */}
      <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }}>
        <Appbar.Content title="Earnings" />
      </Appbar.Header>

      {/* Today's Earning */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Today's Earnings</Title>
          <Paragraph style={styles.amount}>120.00 br</Paragraph>
        </Card.Content>
      </Card>

      {/* Earning History */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Earning History</Title>
          <View style={styles.historyItem}>
            <Text>September 6, 2024</Text>
            <Text>200.00 br</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.historyItem}>
            <Text>September 5, 2024</Text>
            <Text>180.00 br</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.historyItem}>
            <Text>September 4, 2024</Text>
            <Text>150.00 br</Text>
          </View>
        </Card.Content>
      </Card>

      {/* Wallet Amount */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Wallet Amount</Title>
          <Paragraph style={styles.amount}>540.00 br</Paragraph>
        </Card.Content>
      </Card>

      {/* Withdraw Button */}
      <Button
        mode="contained"
        onPress={() => console.log('Withdraw')}
        style={styles.withdrawButton}
        labelStyle={styles.withdrawButtonText}
        theme={{ colors: { primary: theme.colors.primary } }}
      >
        Withdraw Earnings
      </Button>
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
  amount: {
    fontSize: 24,
    color: '#B80028',
    fontWeight: 'bold',
    lineHeight: 24
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  divider: {
    backgroundColor: '#B80028',
  },
  withdrawButton: {
    marginVertical: 20,
    padding: 10,
  },
  withdrawButtonText: {
    color: '#FFFFFF',
  },
});

export default Wallet;
