import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useRouter } from "expo-router";
import { CartContext } from "../context/CartProvider";

const { width } = Dimensions.get("window");

export default function Index() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    // Fetch Categories
    axios
      .get("https://python.bhandarishishir.com.np/api/categories/")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching category data:", error));
  }, []);

  useEffect(() => {
    // Fetch Products
    axios
      .get("https://python.bhandarishishir.com.np/api/products/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push({
        pathname: "/search/[query]",
        params: { query: searchQuery },
      });
    } else {
      alert("Please enter a product name to search.");
    }
  };

  const renderSliderItem = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={{ uri: item.product_img }} style={styles.sliderImage} />
      <Text style={styles.sliderTitle}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search Products"
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>

      <ScrollView>
        {/* Slider Section */}
        {/* Category Section */}
        <View style={styles.container}>
          <Text style={styles.sectionHeader}>Categories</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={styles.categoryCard}
                onPress={() =>
                  router.push(`/Screen/SingleCategory/${category.id}`)
                }
              >
                <Image
                  source={{
                    uri: category.category_image,
                  }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryTitle}>{category.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Products Section */}
        <View style={styles.container}>
          <Text style={styles.sectionHeader}>All Products</Text>
          <View style={styles.productContainer}>
            {products.map((item) => (
              <Pressable
                key={item.id}
                style={styles.product}
                onPress={() => router.push(`/Screen/SingleProduct/${item.id}`)}
              >
                <Image
                  source={{ uri: item.images }}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productTitle}>{item.description}</Text>
                <Text>Price: ${item.price}</Text>
                <Pressable
                  style={styles.addButton}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </Pressable>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "#FEF3E2", height: "100%" },
  container: { width: "90%", marginHorizontal: "5%", marginVertical: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // Slider Styles
  sliderContainer: { marginBottom: 20 },
  sliderItem: {
    width: width * 0.8,
    marginRight: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sliderImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  sliderTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    padding: 10,
  },

  // Category Styles
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "#333",
  },

  // Product Styles
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  product: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: { width: "100%", height: 150, borderRadius: 10 },
  productTitle: { fontSize: 14, fontWeight: "600", marginTop: 5 },
  addButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
});
