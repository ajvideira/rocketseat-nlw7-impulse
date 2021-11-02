import React, { useState } from "react";

import { TextInput, View } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function handlePressButton() {
    if (isFormFocused) {
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
        setIsFormFocused(false);
      }, 3000);
    } else {
      setIsFormFocused(true);
    }
  }

  return (
    <View style={[styles.container, isFormFocused && styles.containerFocused]}>
      {isFormFocused && (
        <TextInput
          style={styles.input}
          multiline
          placeholder="Qual sua expectativa para o evento?"
          placeholderTextColor={COLORS.GRAY_PRIMARY}
          autoFocus
          editable={!isSending}
        />
      )}
      <Button
        title="Enviar Mensagem"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        onPressOut={handlePressButton}
        disabled={isSending}
        isLoading={isSending}
      />
    </View>
  );
}
