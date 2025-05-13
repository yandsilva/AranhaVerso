import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CustomIcon from "../components/CustomIcon";
import { COLORS } from "../theme/theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: {
          marginTop: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={24}
              color={
                focused ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="like"
              size={24}
              color={
                focused ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="cart"
              size={24}
              color={
                focused ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={24}
              color={
                focused ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    position: "absolute",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
});

export default TabNavigator;
