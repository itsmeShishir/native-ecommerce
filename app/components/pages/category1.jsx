import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AllCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://python.bhandarishishir.com.np/api/categories/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Categories</Text>
        <ScrollView>
          <View style={styles.imagesContainer}>
            <View style={styles.image}>
              <ImageBackground
                source={{
                  uri: "https://media.istockphoto.com/id/837336346/photo/autumn-outfit-womens-fashion-clothes-and-accessories-in-blue-and-red-colors-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=nwuiJczGPf-fTS8dIM7ySdCQeX23c8-cijYuUFDStFA=",
                }}
                style={styles.mainImage}
                resizeMode="cover"
              >
                <Text style={styles.innerText}>Womens</Text>
              </ImageBackground>
            </View>

            <View style={styles.image}>
              <ImageBackground
                source={{
                  uri: "https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.webp?a=1&b=1&s=612x612&w=0&k=20&c=HgQE1Ii_iHxUvVVFX2RQUfn5RWpdk1Cie3E8W_rvcCc=",
                }}
                style={styles.mainImage}
                resizeMode="cover"
              >
                <Text style={styles.innerText}>Mens</Text>
              </ImageBackground>
            </View>

            <View style={styles.image}>
              <ImageBackground
                source={{
                  uri: "https://media.istockphoto.com/id/1152823482/photo/stylish-child-smiling-and-dancing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wnv6QCzuKARDekYpmfBbP6_cppO-_erWDeoazPiJ-tQ=",
                }}
                style={styles.mainImage}
                resizeMode="cover"
              >
                <Text style={styles.innerText}>Kids</Text>
              </ImageBackground>
            </View>

            <View style={styles.image}>
              <ImageBackground
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1727896377330-e354195e0ecc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
                }}
                style={styles.mainImage}
                resizeMode="cover"
              >
                <Text style={styles.innerText}>Sports</Text>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllCategory;

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
