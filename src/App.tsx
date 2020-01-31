import React, { useState, useContext, useEffect } from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import ControlledInput from "./components/ControlledInput";
import Header from "./components/Header";
import Todo from "./components/Todo";

import { ThemeContext, getTheme } from "./ThemeContext";
import "./App.css";

type TodoObject = {
  value: string;
  id: number;
};

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [inputVal, updateInput] = useState("");
  const [todoList, updateTodoList] = useUpdateTodo(inputVal, updateInput);

  function handleInputChange(target: HTMLInputElement) {
    updateInput(target.value)
  }

  function handleTodoChange(target: HTMLInputElement) {
    const val = target.value;
    const id = parseInt(target.id, 10);

    if(val === '' && id !== -1) {
      const newList = todoList.filter(td => td.id !== id)
      return updateTodoList(newList)
    }

    const newList = todoList.map(td => {
      if (td.id !== id) return td;

      return Object.assign(td, { value: val });
    });

    updateTodoList(newList);
  }

  const themeObj = getTheme(theme);
  return (
    <main className="main">
      <Header />
      <div className="card" style={{ background: themeObj.cardBg }}>
        <Row>
          <Col size={9}>
            <ControlledInput
              value={inputVal}
              onChange={handleInputChange}
              placeholder="What are you up to, today?"
              id="-1"
            />
          </Col>
        </Row>
        {todoList.length > 0 &&
          todoList.map(td => (
            <Todo
              key={td.id}
              id={td.id}
              value={td.value}
              onChange={handleTodoChange}
            />
          ))}
      </div>
    </main>
  );
};

function useUpdateTodo(inputVal: string, updateInputVal: (val: string) => void) {
  const [todoList, updateTodoList] = useState<Array<TodoObject>>([]);
  const [id, updateId] = useUUID(0);

  useEffect(() => {
    document.addEventListener("keydown", downHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  });

  function downHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  const addTodo = () => {
    if(!inputVal) return;

    updateTodoList([...todoList, { value: inputVal, id } ]);
    updateId();
    updateInputVal("");
  };

  return [todoList, updateTodoList] as const;
}

function useUUID(initialValue: number) {
  const [uuid, incrementUUID] = useState(initialValue);

  const updateId = () => {
    incrementUUID(prevId => prevId + 1);
  };
  return [uuid, updateId] as const;
}
export default App;
