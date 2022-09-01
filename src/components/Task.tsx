import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";
import check from "../assets/Check.svg";

interface TaskProps {
  taskText: string;
  onDeleteTask: (taskText: string) => void;
}

const buttonActivateMessage = "Marcar tarefa como concluida";
const buttonDesactivateMessage = "Desmarcar tarefa como concluida";

export function Task({taskText, onDeleteTask,} : TaskProps) {
  const [isComplete, setIsComplete] = useState(false);
  function handleDeleteTask() {
    onDeleteTask(taskText);
  }


  function handleCompleteTask() {
    setIsComplete(state => {
      return state === false ? state = true : state = false;
    })
  }

  return (
    <div
      className={
        isComplete === false
          ? styles.taskContainer
          : styles.taskContainerCompleted
      }
    >
      <div className={styles.taskContent}>
        <div
          onClick={handleCompleteTask}
          className={
            isComplete === false ? styles.buttonBox : styles.buttonBoxCompleted
          }
          title={
            isComplete === false
              ? buttonActivateMessage
              : buttonDesactivateMessage
          }
        >
          <button
            className={
              isComplete === false
                ? styles.doneButton
                : styles.doneButtonCompleted
            }
            type="button"
          ></button>
          <img src={check} alt="" />
        </div>
        <p
          className={
            isComplete === false ? styles.taskText : styles.taskTextCompleted
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


