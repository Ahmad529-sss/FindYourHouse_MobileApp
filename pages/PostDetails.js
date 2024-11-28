import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const PostDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const post = route.params?.post;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Track loading state for current image

  if (!post) {
    return (
      <View style={styles.center}>
        <Text>No post data available.</Text>
      </View>
    );
  }

  const handleNextImage = () => {
    setLoading(true); // Reset loading state when changing images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setLoading(true); // Reset loading state when changing images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.img.length - 1 : prevIndex - 1
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.carousel}>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePrevImage}>
          <Text style={styles.arrowText}>❮</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#007bff"
              style={styles.activityIndicator}
            />
          )}
          <Image
            source={{ uri: post.img[currentImageIndex] }}
            style={styles.carouselImage}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </View>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNextImage}>
          <Text style={styles.arrowText}>❯</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.indicators}>
        {post.img.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              index === currentImageIndex ? styles.activeIndicator : null,
            ]}
            onPress={() => {
              setLoading(true); // Reset loading state
              setCurrentImageIndex(index);
            }}
          />
        ))}
      </View>

      <View style={styles.propertyDetails}>
        <Text style={styles.propertyAddress}>{post.address}</Text>
        <Text style={styles.propertyPrice}>${post.price}</Text>
        <Text style={styles.propertyDescription}>{post.description}</Text>
        <Text style={styles.propertyDetailDescription}>
          {post.detail_description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  arrowText: {
    fontSize: 24,
    color: '#6c757d',
  },
  imageContainer: {
    width: width * 0.8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  activityIndicator: {
    position: 'absolute',
    zIndex: 1,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#6c757d',
  },
  propertyDetails: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  propertyAddress: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#495057',
  },
  propertyPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginVertical: 10,
  },
  propertyDescription: {
    fontSize: 16,
    color: '#444',
    marginVertical: 5,
  },
  propertyDetailDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});

export default PostDetails;
