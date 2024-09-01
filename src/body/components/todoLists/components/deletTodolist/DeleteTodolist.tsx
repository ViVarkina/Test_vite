import { BaseButton, BaseModalWindow, useModal } from '@/shared';
import { useContext } from 'react';
import { TodolistContext } from '@/App/provioder';

interface PropsType {
  todolistId: string;
}

export const DeleteTodolist = ({todolistId}: PropsType) => {
  const { isOpen, openModal, closeOpen } = useModal();
  const {onDeleteTodolist} = useContext(TodolistContext);



  return (
    <>
      <BaseButton onClick={openModal}>Delete</BaseButton>
      {isOpen && (
        <BaseModalWindow isOpen={true} onCansel={closeOpen} onOk={()=>onDeleteTodolist(todolistId, closeOpen)}>
          <div>Вы хотите удалить?</div>
        </BaseModalWindow>
      )}
    </>
  );
};
