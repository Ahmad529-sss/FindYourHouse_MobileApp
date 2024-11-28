import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FavoritePost = ({ item, onRemoveFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.img[0] }} style={styles.image} />
      <Text style={styles.title}>{item.address}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Image
            source={require('../assets/images/star.png')} // Replace with actual path
            style={styles.ratingIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={onRemoveFavorite}>
        <Text style={styles.removeButtonText}>Remove from Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  ratingIcon: {
    width: 20,
    height: 20,
  },
  removeButton: {
    marginTop: 15,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FavoritePost;
