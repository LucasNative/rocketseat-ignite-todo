import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

import styles from "./CreateTask.module.css";

interface CreateProps {
  onCreateTask: (task: string) => void;
}

export function CreateTask({ onCreateTask }:CreateProps) {

  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Adicione uma nova tarefa!");
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <div className={styles.createTaskContainer}>
      <form onSubmit={handleCreateTask} className={styles.createTaskForm}>
        <textarea
          name="input"
          placeholder="Adicione uma nova tarefa"
          className={styles.inputTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={newTaskText}
          required
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
