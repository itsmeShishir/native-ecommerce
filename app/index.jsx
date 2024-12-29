import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useRouter } from "expo-router";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const index = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/(tabs)/");
      } else {
        router.push("/Screen/Welcome");
      }
    }
  }, [user, loading]);
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const requestPermission = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable permissions in settings");
      }
    };
    requestPermission();
  }, []);
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default index;
