import { useEffect, useState } from "react";

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

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Message[]>("/messages/last-three");
      setMessages(data);
    })();
  }, []);

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
