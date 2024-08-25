import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TaskType, TodoListsType } from '@/type';
import { initialTasks, initialTodolists } from './data.ts';

interface PropsContext {
  todoLists: TodoListsType[];
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
  tasks: TaskType;
  setTasks: Dispatch<SetStateAction<TaskType>>;
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext);

interface PropsType {
  children: ReactNode;
}

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodoListsType[]>(initialTodolists);
  const [tasks, setTasks] = useState<TaskType>(initialTasks);

  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasks, setTasks };
  };
  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>;
};
