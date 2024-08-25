import { TodoLists } from './components';
import { TodolistProvider } from '@/App/provioder';

export const Body = () => {
  return (
    <div>
      {/*<Rating/>*/}
      <TodolistProvider>
        <TodoLists />
      </TodolistProvider>
    </div>
  );
};
