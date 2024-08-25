import css from '../tasksList/TaskList.module.css';
import { ChangeEvent, useContext } from 'react';
import { ChangeTitle } from '../changeTitile/ChangeTitle.tsx';
import { BaseCheckbox } from '@/shared';
import { DeleteTask } from './components';
import { TodolistContext } from '@/App/provioder';
import { Task } from '@/type';

interface PropsType {
  filterTask: Task[];
  todolistId: string;
}

export const TasksList = ({ filterTask, todolistId }: PropsType) => {
  const { setTasksObj: setTasks } = useContext(TodolistContext);
  const onDeleteTask = (id: string) => {
    setTasks((prevState) => {
      const targetTodolist = prevState[todolistId];

      const filterTask = targetTodolist.filter((el) => el.id !== id);

      return { ...prevState, ...{ [todolistId]: filterTask } };
    });
  };
  const onChangeCheckBox = (el: ChangeEvent<HTMLInputElement>, id: string) => {
    setTasks((prevState) => {
      const tasks = prevState[todolistId];
      const resultTasks = tasks.map((task) =>
        task.id === id ? { ...task, isDone: el.target.checked } : task
      );
      const resultObj = {
        [todolistId]: resultTasks,
      };

      return { ...prevState, ...resultObj };
    });
  };

  const onSaveTitleTask = (id: string, value: string, successCallback: () => void) => {
    setTasks((prevState) => {
      const tasks = prevState[todolistId];
      const newTasts = tasks.map((item) => (item.id === id ? { ...item, task: value } : item));
      return { ...prevState, ...{ [todolistId]: newTasts } };
    });
    successCallback();
  };
  return (
    <ul className={css.tasks}>
      {filterTask.map((task) => (
        <li key={task.id} className={task.isDone ? css.isDone : undefined}>
          <div className={css.container}>
            <BaseCheckbox
              checked={task.isDone}
              onChange={(event) => onChangeCheckBox(event, task.id)}
            />

            <ChangeTitle
              title={task.task}
              saveTitle={(value: string, successCallback: () => void) => {
                onSaveTitleTask(task.id, value, successCallback);
              }}
              disabled={task.isDone}
            />
            <DeleteTask disabled={task.isDone} onClick={() => onDeleteTask(task.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
