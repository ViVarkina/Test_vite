import css from '../tasksList/TaskList.module.css';
import { useContext } from 'react';
import { ChangeTitle } from '../changeTitile/ChangeTitle.tsx';
import { BaseCheckbox } from '@/shared';
import { DeleteTask } from './components';
import { TodolistContext } from '@/App/provioder';
import { TaskTDO } from '@/entits';

interface PropsType {
  filterTask: TaskTDO[];
  todolistId: string;
}

export const TasksList = ({ filterTask, todolistId }: PropsType) => {
  const { onSaveTitleTask, onDeleteTask, isCompletedTask } = useContext(TodolistContext);

  return (
    <ul className={css.tasks}>
      {filterTask?.map((task) => (
        <li key={task.id} className={task.isCompleted ? css.isDone : undefined}>
          <div className={css.container}>
            <BaseCheckbox
              checked={task.isCompleted}
              onChange={(event) => isCompletedTask(event.target.checked, task.id, todolistId)}
            />

            <ChangeTitle
              title={task.title}
              saveTitle={(value: string, successCallback: () => void) => {
                onSaveTitleTask(todolistId, task.id, value, successCallback);
              }}
              disabled={task.isCompleted}
            />
            <DeleteTask
              disabled={task.isCompleted}
              onClick={() => onDeleteTask(task.id, todolistId)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
