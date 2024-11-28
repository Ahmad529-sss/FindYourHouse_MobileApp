import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Button } from 'react-native';

const PostCard = ({ item, onAddToFavorites, onViewDetails }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.postCard}>
      <TouchableOpacity onPress={() => onViewDetails(item)} style={styles.imageContainer}>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#007bff"
            style={styles.activityIndicator}
          />
        )}
        <Image
          source={{ uri: item.img[0] }}
          style={styles.postImage}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </TouchableOpacity>

      <View style={styles.postDetails}>
        <Text style={styles.postAddress}>{item.address}</Text>
        <Text style={styles.postPrice}>${item.price}</Text>
        <Text style={styles.postDescription}>{item.description}</Text>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onAddToFavorites(item)}
        >
          <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  activityIndicator: {
    position: 'absolute',
    zIndex: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postDetails: {
    padding: 10,
  },
  postAddress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postPrice: {
    fontSize: 14,
    color: '#888',
  },
  postDescription: {
    fontSize: 14,
    color: '#444',
  },
  favoriteButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PostCard;
