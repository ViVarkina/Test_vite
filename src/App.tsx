import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Body } from './body/Body.tsx';
import css from './App.module.css';
import clsx from 'clsx';

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

// export default App
