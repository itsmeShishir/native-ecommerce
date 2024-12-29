import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";

const SingleProduct = () => {
  const [data, setData] = useState([]);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    axios
      .get(`https://python.bhandarishishir.com.np/api/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        Alert.alert("Error fetching product data:", error);
      });
  }, [id]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Single Product {id}</Text>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.productContainer}>
              <Pressable style={styles.product}>
                <Image
                  source={{ uri: `${data.images}` }}
                  style={styles.productImage}
                />
                <Text style={styles.ProductMainTitle}>{data.title}</Text>
                <Text style={styles.ProductMainTitle}>{data.description}</Text>
                <Text>Price: ${data.price}</Text>
                <Text>Stock: {data.stock}</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    objectFit: "cover",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  image: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#493628",
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: "white",
  },
  mainImage: {
    width: "98%",
    height: 290,
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  ProductMaintitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
