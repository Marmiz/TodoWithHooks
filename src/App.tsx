import React, { useState, useContext } from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import ControlledInput from "./components/ControlledInput";

import { ThemeContext, getTheme } from "./ThemeContext";
import "./App.css";

type TodoObject = {
  value: string;
};

const App: React.FC = () => {
  const [todoList, updateTodoList] = useState<Array<TodoObject>>([]);
  const [todoVal, changeTodoVal] = useState("");

  const { theme, toggleTheme } = useContext(ThemeContext);

  function onChangeTodoVal(newVal: string | null) {
    if (!newVal) {
      return changeTodoVal("");
    }
    changeTodoVal(newVal);
  }

  function addTodo() {
    updateTodoList([...todoList, { value: todoVal }]);
  }

  const themeObj = getTheme(theme);
  console.log(themeObj);
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
        todoList.map(td => <Row key={td.value}>{td.value}</Row>)}
    </main>
  );
};

export default App;
