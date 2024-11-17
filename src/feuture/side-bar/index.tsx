import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { paths } from '@/shared';

type MenuItem = Required<MenuProps>['items'][number];



export const SideBar=()=>{
  const navigation = useNavigate()
  const {pathname} = useLocation()
  const items: MenuItem[] = [
    {
      key: paths.main(),
      label:"Главная",
      onClick:()=> navigation( paths.main())
    },{
      key: paths.todoLists(),
      label:"Тудулисты",
      onClick:()=> navigation(paths.todoLists())
    },{
      key: paths.forms(),
      label:"Формы",
      onClick:()=> navigation(paths.forms())
    }

  ]

  return <Menu items={items} selectedKeys={[pathname]}/>
}

