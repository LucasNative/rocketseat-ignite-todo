import { Task } from "./Task";
import { Empty } from "./Empty";
import { CreateTask } from "./CreateTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./ShowTasks.module.css";

export function ShowTasks() {
  const [tasks, setTasks] = useState([""]);

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }


  function createTask(taskToCreate: string) {
      setTasks([...tasks, taskToCreate]);
  }

  const numbersOfTasksCreated = tasks.length - 1;

  return (
    <div className={styles.showTaskContainer}>
      <CreateTask onCreateTask={createTask} />
      <div className={styles.showStatus}>
        <p className={styles.numberOfTasksCreated}>
          Tarefas criadas <span>{numbersOfTasksCreated}</span>
        </p>
        <p className={styles.numberOfTasksConcluded}>
          Concluídas <span>1 de 3</span>
        </p>
      </div>
      {tasks.map((task) => {
        return task === "" ? (
          <Empty key={uuidv4()} />
        ) : (
          <Task
            key={uuidv4()}
            onDeleteTask={deleteTask}
            taskText={task}
          />
        );
      })}
    </div>
  );
}

