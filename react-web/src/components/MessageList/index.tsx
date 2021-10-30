import styles from "./styles.module.scss";

import imgLogo from "../../assets/logo.png";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={imgLogo} alt="Do While 2021" />
      <ul>
        <li>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div>
              <img
                src="https://github.com/ajvideira.png"
                alt="Jonathan Videira"
              />
            </div>
            <span>Jonathan Videira</span>
          </div>
        </li>
        <li>
          <p>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/ajvideira.png"
                alt="Jonathan Videira"
              />
            </div>
            <span>Jonathan Videira</span>
          </div>
        </li>
        <li>
          <p>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/ajvideira.png"
                alt="Jonathan Videira"
              />
            </div>
            <span>Jonathan Videira</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
