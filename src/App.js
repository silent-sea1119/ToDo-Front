import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoSubmit from './components/TodoSubmit';
import Day from './components/DayTime';
import TodoContext from './context/TodoContext';
import './App.css';

function App() {
  const [todo, setTodo] = useState({
    title: '',
    type: 'Estudo',
    done: false,
    createAt: Date.now()
  });

  return (
    <TodoContext.Provider value={{todo, setTodo}}>
      <div className="App">
        <div className="Content">
          <Day/>
          <TodoSubmit/>
          <TodoList/>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;