import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Task, TaskType, TodoListsType } from '@/type';
import { initialTasks, initialTodolists } from './data.ts';
import { v4 as uuisv4 } from 'uuid';

interface PropsContext {
  todoLists: TodoListsType[];
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
  tasksObj: TaskType;
  setTasksObj: Dispatch<SetStateAction<TaskType>>;
  addTodolist: (titleTdl: string, successCallback: () => void) => void;
  onSaveTitleTdl: (todolistId: string, value: string, onSuccesCallback: () => void) => void;
  onSaveTitleTask: (
    todolistId: string,
    taskId: string,
    value: string,
    successCallback: () => void
  ) => void;
  onDeleteTask: (taskId: string, todolistId: string) => void;
  isCompletedTask: (checked: boolean, taskId: string, todolistId: string) => void;
  onDeleteTodolist : (todolistId:string, callback:()=>void)=>void;
  addTask: (value:string, todolistId:string, successCallback:()=>void, errorCallback:()=>void)=>void;
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

  const onSaveTitleTdl = (todolistId: string, value: string, onSuccesCallback: () => void) => {
    setTodolists((prevState) => {
      const newArr = prevState.map((tdl) =>
        tdl.id === todolistId ? { ...tdl, title: value } : tdl
      );
      return newArr;
    });
    onSuccesCallback();
  };
  const onSaveTitleTask = (
    todolistId: string,
    taskId: string,
    value: string,
    successCallback: () => void
  ) => {
    setTasksObj((prevState) => {
      const tasks = prevState[todolistId];
      const newTasts = tasks.map((item) => (item.id === taskId ? { ...item, task: value } : item));
      return { ...prevState, ...{ [todolistId]: newTasts } };
    });
    successCallback();
  };
  const onDeleteTask = (taskId:string,todolistId: string) => {
    setTasksObj((prevState) => {
      const targetTodolist = prevState[todolistId];

      const filterTask = targetTodolist.filter((el) => el.id !== taskId);

      return { ...prevState, ...{ [todolistId]: filterTask } };
    });
  };
  const isCompletedTask = (checked:boolean, taskId: string,todolistId:string) => {
    setTasksObj((prevState) => {
      const tasks = prevState[todolistId];
      const resultTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: checked } : task
      );
      const resultObj = {
        [todolistId]: resultTasks,
      };

      return { ...prevState, ...resultObj };
    });
  };

  const onDeleteTodolist = (todolistId:string, callback:()=>void) => {
    setTasksObj((prevState) => {
      const newObjTask: TaskType = { ...prevState };
      delete newObjTask[todolistId];
      return newObjTask;
    });
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistId);
    });
    callback()
  };
  const addTask = (value:string, todolistId:string, successCallback:()=>void, errorCallback:()=>void) => {
    if (value) {
      setTasksObj((prevState) => {
        const newTask: Task = { id: uuisv4(), task: value, isDone: false, todolistId };
        const tasks = prevState[todolistId];
        const newTasks = [newTask, ...tasks];
        return { ...prevState, ...{ [todolistId]: newTasks } };
      });

      successCallback()
    } else {
      errorCallback()
    }
  }

  const getData = (): PropsContext => {
    return {
      todoLists,
      setTodolists,
      tasksObj,
      setTasksObj,
      addTodolist,
      onSaveTitleTdl,
      onSaveTitleTask,
      onDeleteTask,
      isCompletedTask,
      onDeleteTodolist,
      addTask,
    };
  };
  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>;
};
