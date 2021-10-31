import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { api } from "../../services/api";
import imgLogo from "../../assets/logo.png";

import styles from "./styles.module.scss";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const socket = io("http://localhost:4000");
const messageQueue: Message[] = [];

socket.on("new_message", (data: Message) => messageQueue.push(data));

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Message[]>("/messages/last-three");
      setMessages(data);
    })();
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (messageQueue.length > 0) {
        const newMessage = messageQueue.shift() as Message;
        setMessages((prev) => [newMessage, prev[0], prev[1]].filter(Boolean));
      }
    }, 3000);
  });

  return (
    <div className={styles.messageListWrapper}>
      <img src={imgLogo} alt="Do While 2021" />
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.text}</p>
            <div className={styles.messageUser}>
              <div>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
