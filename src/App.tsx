import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Body } from './body/Body.tsx';
import css from './App.module.css';
import clsx from 'clsx';
import { Provider } from 'react-redux';
import { rootStore } from '@/App/rootStore';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticateRouter } from '@/App/roouting/routeindex.tsx';
import { FormsPage, LoginPage, PageTodolist, PageTodoLists } from '@/pages';
import { paths } from '@/shared';

export const App = () => {
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
      <BrowserRouter>
        <Routes>
          <Route path={paths.login()} element={<LoginPage/>}/>
          <Route element={<AuthenticateRouter/>}>
            <Route path={paths.main()} element={<>MadiPage</>}/>
            <Route path={paths.todoLists()} element={<PageTodoLists/>}/>
            <Route path={paths.todoList()} element={<PageTodolist/>}/>
            <Route path={paths.forms()} element={<FormsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
