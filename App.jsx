import React, { useCallback, useEffect } from "react";
import { StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigators/TabNavigator";
import DatailsScreen from "./src/screens/DatailsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import {
  Barlow_600SemiBold,
  Barlow_500Medium,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";

const Stack = createNativeStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    IconMoon: require("./assets/fonts/app_icons.ttf"),
    Barlow_600SemiBold,
    Barlow_500Medium,
    Barlow_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Details"
            component={DatailsScreen}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
