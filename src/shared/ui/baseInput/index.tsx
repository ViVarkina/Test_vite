import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

export const BaseInput = ({ label, ...props }: Props) => {
  return (
    <div>
      {label && <span>{label}</span>}
      <input {...props} />
    </div>
  );
};
