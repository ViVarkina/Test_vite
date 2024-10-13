import { useState } from 'react';

import { BaseButton, BaseInput } from '@/shared';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { addTodolist } from '@/entits';
import { useSelector } from 'react-redux';

export const AddTodoList = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch()
  const {isLoading}=useSelector((state:RootState)=>state.todolistStore)
  const onClear = () => {
    setValue(' ');
  };

  const onClick = () => {
    if (!value){
      return
    }
    dispatch(addTodolist({title:value, description:"", successCallback:onClear}));
  };

  return (
    <>
      <div>
        <BaseInput
          disabled={isLoading}
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
