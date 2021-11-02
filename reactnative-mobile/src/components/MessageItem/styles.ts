import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 32,
  },
  text: {
    color: COLORS.GRAY_TERTIARY,
    fontSize: 15,
    lineHeight: 24,
    fontFamily: FONTS.REGULAR,
  },
  userInfo: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    color: COLORS.GRAY_TERTIARY,
    fontSize: 15,
    lineHeight: 24,
    fontFamily: FONTS.REGULAR,
    marginLeft: 16,
  },
});
