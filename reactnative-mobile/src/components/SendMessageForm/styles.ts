import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    //height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 32,
  },
  containerFocused: {
    backgroundColor: COLORS.BLACK_TERTIARY,
  },
  input: {
    height: 100,
    width: "100%",
    textAlignVertical: "top",
    color: COLORS.WHITE,
    paddingVertical: 16,
  },
});
