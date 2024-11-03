import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];



export const SideBar=()=>{
  const navigation = useNavigate()
  const items: MenuItem[] = [
    {
      key: 'main',
      label:"Главная",
      onClick:()=> navigation('/')
    },{
      key: 'sub1',
      label:"Тудулисты",
      onClick:()=> navigation('/todolist')
    }

  ]

  return <Menu items={items}/>
}