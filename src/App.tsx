import React, { useState} from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import ControlledInput from "./components/ControlledInput";
import "./App.css";

type TodoObject = {
  value: string;
};

const App: React.FC = () => {
  const [todoList, updateTodoList] = useState<Array<TodoObject>>([]);
  const [todoVal, changeTodoVal] = useState('');

  function onChangeTodoVal(newVal: string | null) {
    if(!newVal) {
      return changeTodoVal('')
    }
    changeTodoVal(newVal);
  }

  function addTodo() {
    updateTodoList([...todoList, { value: todoVal }]);
  }
  return (
    <main className="card">
      <Row>
        <Col size={7}>
        <ControlledInput value={todoVal} onChange={onChangeTodoVal} placeholder="What are you up to, today?"/>
        </Col>
        <Col size={3}>
          <button className="button" onClick={addTodo}>Add Todo</button>
        </Col>
      </Row>
      {todoList.length > 0 && (
        todoList.map(td => <Row key={td.value}>{td.value}</Row>)
      )}
    </main>
  );
};

export default App;
