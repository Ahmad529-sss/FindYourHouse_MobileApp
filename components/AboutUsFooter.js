import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AboutUsFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.subscribeHeading}>Join Our Family!</Text>
      <Text style={styles.subscribeText}>
        Stay connected! Subscribe to get updates on the latest properties, events, and special offers.
      </Text>
      <View style={styles.subscribeForm}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
        />
        <Button title="Subscribe" onPress={() => {}} color="#007bff" />
      </View>
      <Text style={styles.copyright}>
        © 2024 Real Estate. All Rights Reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  subscribeHeading: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  subscribeText: { fontSize: 14, color: '#ffffff', marginVertical: 10, textAlign: 'center' },
  subscribeForm: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  copyright: { fontSize: 12, color: '#ffffff', marginTop: 10 },
});

export default AboutUsFooter;
