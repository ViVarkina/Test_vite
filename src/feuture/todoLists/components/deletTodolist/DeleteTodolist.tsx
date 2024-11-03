import { BaseButton, BaseModalWindow, useModal } from '@/shared';
import { useAppDispatch } from '@/App/rootStore';
import { deleteTodolist } from '@/entits/todolist/api/deleteTodolist.ts';

interface PropsType {
  todolistId: string;
}

export const DeleteTodolist = ({ todolistId }: PropsType) => {
  const { isOpen, openModal, closeOpen } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <BaseButton onClick={openModal}>Delete</BaseButton>
      {isOpen && (
        <BaseModalWindow
          isOpen={true}
          onCansel={closeOpen}
          onOk={() => dispatch(deleteTodolist({todolistId,successCallback: closeOpen}))}
        >
          <div>Вы хотите удалить?</div>
        </BaseModalWindow>
      )}
    </>
  );
};
