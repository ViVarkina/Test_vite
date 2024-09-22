import { BaseButton } from '@/shared';
import { useAppDispatch } from '@/App/rootStore';
import { logOut } from '@/entits';

export const Header = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={'header'}>
      <BaseButton onClick={onClick}>Выход</BaseButton>
    </div>
  );
};
