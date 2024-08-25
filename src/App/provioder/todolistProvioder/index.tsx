import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TaskType, TodoListsType } from '@/type';
import { initialTasks, initialTodolists } from './data.ts';
import { v4 as uuisv4 } from 'uuid';

interface PropsContext {
  todoLists: TodoListsType[];
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
  tasksObj: TaskType;
  setTasksObj: Dispatch<SetStateAction<TaskType>>;
  addTodolist: (titleTdl: string, successCallback: () => void) => void;
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext);

interface PropsType {
  children: ReactNode;
}

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodoListsType[]>(initialTodolists);
  const [tasksObj, setTasksObj] = useState<TaskType>(initialTasks);

  const addTodolist = (titleTdl: string, successCallback: () => void) => {
    const todoListId = uuisv4();

    const newTodoList: TodoListsType = {
      id: todoListId,
      title: titleTdl,
    };

    const newTask = {
      [todoListId]: [],
    };
    setTodolists((prevState) => [newTodoList, ...prevState]);
    setTasksObj((prevState) => {
      return { ...prevState, ...newTask };
    });
    successCallback();
    // setValue('');
  };
  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasksObj, setTasksObj, addTodolist };
  };
  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>;
};
