import React from "react";

import { ScrollView, View } from "react-native";
import { Message } from "../../models/message";
import { MessageItem } from "../MessageItem";

import { styles } from "./styles";

export function MessageList() {
  const message: Message = {
    id: "1",
    text: "Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥",
    user: {
      name: "Jonathan Alba",
      avatar_url: "https://github.com/ajvideira.png",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <MessageItem data={message} />
      <MessageItem data={message} />
      <MessageItem data={message} />
      <MessageItem data={message} />
      <MessageItem data={message} />
    </ScrollView>
  );
}
