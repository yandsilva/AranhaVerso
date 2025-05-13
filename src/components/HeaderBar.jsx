import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomIcon from "./CustomIcon";
import Notification from "./Notification";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

const HeaderBar = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <CustomIcon name="menu" size={24} color="white" />
      <Text style={styles.HeaderText}>{title}</Text>
      <Notification />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  HeaderContainer: {
    paddingTop: SPACING.space_30,
    paddingHorizontal: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONTFAMILY.barlow_semiBold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
