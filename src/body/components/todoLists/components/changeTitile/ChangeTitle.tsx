import { useState } from 'react';
import { BaseButton, BaseInput } from '../../../../../shared';
import css from './ChangeTitle.module.css';

interface PropsType {
  title: string;
  saveTitle: (value: string, callBack: () => void) => void;
  disabled?: boolean;
}

export const ChangeTitle = ({ disabled, title, saveTitle }: PropsType) => {
  const [titleIsVisible, setTitleIsVisible] = useState<boolean>(true);
  const [value, setValue] = useState<string>(title);

  const onCloseInput = () => {
    setTitleIsVisible(true);
  };
  const onSave = () => {
    saveTitle(value, onCloseInput);
  };

  return (
    <div>
      {titleIsVisible ? (
        <div className={css.container}>
          <div className={css.title}>{title}</div>
          <BaseButton
            disabled={disabled}
            onClick={() => {
              setTitleIsVisible(false);
            }}
          >
            change Title
          </BaseButton>
        </div>
      ) : (
        <div>
          <BaseInput
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <BaseButton
            onClick={() => {
              setTitleIsVisible(true);
              setValue(title);
            }}
          >
            cansel
          </BaseButton>
          <BaseButton onClick={onSave}>save</BaseButton>
        </div>
      )}
    </div>
  );
};
