import React, { useEffect, useState } from "react";

import { ScrollView, View } from "react-native";
import { Message } from "../../models/message";
import { api } from "../../services/api";
import { MessageItem } from "../MessageItem";

import { styles } from "./styles";

import { io } from "socket.io-client";

const messageQueue: Message[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage: Message) => {
  messageQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const { data: newMessages } = await api.get<Message[]>(
        "/messages/last-three"
      );
      setMessages(newMessages);
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        const newMessage = messageQueue.shift() as Message;
        setMessages((prev) => [newMessage, prev[0], prev[1]].filter(Boolean));
      }
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {messages.map((message) => (
        <MessageItem key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
