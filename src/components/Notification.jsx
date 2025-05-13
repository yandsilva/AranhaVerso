import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomIcon from "./CustomIcon";
import { COLORS, SPACING } from "../theme/theme";

const Notification = () => {
  return (
    <View>
      <CustomIcon name="bell" size={24} color="white" style={styles.Image} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
