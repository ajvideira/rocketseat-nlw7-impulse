import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { AuthContextProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <AuthContextProvider>
      <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
      </main>
    </AuthContextProvider>
  );
}
