import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Register = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    // Check if fields are empty
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    // Validate name
    if (name.length < 3) {
      Alert.alert('Error', 'Full Name must be at least 3 characters long!');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format!');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character!'
      );
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    // Save user data
    const userData = { name, email, password };
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      Alert.alert('Success', 'Account created successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error', 'Failed to save user data. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
