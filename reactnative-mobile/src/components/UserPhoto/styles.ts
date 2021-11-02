import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  avatar: {
    borderRadius: 1000,
    borderWidth: 4,
    borderColor: COLORS.BLACK_SECONDARY,
  },
});
