import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { useEffect } from 'react';
import { autMe } from '@/entits';
import { Navigate, useOutlet } from 'react-router-dom';
import { BaseLeaut } from '@/shared';
import { Header } from '@/feuture';
import { SideBar } from '@/feuture/side-bar';

export const AuthenticateRouter=()=>{
  const { isAuthenticated, isInitialized } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();
  const outlet = useOutlet()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(autMe());
    }
  }, []);
  if (!isInitialized) {
    return <>Loading...</>;
  }
  if (!isAuthenticated) {
   return <Navigate to={'/login'}/>
  }

  // return <Navigate to={'/todolist'}/>
  return <BaseLeaut outlet={outlet} header={<Header/>} sideBar={<SideBar/>}/>
}
