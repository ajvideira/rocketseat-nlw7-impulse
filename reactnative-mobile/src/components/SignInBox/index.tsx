import React from "react";

import { View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPressOut={signIn}
        isLoading={isSigningIn}
        disabled={isSigningIn}
      />
    </View>
  );
}
