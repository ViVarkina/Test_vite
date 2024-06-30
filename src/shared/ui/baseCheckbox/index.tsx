import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import css from './style.module.css';

interface PropsType
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const BaseCheckbox = ({ ...props }: PropsType) => {
  return (
    <label className={css.container}>
      <input type={'checkbox'} {...props} className={css.checkBox} />
      <span className={css.checkMark} />
    </label>
  );
};
