import React, {useState} from 'react';
import './App.css';

type TodoObject = {
  value: string
}

const App: React.FC = () => {
  const [todo, updateTodo] = useState<Array<TodoObject>>([])

  function addTodo() {
    updateTodo([...todo, {value: 'test'}])
  }
  return (
    <main className="App">
      <div>
        {!todo.length ? (<p>Nothing to do here</p>) :
          todo.map(el => <li key={el.value}>{el.value}</li>)
        }
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </main>
  );
}

export default App;
