import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from "../../selection.json";
const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "IconMoon",
  "app_icons.ttf"
);

export default CustomIcon;
