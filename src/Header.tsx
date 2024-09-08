import { BaseButton } from '@/shared';
import { useContext } from 'react';
import { AuthContext } from '@/App/provioder/authProvider';

export const Header = () => {
  const { logAuth } = useContext(AuthContext);
  return (
    <div className={'header'}>
      <BaseButton onClick={logAuth}>Выход</BaseButton>
    </div>
  );
};
