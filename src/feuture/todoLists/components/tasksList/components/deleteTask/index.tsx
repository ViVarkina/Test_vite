import { BaseButton, BaseModalWindow, useModal } from '@/shared';

interface PropsType {
  disabled: boolean;
  onClick: () => void;
}

export const DeleteTask = ({ disabled, onClick }: PropsType) => {
  const { isOpen, openModal, closeOpen } = useModal();
  return (
    <>
      <BaseButton onClick={openModal} disabled={disabled}>
        удалить
      </BaseButton>
      {isOpen && (
        <BaseModalWindow isOpen={true} onCansel={closeOpen} onOk={onClick}>
          <div>Вы точно хотите удалить?</div>
        </BaseModalWindow>
      )}
    </>
  );
};
