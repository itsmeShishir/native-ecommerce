import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthProvider";
import Toast from "react-native-toast-message";
import { CartProvider } from "./context/CartProvider";
const Layout = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RootNavigation />
        <Toast />
      </CartProvider>
    </AuthProvider>
  );
};

function RootNavigation() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <Stack.Screen name="Screen/singin/index" />
        <Stack.Screen name="Screen/singup/index" />
      </>
      <>
        <Stack.Screen name="(tabs)/_layout" options={{ headerShown: false }} />
      </>
    </Stack>
  );
}

export default Layout;
