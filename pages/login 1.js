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



const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      
      const storedUser = await AsyncStorage.getItem('user');
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (user && user.email === email && user.password === password) {
        setUser(user);
        Alert.alert('Success', 'Login successful!');
      } else {
        Alert.alert('Error', 'Invalid email or password!');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerLinkContainer}>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            Register here
          </Text>
        </Text>
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
  registerLinkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Login;
