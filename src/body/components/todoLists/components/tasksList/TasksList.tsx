import css from '../tasksList/TaskList.module.css';
import { ChangeTitle } from '../changeTitile/ChangeTitle.tsx';
import { BaseCheckbox } from '@/shared';
import { DeleteTask } from './components';
import { deleteTask, TaskTDO } from '@/entits';
import { useAppDispatch } from '@/App/rootStore';
import { updateTask } from '@/entits/task/api/updateTask.ts';

interface PropsType {
  filterTask: TaskTDO[];
}

export const TasksList = ({ filterTask }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <ul className={css.tasks}>
      {filterTask?.map((task) => (
        <li key={task.id} className={task.isCompleted ? css.isDone : undefined}>
          <div className={css.container}>
            <BaseCheckbox
              checked={task.isCompleted}
              onChange={(event) => {
                // isCompletedTask(event.target.checked, task.id, todolistId);
                dispatch(updateTask({ isCompleted: event.target.checked, taskId: task.id }));
              }}
            />
            <ChangeTitle
              title={task.title}
              saveTitle={(value: string, successCallback: () => void) => {
                // onSaveTitleTask(todolistId, task.id, value, successCallback);
                dispatch(updateTask({ title: value, taskId: task.id, successCallback }));
              }}
              disabled={task.isCompleted}
            />
            <DeleteTask
              disabled={task.isCompleted}
              onClick={() => dispatch(deleteTask({ id: task.id }))}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
