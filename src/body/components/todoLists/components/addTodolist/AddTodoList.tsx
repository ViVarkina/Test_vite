import { useContext, useState } from 'react';

import { BaseButton, BaseInput } from '@/shared';
import { TodolistContext } from '@/App/provioder';

export const AddTodoList = () => {
  const [value, setValue] = useState<string>('');
  const { addTodolist } = useContext(TodolistContext);
  const onClear = () => {
    setValue(' ');
  };

  const onClick = () => {
    addTodolist(value, onClear);
  };

  return (
    <>
      <div>
        <BaseInput
          placeholder={'Add new todo'}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <BaseButton onClick={onClick}>+</BaseButton>
      </div>
    </>
  );
};
