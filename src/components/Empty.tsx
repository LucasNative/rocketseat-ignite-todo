import clipboard from "../assets/Clipboard.svg";
import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} alt="Imagem de uma prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
