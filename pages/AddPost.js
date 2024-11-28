import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Define the background image as a variable
const backgroundImage = require("../assets/images/background1.jpg"); // Replace with your dynamic image path

function AddPost() {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [detail_description, setDetailDescription] = useState("");
  const [Rate, setRate] = useState("");
  const [Imgs, setImgs] = useState([""]);

  const handleAddPost = () => {
    if (!Address || !Price || !Description || !Rate || !Imgs[0] || !city || !Category) {
      Alert.alert("Validation Error", "All fields are required to create a post!");
      return;
    }

    const newPost = {
      id: Math.random().toString(),
      address: Address,
      price: Price,
      description: Description,
      city: city,
      rating: Rate,
      detail_description: detail_description,
      img: Imgs,
      category: Category,
    };

    // Reset fields
    setAddress("");
    setPrice("");
    setDescription("");
    setRate("");
    setImgs([""]);
    setCity("");
    setCategory("");

    Alert.alert("Success", "New post added successfully!");
    navigation.goBack();
  };

  const handleAddImageField = () => {
    if (Imgs.length < 5) {
      setImgs([...Imgs, ""]);
    } else {
      Alert.alert("Limit Reached", "Maximum of 5 image links allowed!");
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImgs = [...Imgs];
    updatedImgs[index] = value;
    setImgs(updatedImgs);
  };

  return (
    <ImageBackground
      source={backgroundImage} // Apply the dynamic background image here
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Add a New Post</Text>

        <TextInput
          placeholder="Address"
          value={Address}
          onChangeText={setAddress}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={Price}
          keyboardType="numeric"
          onChangeText={setPrice}
          style={styles.input}
        />
        <TextInput
          placeholder="City"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <TextInput
          placeholder="Rating"
          value={Rate}
          keyboardType="numeric"
          onChangeText={setRate}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={Description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="Details"
          value={detail_description}
          onChangeText={setDetailDescription}
          style={styles.input}
        />

        <View style={styles.radioGroup}>
          {["Apartment", "Villa", "House"].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.radioButton, Category === cat && styles.radioButtonSelected]}
              onPress={() => setCategory(cat)}
            >
              <Text style={styles.radioText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {Imgs.map((img, index) => (
          <TextInput
            key={index}
            placeholder={`Image URL ${index + 1}`}
            value={img}
            onChangeText={(value) => handleImageChange(index, value)}
            style={styles.input}
          />
        ))}

        {Imgs.length < 5 && (
          <TouchableOpacity onPress={handleAddImageField} style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Image</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleAddPost} style={styles.button}>
          <Text style={styles.buttonText}>Add Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: "30%",
    alignItems: "center",
  },
  radioButtonSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  radioText: {
    color: "#555",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
  },
  addButtonText: {
    color: "#333",
    fontSize: 14,
  },
  goBackButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
});

export default AddPost;
