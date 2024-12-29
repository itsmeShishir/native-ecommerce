import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "expo-router";

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
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.headerText}>All Categories</Text>
        <ScrollView>
          <View style={styles.cardsContainer}>
            {data.map((item) => (
              <TouchableOpacity
                style={styles.card}
                key={item.id}
                activeOpacity={0.8}
              >
                <Link href={`/Screen/SingleCategory/${item.id}`} asChild>
                  <View>
                    <Image
                      source={{
                        uri: `${item.category_image}`,
                      }}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardTitle}>{item.name}</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllCategory;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 15,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
