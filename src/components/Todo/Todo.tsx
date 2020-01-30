import React from "react";
import ControlledInput from "../ControlledInput";

type TodoProps = {
  id: number;
  value?: string;
};

function Todo({ id, value }: TodoProps) {
  return (
    <ControlledInput
      id={`${id}`}
      value={value}
      onChange={() => console.log("v")}
    />
  );
}

export default Todo;
