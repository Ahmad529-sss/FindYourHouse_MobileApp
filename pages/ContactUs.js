import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    Alert.alert('Message Sent', 'Thank you, ${name}! We\'ll get back to you shortly.');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={require('../assets/images/furniture1.jpg')} 
        style={styles.heroSection}
      >
        <Text style={styles.heroTitle}>Contact Us</Text>
      </ImageBackground>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        {/* Contact Details */}
        <View style={styles.contactDetails}>
          <Text style={styles.contactHeading}>Contact Details</Text>
          <Text style={styles.contactDescription}>
            If you have any questions, fill in the contact form, and we'll answer you shortly. You
            can also visit our office.
          </Text>

          <View style={styles.contactItem}>
            <Text style={styles.contactItemTitle}>Client Support:</Text>
            <Text style={styles.contactItemText}>1-800-1234-567</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactItemTitle}>E-mail:</Text>
            <Text style={styles.contactItemText}>info@demolink.org</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactItemTitle}>Main Office:</Text>
            <Text style={styles.contactItemText}>
              3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
            </Text>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.contactForm}>
          <Text style={styles.formHeading}>Get in Touch</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="black"
            
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.textarea}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
            placeholderTextColor="black"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Map Section */}
      <View style={styles.mapSection}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
            title="Main Office"
            description="3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345"
          />
        </MapView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  heroSection: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  middleSection: {
    padding: 20,
  },
  contactDetails: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  contactHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contactDescription: {
    fontSize: 14,
    marginBottom: 20,
    color: '#555',
    lineHeight: 22,
  },
  contactItem: {
    marginBottom: 15,
  },
  contactItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactItemText: {
    fontSize: 14,
    color: '#555',
  },
  contactForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  formHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  textarea: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    height: 100,
    fontSize: 16,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mapSection: {
    height: 300,
    marginTop: 20,
  },
  map: {
    flex: 1,
  },
});

export default ContactUs;