import css from '../tasksList/TaskList.module.css';
import { useContext } from 'react';
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
  const { onSaveTitleTask, onDeleteTask, isCompletedTask} = useContext(TodolistContext);

  return (
    <ul className={css.tasks}>
      {filterTask.map((task) => (
        <li key={task.id} className={task.isDone ? css.isDone : undefined}>
          <div className={css.container}>
            <BaseCheckbox
              checked={task.isDone}
              onChange={(event) => isCompletedTask(event.target.checked, task.id, todolistId)}
            />

            <ChangeTitle
              title={task.task}
              saveTitle={(value: string, successCallback: () => void) => {
                onSaveTitleTask(todolistId, task.id, value, successCallback);
              }}
              disabled={task.isDone}
            />
            <DeleteTask disabled={task.isDone} onClick={() => onDeleteTask(task.id, todolistId)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
