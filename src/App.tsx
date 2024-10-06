import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Body } from './body/Body.tsx';
import css from './App.module.css';
import clsx from 'clsx';
import { Login } from '@/feuture/login';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { RootState, rootStore, useAppDispatch } from '@/App/rootStore';
import { autMe } from '@/entits';

export const App = () => {
  const { isAuthenticated,isInitialized } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(autMe());

    }
  }, []);
  if (!isInitialized){
    return <>Loading...</>
  }
  if (!isAuthenticated ) {
    return <Login />;
  }

  return (
    <div className={clsx(css.container, css.border, { [css.borderRadius]: true })}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.body}>
        <Body />
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};
export const WrapperApp = () => {
  return (

      <Provider store={rootStore}>
        <App />
      </Provider>
  );
};

