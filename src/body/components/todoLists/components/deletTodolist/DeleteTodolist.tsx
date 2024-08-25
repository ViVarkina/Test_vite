import { BaseButton, BaseModalWindow, useModal } from '@/shared';
import { useContext } from 'react';
import { TaskType } from '@/type';
import { TodolistContext } from '@/App/provioder';

interface PropsType {
  todolistId: string;
}

export const DeleteTodolist = ({ todolistId }: PropsType) => {
  const { isOpen, openModal, closeOpen } = useModal();
  const { setTodolists, setTasksObj: setTasks } = useContext(TodolistContext);

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
