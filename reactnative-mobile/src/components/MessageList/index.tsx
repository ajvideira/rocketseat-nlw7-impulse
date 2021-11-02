import React from "react";

import { ScrollView, View } from "react-native";
import { Message } from "../../models/message";
import { MessageItem } from "../MessageItem";

import { styles } from "./styles";

export function MessageList() {
  const message: Message = {
    id: "1",
    text: "Teste",
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
      <MessageItem
        data={{
          id: "1",
          text: "Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥",
          user: {
            name: "Jonathan Alba",
            avatar_url: "https://github.com/ajvideira.png",
          },
        }}
      />
      <MessageItem
        data={{
          id: "1",
          text: "Esse vai ser simplesmente fantástico! Bora aprender tudo em relação a montagem de APIs GraphQL. Sem contar com as palestras e painéis.",
          user: {
            name: "Jonathan Alba",
            avatar_url: "https://github.com/ajvideira.png",
          },
        }}
      />
      <MessageItem
        data={{
          id: "1",
          text: "Sem dúvida as palestras vão ser úteis para a minha carreira e para a de muitos 😍 #gorocket",
          user: {
            name: "Jonathan Alba",
            avatar_url: "https://github.com/ajvideira.png",
          },
        }}
      />
    </ScrollView>
  );
}
