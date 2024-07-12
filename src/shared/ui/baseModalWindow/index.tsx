import { ReactNode } from 'react';
import css from './style.module.css';
import { BaseButton } from '@/shared';
import { Portal } from '../../hoc';

interface PropsType {
  children: ReactNode;
  titleOk?: string;
  titleCansel?: string;
  onCansel: () => void;
  onOk: () => void;
  isOpen: boolean;
}

export const BaseModalWindow = ({
  children,
  titleOk = 'Ок',
  titleCansel = 'Отмена',
  onCansel,
  onOk,
  isOpen,
}: PropsType) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <div className={css.overlay}>
        <div className={css.container}>
          <div className={css.close} onClick={onCansel}>
            x
          </div>
          <div className={css.body}>{children}</div>
          <div className={css.btnContainer}>
            <BaseButton variant={'outline'} onClick={onCansel}>
              {titleCansel}
            </BaseButton>
            <BaseButton variant={'primary'} onClick={onOk}>
              {titleOk}
            </BaseButton>
          </div>
        </div>
      </div>
    </Portal>
  );
};
