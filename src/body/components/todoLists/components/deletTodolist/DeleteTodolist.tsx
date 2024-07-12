import { BaseButton, BaseModalWindow, useModal } from '@/shared';
import { TaskType, TodoListsType } from '../../TodoLists.tsx';
import { Dispatch, SetStateAction } from 'react';

interface PropsType {
  setTasks: Dispatch<SetStateAction<TaskType>>;
  todolistId: string;
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
}

export const DeleteTodolist = ({ setTasks, todolistId, setTodolists }: PropsType) => {
  const { isOpen, openModal, closeOpen } = useModal();

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
      <BaseButton onClick={openModal}>Delete</BaseButton>
      {isOpen && (
        <BaseModalWindow isOpen={true} onCansel={closeOpen} onOk={onDeleteTodolist}>
          <div>Вы хотите удалить?</div>
        </BaseModalWindow>
      )}
    </>
  );
};
