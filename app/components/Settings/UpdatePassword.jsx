import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const UpdatePassword = () => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updatePassword = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      console.log(token);
      const response = await axios.put(
        "https://python.bhandarishishir.com.np/api/auth/change-password/",
        {
          old_password,
          new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      console.log("Password updated successfully.");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Old Password</Text>
        <TextInput
          placeholder="Enter your Old Password"
          value={old_password}
          onChangeText={(text) => setOldPassword(text)}
          autoCapitalize="none"
          keyboardType="Change Password"
          style={styles.input}
          accessible={true}
          accessibilityLabel="******"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>New Password</Text>
        <TextInput
          placeholder="Enter your Old Password"
          value={new_password}
          onChangeText={(text) => setNewPassword(text)}
          autoCapitalize="none"
          keyboardType="Change Password"
          style={styles.input}
          accessible={true}
          accessibilityLabel="******"
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={updatePassword}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Change Password</Text>
        )}
      </Pressable>
    </View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingTop: 100,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 8,
    fontWeight: "600",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#FFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#FFF",
    fontSize: 16,
    width: "100%",
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#007AFF",
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
