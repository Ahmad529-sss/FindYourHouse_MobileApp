import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FavoritePost from '../components/FavoritePost';
 
const Favorites = ({ route }) => {
  const navigation = useNavigation();
  const favoritePost = route.params?.updatedFavorites;
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favoritesP');
        const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
 
        if (favoritePost && favoritePost.id && !parsedFavorites.some(post => post.id === favoritePost.id)) {
          const updatedFavorites = [...parsedFavorites, favoritePost];
          await AsyncStorage.setItem('favoritesP', JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        } else {
          setFavorites(parsedFavorites);
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };
 
    loadFavorites();
  }, [favoritePost]);
 
  const handleDelete = async (postToDelete) => {
    try {
      console.log('Deleting:', postToDelete); // Debugging
      const updatedFavorites = favorites.filter(post => post.id !== postToDelete.id);
      console.log('Updated Favorites:', updatedFavorites); // Debugging
      await AsyncStorage.setItem('favoritesP', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites); // Update the state
    } catch (error) {
      console.error('Error deleting favorite:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FavoritePost
              item={item}
              onRemoveFavorite={() => handleDelete(item)}
            />
          )}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorites yet! Add some to your list.</Text>
      )}
      <TouchableOpacity style={styles.goBackButton} onPress={() =>{ navigation.goBack()}}>
        <Text style={styles.goBackButtonText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  noFavoritesText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 20,
  },
  goBackButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 
export default Favorites;