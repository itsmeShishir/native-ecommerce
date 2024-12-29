// EditProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext, AuthProvider } from "../../context/AuthProvider";

const EditProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const { user } = React.useContext(AuthContext);
  const { emails } = React.useContext(AuthContext);
  const { usernames } = React.useContext(AuthContext);

  const handleChangeProfile = () => {
    Alert.alert(
      "Profile Updated",
      "Your profile has been updated successfully!",
      [{ text: "OK" }]
    );
  };

  const handleChangePassword = () => {
    if (password && newPassword) {
      Alert.alert(
        "Password Changed",
        "Your password has been updated successfully!",
        [{ text: "OK" }]
      );
      setPassword("");
      setNewPassword("");
    } else {
      Alert.alert("Error", "Please fill in both current and new passwords.", [
        { text: "OK" },
      ]);
    }
  };

  const handleResetPassword = () => {
    Alert.alert(
      "Password Reset",
      "A password reset link has been sent to your email.",
      [{ text: "OK" }]
    );
  };

  const handleProfileImageChange = () => {
    Alert.alert("Profile Image", "Change your profile picture.", [
      { text: "OK" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TouchableOpacity onPress={handleProfileImageChange}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="camera" size={40} color="black" />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.subheader}>
        <Text style={styles.text}>Username</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={usernames}
        onChangeText={setName}
      />
      <View style={styles.subheader}>
        <Text style={styles.text}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emails}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button1} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAF7F0",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    borderBottomWidth: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 50,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  subheader: {
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  button1: {
    backgroundColor: "#088395",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#088395",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: -5,
    marginHorizontal: 6,
  },
  linkText: {
    color: "#384B70",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 14,
  },
});
