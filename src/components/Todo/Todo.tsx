import React from "react";
import ControlledInput from "../ControlledInput";

type TodoProps = {
  id: number;
  value?: string;
  onChange: (target: HTMLInputElement) => void
};

function Todo({ id, value, onChange }: TodoProps) {
  return (
    <ControlledInput
      id={`${id}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Todo;
