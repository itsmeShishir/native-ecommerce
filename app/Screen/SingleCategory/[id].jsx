import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useLocalSearchParams, Link } from "expo-router";

const SingleCategory = () => {
  const [data, setData] = useState([]);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://python.bhandarishishir.com.np/api/categories/${id}/products/`
        )
        .then((response) => {
          setData(response.data || []);
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(
            "Error",
            "Failed to fetch product data. Please try again."
          );
        });
    }
  }, [id]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Category: {id}</Text>
        <ScrollView>
          <View style={styles.productContainer}>
            {data.map((item) => (
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SingleCategory;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FEF3E2",
    flex: 1,
  },
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 13,
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
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 18,
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  ProductMainTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  productTitle: { fontSize: 14, fontWeight: "600", marginTop: 5 },
  product: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
});
