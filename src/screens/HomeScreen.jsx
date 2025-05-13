import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import CustomIcon from "../components/CustomIcon";

const HomeScreen = () => {
  const [categories, setCategories] = useState("");

  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

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

        {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_20}
              color={
                searchText.length > 0
                  ? COLORS.primaryRedHex
                  : COLORS.primaryWhiteHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search Headphones"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroll */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewContainer}
        >
          <View style={styles.CategoryScrollViewContainer}>
            <TouchableOpacity
              style={styles.CategoryScrollViewItem}
              onPress={() => {
                setCategoryIndex({ index: 0, category: categories[0] });
              }}
            >
              <Text
                style={[
                  styles.CategoryText,
                  categoryIndex.index === 0
                    ? { color: COLORS.primaryRedHex }
                    : {},
                ]}
              >
                Categorias
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    paddingTop: SPACING.space_30,
    paddingHorizontal: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: "row",
    margin: SPACING.space_30,
    borderRadius: SPACING.space_8,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: "center",
  },
  InputIcon: {
    marginLeft: SPACING.space_24,
    marginRight: SPACING.space_16,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.barlow_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewItem: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: "center",
  },
  CategoryText: {
    fontFamily: FONTFAMILY.barlow_semiBold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_4,
  },
});
