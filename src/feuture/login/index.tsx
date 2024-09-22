import { BaseButton, BaseInput } from '@/shared';
import css from './index.module.css';
import { useState } from 'react';
import { sigIn } from '@/entits';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { useSelector } from 'react-redux';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: RootState) => state.userStore);

  const onClick = () => {
    if (login && password) {
      dispatch(sigIn({ password, username: login }));
    }
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <BaseInput
          label={'Логин'}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          disabled={isLoading}
        />
        <BaseInput
          disabled={isLoading}
          label={'Пароль'}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BaseButton onClick={onClick} disabled={isLoading}>
          Вход
        </BaseButton>
      </div>
    </div>
  );
};
