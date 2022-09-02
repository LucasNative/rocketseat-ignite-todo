import { Trash } from "phosphor-react";

import styles from "./Task.module.css";
import check from "../assets/Check.svg";

interface TaskProps {
  id: string;
  taskState: boolean;
  taskText: string;
  onDeleteTask: (taskText: string) => void;
  onToggleTask: (taskText: string) => void;
}

const buttonActivateMessage = "Marcar tarefa como concluida";
const buttonDesactivateMessage = "Desmarcar tarefa como concluida";

export function Task({
  id,
  taskState,
  taskText,
  onDeleteTask,
  onToggleTask
}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onToggleTask(id);
  }

  return (
    <div
      className={
        taskState === false
          ? styles.taskContainer
          : styles.taskContainerCompleted
      }
    >
      <div className={styles.taskContent}>
        <div
          onClick={handleCompleteTask}
          className={
            taskState === false ? styles.buttonBox : styles.buttonBoxCompleted
          }
          title={
            taskState === false
              ? buttonActivateMessage
              : buttonDesactivateMessage
          }
        >
          <button
            className={
              taskState === false
                ? styles.doneButton
                : styles.doneButtonCompleted
            }
            type="button"
          ></button>
          <img src={check} alt="" />
        </div>
        <p
          className={
            taskState === false ? styles.taskText : styles.taskTextCompleted
          }
        >
          {taskText}
        </p>
        <button
          onClick={handleDeleteTask}
          className={styles.deleteButton}
          title="Deletar tarefa"
        >
          <Trash size={22} />
        </button>
      </div>
    </div>
  );
}


