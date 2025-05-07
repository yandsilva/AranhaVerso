import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";

const HomeScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>Discover Your Best</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.barlow_semiBold,
    color: COLORS.primaryWhiteHex,
    padding: SPACING.space_20,
  },
});
