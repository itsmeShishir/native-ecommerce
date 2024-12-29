import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthProvider";
import ButtonWork from "../../components/button";
const Index = () => {
  const router = useRouter();
  const { user } = React.useContext(AuthContext);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.maintitle}>HamroShop</Text>
      <Text>{user}</Text>
      {user == null ? (
        <View style={styles.container}>
          <ButtonWork />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push("/(tabs)/")}
        >
          <Text style={styles.buttonText}>Go TO Home Page</Text>
          <ActivityIndicator />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FEF3E2",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maintitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  button1: {
    marginTop: 100,
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: "red",
    borderRadius: 15,
    marginBottom: 15,
  },
  button2: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: "blue",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
