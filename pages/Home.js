import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import PostCard from '../components/PostCard';
import Slider from '@react-native-community/slider';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [posts, setPosts] = useState(route.params?.posts || [
    {
      id: 1,
      address: "456 Park Ave",
      price: 1000,
      description: "Luxurious 4-bedroom villa with a swimming pool.",
      detail_description: "This stunning 4-bedroom villa offers a private swimming pool, spacious living areas, and a beautifully landscaped garden. Located in a prime neighborhood, it’s perfect for families seeking luxury and comfort.",
      city: "Tripoli",
      rating: 4.9,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/jejx0g32p/21e54fd2-e881-4b83-a02a-23c9f5dd442a.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/8kpdkct6j/a0069c79-f40c-4a2c-874e-bef87b3663c1.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/6r1xb53n1/954376cd-a9af-472e-b069-ae2e4be271ce.jpg"
      ],
      category: "Villa"
    },
    {
      id: 2,
      address: "789 Ocean Blvd",
      price: 1500,
      description: "Beachfront property with stunning ocean views.",
      detail_description: "This property features breathtaking ocean views and direct access to the beach. It includes modern amenities, spacious interiors, and large glass windows that fill the space with natural light.",
      city: "Beirut",
      rating: 5.0,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/7uh2bul8q/f6c792d8-8c6e-4346-a528-2f09d5e71ca3.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/26v14g4zg/15091633-36ab-4a8f-a05d-e7a58cad76b7.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/61fa9wkg3/3874b20a-d575-401f-87a6-212ad1b2aead.jpg"
      ],
      category: "House"
    },
    {
      id: 3,
      address: "321 Mountain Rd",
      price: 800,
      description: "Cozy cabin in the mountains, perfect for winter vacations.",
      detail_description: "Nestled in the mountains, this cozy cabin offers picturesque views and a serene atmosphere. With a warm and inviting interior, it’s an ideal retreat for a winter getaway.",
      city: "Aspen",
      rating: 4.7,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/nzjle3mwb/541d35f8-6bf0-428b-a74d-3c9ca8093558.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/m6mvsnec5/5623ef17-ffbb-46f2-b607-5863953f66f5.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/8u0zl4sc7/97c1a9d1-0a98-41c0-bdae-6c336c3e36da.jpg"
      ],
      category: "Apartment"
    },
    {
      id: 4,
      address: "22 Sunset Blvd",
      price: 1200,
      description: "Spacious family home with a large garden.",
      detail_description: "This spacious family home features a beautiful garden, perfect for outdoor activities and gatherings. The home is designed with a modern touch and ample space for a growing family.",
      city: "Miami",
      rating: 4.5,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/kgg56bku7/8cb172d5-9589-4659-a9b0-1c6f37a609e2.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/9li8j43m2/7a275058-f123-41a5-b913-6b0cfc241969.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/nhaqhixn1/9dea08e3-2be4-4c87-bf65-b7cadf61d3ff.jpeg"
      ],
      category: "House"
    },
    {
      id: 5,
      address: "98 Hillside Ave",
      price: 950,
      description: "Modern apartment with city skyline views.",
      detail_description: "This modern apartment offers breathtaking views of the city skyline. With a sleek design and top-notch amenities, it’s perfect for those who love urban living.",
      city: "Santa Monica",
      rating: 4.8,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/94wpfcicf/WhatsApp%20Image%202024-08-15%20at%2009.11.51%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/7p37asqiw/WhatsApp%20Image%202024-08-15%20at%2009.11.50%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/n03r24fnw/WhatsApp%20Image%202024-08-15%20at%2009.11.48%20%281%29.jpeg"
      ],
      category: "Apartment"
    },
    {
      id: 6,
      address: "27 Westlake Dr",
      price: 700,
      description: "Charming cabin retreat near a lake.",
      detail_description: "This charming cabin by the lake offers a peaceful escape. Surrounded by nature, it’s the perfect place for relaxation and adventure.",
      city: "Aspen",
      rating: 4.6,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/a5cqxcxlk/9ef9cc7e-ff16-4d68-8ae5-9a946c053133.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/wgxi5bj11/46ee84f7-8274-4a00-a3c9-b481e6495979.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/sqendk19s/75dd6e76-7e96-4e02-a930-fc0e735ec4c3.jpeg"
      ],
      category: "Villa"
    },
    {
      id: 7,
      address: "10 Grove St",
      price: 1100,
      description: "Elegant townhouse with modern interior design.",
      detail_description: "This elegant townhouse boasts a sleek interior design, perfect for modern living. Its prime location and exquisite details make it a top choice for urban dwellers.",
      city: "Beirut",
      rating: 4.9,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/ofan0oipu/515345c4-c69b-4ce1-a13e-77a29ab1503f.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/6063wbrbx/6c22dec7-2f3d-4c15-92a8-74faa1d6ac15.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/sy6bm3e5j/41374cb2-ee9b-4e06-b48c-c33644a45c11.jpeg"
      ],
      category: "House"
    },
    {
      id: 8,
      address: "55 Oceanview Ln",
      price: 1600,
      description: "Beachfront villa with private access to the beach.",
      detail_description: "This luxurious beachfront villa offers private access to the beach, stunning views, and a spacious layout perfect for entertaining.",
      city: "Miami",
      rating: 5.0,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/cbqsyo127/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/xp7pserg4/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/xp7pserg4/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM%20%281%29.jpeg"
      ],
      category: "Villa"
    }
  ]);

  const [favorites, setFavorites] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 200, max: 10000 });
  const [filteredPosts, setFilteredPosts] = useState(posts); // Filtered posts state
  const [search, setSearch] = useState('');

  useEffect(() => {
    applyFilters();
  }, [selectedCity, selectedCategory, priceRange, search, posts]);

  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible);

  const applyFilters = () => {
    let filtered = posts;

    // Filter by city
    if (selectedCity !== 'all') {
      filtered = filtered.filter((post) => post.city === selectedCity);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (post) => post.price >= priceRange.min && post.price <= priceRange.max
    );

    // Filter by search query
    if (search.trim() !== '') {
      filtered = filtered.filter((post) =>
        post.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const addToFavorites = (post) => {
    if (!favorites.some((favPost) => favPost.id === post.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, post]);
    }
    navigation.navigate('Favorites', { favoritePosts: favorites, setFavorites });
  };

  const renderPost = ({ item }) => (
    <PostCard
      item={item}
      onAddToFavorites={() => addToFavorites(item)}
      onViewDetails={(post) => navigation.navigate('PostDetails', { post })}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity onPress={toggleFilterVisibility}>
          <Image source={require('../assets/images/filter.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {isFilterVisible && (
        <View style={styles.filterContainer}>
           <Text style={styles.label}>
                  Filter by price: <Text style={styles.value}>{priceRange.min}$ - {priceRange.max}$</Text>
                </Text>
                <Slider
                  style={{ width: '100%', height: 40 }}
                  minimumValue={200}
                  maximumValue={priceRange.max - 100} // Prevent overlap
                  step={100}
                  value={priceRange.min}
                  onValueChange={(value) => {
                    if (value !== priceRange.min) {
                      setPriceRange((prevRange) => ({ ...prevRange, min: value }));
                    }
                  }}
                  minimumTrackTintColor="#1a73e8"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#1a73e8"
                />
                <Slider
                  style={{ width: '100%', height: 40 }}
                  minimumValue={priceRange.min + 100} // Prevent overlap
                  maximumValue={10000}
                  step={100}
                  value={priceRange.max}
                  onValueChange={(value) => {
                    if (value !== priceRange.max) {
                      setPriceRange((prevRange) => ({ ...prevRange, max: value }));
                    }
                  }}
                  minimumTrackTintColor="#1a73e8"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#1a73e8"
                />
          <Text style={styles.label}>By city:</Text>
          <Picker
            selectedValue={selectedCity}
            onValueChange={(value) => setSelectedCity(value)}
            style={styles.picker}
          >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Beirut" value="Beirut" />
            <Picker.Item label="Tripoli" value="Tripoli" />
            <Picker.Item label="Miami" value="Miami" />
            <Picker.Item label="Santa Monica" value="Santa Monica" />
            <Picker.Item label="Aspen" value="Aspen" />
          </Picker>

          <Text style={styles.label}>By category:</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            style={styles.picker}
          >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Apartment" value="Apartment" />
            <Picker.Item label="House" value="House" />
            <Picker.Item label="Villa" value="Villa" />
          </Picker>
        </View>
      )}

      <FlatList
        data={filteredPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.postsList}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPost')}>
        <Image source={require('../assets/images/add.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  filterContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  postsList: {
    padding: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
});

export default Home;
