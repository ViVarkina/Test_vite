import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Task, TaskRespons, TaskType, TodoListsType } from '@/type';
import { ACCESS_TOKEN, BASE_URL } from '@/shared';

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
  onDeleteTodolist: (todolistId: string, callback: () => void) => void;
  addTask: (
    value: string,
    todolistId: string,
    successCallback: () => void,
    errorCallback: () => void
  ) => void;
  getMyTodolist: () => void;
  getMyTasks: () => void;
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext);

interface PropsType {
  children: ReactNode;
}

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodoListsType[]>([]);
  const [tasksObj, setTasksObj] = useState<TaskType>({});

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
  const onDeleteTask = (taskId: string, todolistId: string) => {
    setTasksObj((prevState) => {
      const targetTodolist = prevState[todolistId];

      const filterTask = targetTodolist.filter((el) => el.id !== taskId);

      return { ...prevState, ...{ [todolistId]: filterTask } };
    });
  };
  const isCompletedTask = (checked: boolean, taskId: string, todolistId: string) => {
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

  const onDeleteTodolist = (todolistId: string, callback: () => void) => {
    setTasksObj((prevState) => {
      const newObjTask: TaskType = { ...prevState };
      delete newObjTask[todolistId];
      return newObjTask;
    });
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistId);
    });
    callback();
  };

  const getMyTodolist = async () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      const result = await fetch(`${BASE_URL}/todolist`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
      });
      if (result.ok) {
        const data: TodoListsType[] = await result.json();
        setTodolists(data);
      } else {
        console.error('Autherr');
      }
    }
  };
  const getMyTasks = async () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      const result = await fetch(`${BASE_URL}/task`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
      });
      if (result.ok) {
        const data: TaskRespons[] = await result.json();
        const convertTask = (task: TaskRespons[]): Task[] => {
          return task.map(
            (task): Task => ({
              id: task.id,
              task: task.title,
              isDone: task.is_completed,
              todolistId: task.todolist_id,
              createdAt: task.created_at,
              description: task.description,
              dueDate: task.due_date,
            })
          );
        };
        const taskObj: TaskType = {};

        convertTask(data).forEach((el) => {
          if (taskObj[el.todolistId]) {
            taskObj[el.todolistId] = [...taskObj[el.todolistId], el];
          } else {
            taskObj[el.todolistId] = [el];
          }
        });
        console.log(data);
        console.log(taskObj);
        setTasksObj(taskObj);
      } else {
        console.error('Autherr');
      }
    }
  };
  const addTask = async (
    value: string,
    todolistId: string,
    successCallback: () => void,
    errorCallback: () => void
  ) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      const result = await fetch(`${BASE_URL}/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
          description: '',
          todolist_id: todolistId,
          title: value,
        }),
      });
      if (result.ok) {
        successCallback();
        getMyTasks();
      } else {
        console.error('Autherr');
        errorCallback();
      }
    }
  };
  const addTodolist = async (titleTdl: string, successCallback: () => void) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      const result = await fetch(`${BASE_URL}/todolist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
          title: titleTdl,
          description: '',
        }),
      });
      if (result.ok) {
        getMyTodolist();
        successCallback();
      } else {
        console.error('Autherr');
      }
    }
  };

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
      getMyTodolist,
      getMyTasks,
    };
  };
  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>;
};
