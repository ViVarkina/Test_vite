import { useAppDispatch } from '@/App/rootStore';
import { logOut } from '@/entits';
import { BaseButton } from '@/shared';
import { Flex } from 'antd';

export const Header=()=>{
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return (
    <Flex style={{width:'100%'}} justify={'end'} align={'center'}>
      <BaseButton onClick={onClick}>Выход</BaseButton>
    </Flex>
  );
}