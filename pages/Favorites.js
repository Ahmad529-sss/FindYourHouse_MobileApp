import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FavoritePost from '../components/FavoritePost';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

const Favorites = ({ route }) => {
  const navigation = useNavigation();
  const [favoritePosts, setFavoritePosts] = useState(route.params?.favoritePosts || []);
  const setFavorites = route.params?.setFavorites;

  // Reload favorites whenever the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.favoritePosts) {
        setFavoritePosts(route.params.favoritePosts);
      }
    }, [route.params?.favoritePosts])
  );

  const handleRemoveFavorite = (postToRemove) => {
    if (setFavorites) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((post) => post.id !== postToRemove.id)
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favoritePosts.length > 0 ? (
        <FlatList
          data={favoritePosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FavoritePost
              item={item}
              onRemoveFavorite={() => handleRemoveFavorite(item)}
            />
          )}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorites yet! Add some to your list.</Text>
      )}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
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
