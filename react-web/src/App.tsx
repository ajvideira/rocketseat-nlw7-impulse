import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { AuthContextProvider, useAuth } from "./contexts/AuthContext";

export function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
