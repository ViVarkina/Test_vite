import { BaseButton, BaseInput, path } from '@/shared';
import css from './index.module.css';
import { useEffect, useState } from 'react';
import { autMe, sigIn } from '@/entits';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading, isAuthenticated, isInitialized } = useSelector((state: RootState) => state.userStore);

  const onClick = () => {
    if (login && password) {
      dispatch(sigIn({ password, username: login }));
    }
  };

  useEffect(() => {
    if (!isAuthenticated){
      dispatch(autMe())
    }
  }, []);

  if (!isInitialized){
    return <>Loading...</>
  }

  if (isAuthenticated){
    return <Navigate to={path.main()}/>
  }

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
