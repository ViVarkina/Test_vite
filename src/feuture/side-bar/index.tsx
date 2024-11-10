import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { path } from '@/shared';

type MenuItem = Required<MenuProps>['items'][number];



export const SideBar=()=>{
  const navigation = useNavigate()
  const {pathname} = useLocation()
  const items: MenuItem[] = [
    {
      key: path.main(),
      label:"Главная",
      onClick:()=> navigation( path.main())
    },{
      key: path.todolist(),
      label:"Тудулисты",
      onClick:()=> navigation(path.todolist())
    },{
      key: path.forms(),
      label:"Формы",
      onClick:()=> navigation(path.forms())
    }

  ]

  return <Menu items={items} selectedKeys={[pathname]}/>
}

