import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.scss";

export function SendMessageForm() {
  const { user, signOut } = useAuth();
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
      <form>
        <label>Mensagem</label>
        <textarea placeholder="Qual sua expectativa para o evento?" />
        <button>Enviar Mensagem</button>
      </form>
    </div>
  );
}
