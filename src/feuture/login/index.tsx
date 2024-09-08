import { BaseButton, BaseInput } from '@/shared';
import css from './index.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '@/App/provioder/authProvider';

export const Login = () => {
  const { singIn } = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onClick = () => {
    if (login && password) {
      singIn(login, password);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <BaseInput label={'Логин'} value={login} onChange={(e) => setLogin(e.target.value)} />
        <BaseInput
          label={'Пароль'}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BaseButton onClick={onClick}>Вход</BaseButton>
      </div>
    </div>
  );
};
