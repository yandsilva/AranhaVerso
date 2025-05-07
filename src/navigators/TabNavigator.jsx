import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
      <Tab.Screen name="Favorites" component={FavoritesScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
