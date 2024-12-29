import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <View>
      <Image source={{ uri: item.product_img }}></Image>
      <View>
        <Text>{item.product_name}</Text>
        <Text>{item.price}</Text>
        <View>
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity onPress={() => addToCart(item)}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
