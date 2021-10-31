import { FormEvent, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";

import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

export function SendMessageForm() {
  const { user, signOut } = useAuth();

  const [message, setMessage] = useState("");

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    await api.post("/messages", { text: message });

    setMessage("");
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut}>
        <VscSignOut size={32} />
      </button>
      <header>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong>{user?.name}</strong>
        <div className={styles.userLogin}>
          <VscGithubInverted size={16} />
          <span>{user?.login}</span>
        </div>
      </header>
      <form onSubmit={handleSendMessage}>
        <label>Mensagem</label>
        <textarea
          placeholder="Qual sua expectativa para o evento?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}
