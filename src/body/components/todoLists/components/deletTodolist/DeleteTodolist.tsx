import { BaseButton, BaseModalWindow } from '../../../../../shared';
import { TaskType, TodoListsType } from '../../TodoLists.tsx';
import { Dispatch, SetStateAction, useState } from 'react';

interface PropsType {
  setTasks: Dispatch<SetStateAction<TaskType>>;
  todolistId: string;
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
}

export const DeleteTodolist = ({ setTasks, todolistId, setTodolists }: PropsType) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onDeleteTodolist = () => {
    setTasks((prevState) => {
      const newObjTask: TaskType = { ...prevState };
      delete newObjTask[todolistId];
      return newObjTask;
    });
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistId);
    });
  };

  return (
    <>
      <BaseButton onClick={() => setOpen(true)}>Delete</BaseButton>
      {isOpen && (
        <BaseModalWindow onCansel={() => setOpen(false)} onOk={onDeleteTodolist}>
          <div>Вы хотите удалить?</div>
        </BaseModalWindow>
      )}
    </>
  );
};
