import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';
import Favorites from './pages/Favorites';
import Login from './pages/login 1';
import Register from './pages/register 1';

// Placeholder User Information screen
const UserInfo = ({ user, setUser }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Welcome, {user.name}!</Text>
    <Text>Email: {user.email}</Text>
    <Text style={styles.link} onPress={() => setUser(null)}>
      Log Out
    </Text>
  </View>
);

// Tab Navigator
const Tab = createBottomTabNavigator();
function TabNavigator({ user, setUser }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Favorites') iconName = 'heart';
          else if (route.name === 'User') iconName = 'person';
          else if (route.name === 'About Us') iconName = 'information-circle';
          else if (route.name === 'Contact Us') iconName = 'mail';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#007bff' },
        headerTitleStyle: { color: '#ffffff' },
        headerTitleAlign: 'start',
        headerTintColor: '#ffffff',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="About Us" component={AboutUs} />
      <Tab.Screen name="Contact Us" component={ContactUs} />
      {/* Conditionally render Login or UserInfo */}
      <Tab.Screen name="User">
        {() =>
          user ? (
            <UserInfo user={user} setUser={setUser} />
          ) : (
            <Login setUser={setUser} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Stack Navigator
const Stack = createStackNavigator();
function App() {
  const [user, setUser] = useState(null); // Track authentication state

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
        >
          {() => <TabNavigator user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddPost"
          component={AddPost}
          options={{
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { color: '#ffffff' },
            title: 'Add Post',
          }}
        />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Register">
          {() => <Register setUser={setUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
