import React from 'react';
import { View, StyleSheet, Linking, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Support = () => {
  const theme = {
    colors: {
      primary: '#B80028',
      background: '#FFFFFF',
      text: '#000000',
    },
  };

  const contactSupport = (method: 'phone'| 'email') => {
    if (method === 'phone') {
      Linking.openURL('tel:+123456789'); // Replace with actual support number
    } else if (method === 'email') {
      Linking.openURL('mailto:support@example.com'); // Replace with actual support email
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Bar */}
      <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }}>
        <Appbar.Content title="Support" />
      </Appbar.Header>

      {/* Contact Support Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Need Help? Contact Us!</Title>
          <Paragraph style={styles.paragraph}>
            If you have any issues, feel free to reach out to our support team. We are here to assist you!
          </Paragraph>

          {/* Phone Support */}
          <Button
            icon={() => <Icon name="phone" size={20} color="#FFFFFF" />}
            mode="contained"
            onPress={() => contactSupport('phone')}
            style={styles.contactButton}
            labelStyle={styles.buttonLabel}
          >
            Call Support
          </Button>

          {/* Email Support */}
          <Button
            icon={() => <Icon name="email" size={20} color="#FFFFFF" />}
            mode="contained"
            onPress={() => contactSupport('email')}
            style={styles.contactButton}
            labelStyle={styles.buttonLabel}
          >
            Email Support
          </Button>
        </Card.Content>
      </Card>
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
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#B80028',
    borderWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#B80028',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#B80028',
    marginVertical: 10,
    padding: 10,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Support;
