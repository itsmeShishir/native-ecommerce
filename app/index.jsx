import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useRouter } from "expo-router";
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
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default index;
