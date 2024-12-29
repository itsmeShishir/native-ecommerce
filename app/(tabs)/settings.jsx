import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { AuthContext } from "../context/AuthProvider";

const Settings = () => {
  const router = useRouter();
  const { emails, logout } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Welcome, {emails || "User"}</Text>
      </View>

      {/* Main Content */}
      <ScrollView>
        <View style={styles.items}>
          {/* Account Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Account</Text>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="person-outline"
              size={24}
              color="#4CAF50"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/EditProfile")}
            >
              <Text style={styles.itemText}>Edit Profile</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#FF5722"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/UpdatePassword")}
            >
              <Text style={styles.itemText}>Update Password</Text>
            </Pressable>
          </View>

          {/* Customer Care Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Customer Care</Text>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="call-outline"
              size={24}
              color="#2196F3"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/ContactUs")}
            >
              <Text style={styles.itemText}>Contact Us</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="chatbubbles-outline"
              size={24}
              color="#9C27B0"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/Feedback")}
            >
              <Text style={styles.itemText}>Feedback</Text>
            </Pressable>
          </View>

          {/* Legal Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Legal</Text>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="document-text-outline"
              size={24}
              color="#FFC107"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/Terms")}
            >
              <Text style={styles.itemText}>Terms and Conditions</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#009688"
              style={styles.icon}
            />
            <Pressable
              onPress={() => router.push("/components/Settings/Policies")}
            >
              <Text style={styles.itemText}>Policies</Text>
            </Pressable>
          </View>

          {/* Logout */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Other</Text>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#E91E63"
              style={styles.icon}
            />
            <Pressable onPress={logout}>
              <Text style={styles.itemText}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#4CAF50",
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  items: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionHeader: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  icon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
