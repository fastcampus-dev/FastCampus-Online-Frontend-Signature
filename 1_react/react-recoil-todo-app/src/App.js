import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { filteredTodoListState } from './todoAtoms';
import { currentUserNameQuery } from './userAtoms';

function App() {

  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="App">
      <React.Suspense fallback={<div>...loading</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>
}