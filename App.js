import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

// Placeholder screens
const UserScreen = () => <View style={styles.screen}><Text>User Page</Text></View>;

// Tab Navigator
const Tab = createBottomTabNavigator();
function TabNavigator() {
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
        headerStyle: { backgroundColor: '#007bff' }, // Blue header
        headerTitleStyle: { color: '#ffffff' }, // White text
        headerTitleAlign: 'start',
        headerTintColor: '#ffffff',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="About Us" component={AboutUs} />
      <Tab.Screen name="Contact Us" component={ContactUs} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide header for tabs
        />
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
});

export default App;
