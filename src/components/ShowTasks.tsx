import { Task } from "./Task";
import { Empty } from "./Empty";
import { CreateTask } from "./CreateTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./ShowTasks.module.css";

interface TaskProps {
  taskText: string;
  isCompleted: boolean;
}

const task: TaskProps = {
  taskText: "",
  isCompleted: false
};

export function ShowTasks() {
  const [tasks, setTasks] = useState([
    { taskText: "primeira", isCompleted: false, id: "1" }
  ]);
  const [numbersOfTasksCreated, setNumbersOfTasksCreated] = useState(0);
  const [numberOfTasksConclued, setNumberOfTasksConclued] = useState(0);

  const tasksConclued = tasks.filter((task) => {
    return task.isCompleted === true
  }).length;


  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.taskText !== taskToDelete;
    });
    console.log(tasksWithoutDeletedOne);
    setTasks(tasksWithoutDeletedOne);
    setNumbersOfTasksCreated((taskCreated) => {
      return taskCreated - 1;
    });
  }

  function createTask(taskText: string) {
    const id = uuidv4();
    const isCompleted = false;
    if (numbersOfTasksCreated === 0) {
      setTasks([{ taskText, isCompleted, id }]);
    } else {
      setTasks([{ taskText, isCompleted, id }, ...tasks]);
    }
    setNumbersOfTasksCreated((taskCreated) => {
      return taskCreated + 1;
    });
  }

  return (
    <div className={styles.showTaskContainer}>
      <CreateTask onCreateTask={createTask} />
      <div className={styles.showStatus}>
        <p className={styles.numberOfTasksCreated}>
          Tarefas criadas <span>{numbersOfTasksCreated}</span>
        </p>
        <p className={styles.numberOfTasksConcluded}>
          Concluídas{" "}
          <span>
              {numbersOfTasksCreated === 0 ? numberOfTasksConclued : `${numberOfTasksConclued} de ${numbersOfTasksCreated}`}
          </span>
        </p>
      </div>
      {numbersOfTasksCreated === 0 ? <Empty /> : ""}
      {tasks.map((task) => {
        if (task.id == "1") {
          return "";
        } else {
          return (
            <Task
              key={uuidv4()}
              onDeleteTask={deleteTask}
              taskText={task.taskText}
            />
          );
        }
      })}
    </div>
  );
}
