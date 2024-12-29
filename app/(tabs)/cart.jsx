import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { CartContext } from "../context/CartProvider";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Please login to proceed",
        });
        return;
      }

      console.log("User Token:", token);

      setIsLoading(true);
      const response = await axios.post(
        "https://python.bhandarishishir.com.np/api/initiate-payment/",
        {
          items: cartItems.map((item) => ({
            product: item.id,
            quantity: item.quantity,
          })),
          phone: "9841234567",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsLoading(false);

      if (response.data.payment_url) {
        setPaymentUrl(response.data.payment_url);
        console.log("Payment URL:", response.data.payment_url);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Unable to initiate payment",
        });
      }
    } catch (e) {
      setIsLoading(false);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: e.message,
      });
      console.error("Checkout Error:", e);
    }
  };

  const handleWebViewNavigation = async (navState) => {
    const baseUrl = "https://python.bhandarishishir.com.np/api/verify-payment/";
    const currentUrl = navState.url;
    setCurrentUrl(currentUrl);
    console.log("Current URL:", currentUrl);

    if (currentUrl.startsWith(baseUrl)) {
      try {
        // Extract the status parameter from the URL
        const url = new URL(currentUrl);
        const status = url.searchParams.get("status"); // Get the "status" parameter

        console.log("Payment Status:", status);

        if (status === "Completed") {
          Toast.show({
            type: "success",
            text1: "Payment Successful",
            text2: "Thank you for your purchase!",
          });
          clearCart(); // Clear all cart items
        } else if (status === "Pending") {
          Toast.show({
            type: "info",
            text1: "Payment Pending",
            text2: "Your payment is still pending. Please wait.",
          });
        } else {
          Toast.show({
            type: "error",
            text1: "Payment Failed",
            text2: "Payment was not successful.",
          });
        }
      } catch (error) {
        console.error("Error parsing URL:", error);
        Toast.show({
          type: "error",
          text1: "Verification Error",
          text2: "Unable to verify payment.",
        });
      } finally {
        setPaymentUrl(null); // Close the WebView regardless of success or failure
      }
    } else if (currentUrl.includes("cancel")) {
      Toast.show({
        type: "error",
        text1: "Payment Canceled",
        text2: "The payment was canceled.",
      });
      setPaymentUrl(null); // Close the WebView
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.headerText}>Cart</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.productContainer}>
          <Text style={styles.headerTextProduct}>Products</Text>
          <View style={styles.productList}>
            {cartItems.length === 0 ? (
              <Text style={styles.noProductText}>No product in cart</Text>
            ) : (
              cartItems.map((item) => (
                <View style={styles.product} key={item.id}>
                  <Image
                    source={{ uri: item.images }}
                    style={styles.productImage}
                  />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{item.title}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>
                    <Text style={styles.productQuantity}>
                      Quantity: {item.quantity}
                    </Text>
                  </View>
                  <View style={styles.productActions}>
                    <Pressable
                      style={styles.actionButton}
                      onPress={() => addToCart(item)}
                    >
                      <Ionicons name="add-circle" size={24} color="green" />
                    </Pressable>
                    <Pressable
                      style={styles.actionButton}
                      onPress={() => removeFromCart(item.id)}
                    >
                      <Ionicons name="remove-circle" size={24} color="red" />
                    </Pressable>
                  </View>
                  <Text style={styles.productTotal}>
                    Total: ${item.price * item.quantity}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${totalPrice}</Text>
          <Pressable style={styles.button} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Proceed to Checkout</Text>
          </Pressable>
        </View>
      )}

      {isLoading && (
        <Modal transparent animationType="fade">
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#F44336" />
          </View>
        </Modal>
      )}

      {paymentUrl && (
        <Modal visible={!!paymentUrl} transparent animationType="fade">
          <View style={styles.webViewWrapper}>
            <WebView
              source={{ uri: paymentUrl }}
              onNavigationStateChange={handleWebViewNavigation}
              style={styles.webView}
            />
            <Pressable
              style={styles.closeButton}
              onPress={() => setPaymentUrl(null)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
  scrollView: { paddingHorizontal: 16 },
  productContainer: { marginBottom: 16 },
  headerTextProduct: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  productList: { marginTop: 8 },
  noProductText: { textAlign: "center", marginTop: 16, fontSize: 16 },
  product: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
  productImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  productInfo: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productPrice: { color: "#888", marginVertical: 4 },
  productQuantity: { fontSize: 14 },
  productActions: { flexDirection: "row", alignItems: "center" },
  actionButton: { marginHorizontal: 4 },
  productTotal: { fontSize: 14, fontWeight: "bold", marginTop: 8 },
  totalContainer: { padding: 16, borderTopWidth: 1, borderColor: "#ddd" },
  totalText: { fontSize: 18, fontWeight: "bold" },
  button: {
    backgroundColor: "#F44336",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  loadingContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  webViewWrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: { flex: 1 },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: { color: "#fff", fontSize: 16 },
});
