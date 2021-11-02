import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  userPhotoLogout: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoutText: {
    color: COLORS.WHITE,
    fontSize: 15,
    lineHeight: 24,
    marginRight: 20,
  },
});
