import { ReactNode } from 'react';
import css from './style.module.css';
import { BaseButton } from '../baseButton/BaseButton.tsx';

interface PropsType {
  children: ReactNode;
  titleOk?: string;
  titleCansel?: string;
  onCansel: () => void;
  onOk: () => void;
}

export const BaseModalWindow = ({
  children,
  titleOk = 'Ок',
  titleCansel = 'Отмена',
  onCansel,
  onOk,
}: PropsType) => {
  return (
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
  );
};
