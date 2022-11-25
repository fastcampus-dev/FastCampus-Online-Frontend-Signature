import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useEffect } from 'react';
import { useUserStore } from './store/useUserStore';

function App() {

  const { fetch, user } = useUserStore();
  console.log('user', user);
  useEffect(() => {
    fetch(1);
  }, [fetch])

  return (
    <div className="App">
      <header className='App-header'>
        <Counter />
        <TodoList />
        <p>
          {user.name}
        </p>
        <p>
          {user.phone}
        </p>
      </header>
    </div>
  );
}

export default App;
