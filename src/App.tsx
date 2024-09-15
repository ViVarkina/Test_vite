import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Body } from './body/Body.tsx';
import css from './App.module.css';
import clsx from 'clsx';
import { Login } from '@/feuture/login';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from '@/App/provioder';
import { Provider, useSelector } from 'react-redux';
import { RootState, rootStore } from '@/App/rootStore';

export const App = () => {
  const {name}=useSelector((state:RootState)=>state.userStore)
  console.log(name);
  const { isAuthenticated, authMe } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      authMe();
    }
  });
  if (!isAuthenticated) {
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
    <AuthProvider>
      <Provider store={rootStore}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

// export default App
