import React, { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
import { api } from "../../services/api";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  async function handlePressButton() {
    if (isFormFocused) {
      setIsSending(true);
      if (message.trim().length > 0) {
        await api.post("/messages", { text: message.trim() });
        Alert.alert("Mensagem enviada!");
        setMessage("");
      } else {
        Alert.alert("Erro", "A mensagem não pode ficar em branco.");
      }
      setIsSending(false);
    } else {
      setIsFormFocused(true);
    }
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, isFormFocused && styles.containerFocused]}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      {isFormFocused && (
        <TextInput
          style={styles.input}
          multiline
          placeholder="Qual sua expectativa para o evento?"
          placeholderTextColor={COLORS.GRAY_PRIMARY}
          autoFocus
          editable={!isSending}
          keyboardAppearance="dark"
          maxLength={140}
          value={message}
          onChangeText={setMessage}
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
    </KeyboardAvoidingView>
  );
}
