import { Trash } from "phosphor-react";
import { useState, ChangeEvent } from "react";

import styles from "./Task.module.css";
import check from "../assets/Check.svg";

interface TaskProps {
  taskText: string;
  onDeleteTask: (taskText: string) => void;
}

const buttonActivateMessage = "Marcar tarefa como concluida";
const buttonDesactivateMessage = "Desmarcar tarefa como concluida";

export function Task({ taskText, onDeleteTask}: TaskProps) {
  const [completedState, setCompletedState] = useState(false);

  function handleCompleteTask() {
    return setCompletedState(complete => {
      return complete === true ? (complete = false) : (complete = true);
    });
  }

  function handleDeleteTask() {
    onDeleteTask(taskText);
  }

  return (
    <div
      className={
        completedState === false
          ? styles.taskContainer
          : styles.taskContainerCompleted
      }
    >
      <div className={styles.taskContent}>
        <div
          onClick={handleCompleteTask}
          className={
            completedState === false
              ? styles.buttonBox
              : styles.buttonBoxCompleted
          }
          title={
            completedState === false
              ? buttonActivateMessage
              : buttonDesactivateMessage
          }
        >
          <button
            className={
              completedState === false
                ? styles.doneButton
                : styles.doneButtonCompleted
            }
            type="button"
          ></button>
          <img src={check} alt="" />
        </div>
        <p
          className={
            completedState === false
              ? styles.taskText
              : styles.taskTextCompleted
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

