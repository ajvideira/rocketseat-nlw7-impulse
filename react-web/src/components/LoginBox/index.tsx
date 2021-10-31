import { VscGithubInverted } from "react-icons/vsc";
import { useAuth } from "../../contexts/AuthContext";

import imgSeal from "../../assets/seal.svg";

import styles from "./styles.module.scss";

export function LoginBox() {
  const { signInUrl } = useAuth();

  return (
    <div className={styles.loginBoxWrapper}>
      <img src={imgSeal} alt="Rocketseat" />
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} /> Entrar com Github
      </a>
    </div>
  );
}
