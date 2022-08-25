import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

import styles from "./CreateTask.module.css";

interface CreateProps {
  onCreateTask: (task: string) => void;
}

export function CreateTask({ onCreateTask }:CreateProps) {

  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Preencha com uma nova tarefa!");
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(newTask);
    setNewTask("");
  }

  return (
    <div className={styles.createTaskContainer}>
      <form onSubmit={handleCreateTask} className={styles.createTaskForm}>
        <textarea
          name="input"
          placeholder='Crie uma nova tarefa'
          className={styles.inputTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={newTask}
        />
        <button className={styles.createTaskButton}>
          <p>Criar</p>
          <span>
            <PlusCircle size={20} weight="bold" />
          </span>
        </button>
      </form>
    </div>
  );
}
