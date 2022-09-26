import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskInfo } from './components/TaskInfo';
import { TaskListEmpty } from './components/TaskListEmpty'
import { Task } from './components/Task'

import styles from './App.module.css';
import './global.css';

interface originalTaskList {
  id: string;
  content: string;
  isComplete: boolean;
}

const originalTaskList: originalTaskList[] = [
  {
    id: uuidv4(),
    content: 'Terminar o desafio',
    isComplete: true,
  },
  {
    id: uuidv4(),
    content: 'Estudar TypeScript',
    isComplete: false,
  },
]

export function App() {
  const [tasks, setTasks] = useState(originalTaskList)

  function createNewTask(content: string){
    const newTask = {
      id:uuidv4(),
      content,
      isComplete: false,
    }
    setTasks([newTask, ...tasks]);
  }

  function deleteTask(taskToDelete:string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete);
    setTasks(tasksWithoutDeletedOne);
  }

  function changeTaskState(taskToChangeState:string) {
    const newTasksList = tasks.map(task => {
      if(task.id == taskToChangeState)
        task.isComplete = !task.isComplete
      return task
    });
    setTasks([...newTasksList]);
  }

  const tasksCount = tasks.length;

  const tasksComplete = tasks.reduce((acc, task) => {
    if (task.isComplete) return acc + 1;
    return acc;
  }, 0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput onCreateTask={createNewTask} />
          <main className={styles.main}>
            <TaskInfo tasksCount={tasksCount} tasksComplete={tasksComplete} />
            <div className={styles.taskList}>
              { tasks.length ? 
                tasks.map(task => <Task key={task.id} onChangeTaskState={changeTaskState} onDelete={deleteTask} {...task} />) 
                : <TaskListEmpty />
              }
            </div>
          </main>
      </div>
    </div>
  )
}
