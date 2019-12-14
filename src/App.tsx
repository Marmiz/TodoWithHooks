import React, { useState, useContext, useEffect } from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import ControlledInput from "./components/ControlledInput";

import { ThemeContext, getTheme } from "./ThemeContext";
import "./App.css";

type TodoObject = {
  value: string;
  id: number;
};

const App: React.FC = () => {
  const [todoVal, changeTodoVal] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [todoList, addTodo] = useUpdateTodo(todoVal, changeTodoVal);

  function onChangeTodoVal(newVal: string | null) {
    if (!newVal) {
      return changeTodoVal("");
    }
    changeTodoVal(newVal);
  }

  const themeObj = getTheme(theme);
  return (
    <main className="card" style={{ background: themeObj.cardBg }}>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Theme</button>
      <Row>
        <Col size={7}>
          <ControlledInput
            value={todoVal}
            onChange={onChangeTodoVal}
            placeholder="What are you up to, today?"
          />
        </Col>
        <Col size={3}>
          <button className="button" onClick={addTodo}>
            Add Todo
          </button>
        </Col>
      </Row>
      {todoList.length > 0 &&
        todoList.map(td => <Row key={td.id}>{td.value}</Row>)}
    </main>
  );
};


function useUpdateTodo(inputVal: string, updateInputVal: (val: string) => void) {
  const [todoList, updateTodoList] = useState<Array<TodoObject>>([]);
  const [id, updateId] = useUUID(0);

  useEffect(() => {
    document.addEventListener('keydown', downHandler);

    return () => {
      document.removeEventListener('keydown', downHandler)
    }
  });

  function downHandler(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    updateTodoList([...todoList, { value: inputVal, id }]);
    updateId();
    updateInputVal("");
  }

  return [todoList, addTodo] as const;
}


function useUUID(initialValue: number) {
  const [uuid, incrementUUID] = useState(initialValue);

  const updateId = () => {
    incrementUUID(prevId => prevId + 1)
  }
  return [uuid, updateId] as const;
}
export default App;
