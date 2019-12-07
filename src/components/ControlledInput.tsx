import React from "react";

type InputProps = {
  value: string;
  type: string;
  disabled: boolean;
  readOnly: boolean;
  defaultValue: string;
  placeholder: string;
  onChange: (value: string | null) => void;
};

export default function ControlledInput(props: InputProps) {
  return <input type={props.type} value={props.value} onChange={event => props.onChange(event.currentTarget.value)}/>;
}

ControlledInput.defaultProps = {
  type: "text",
  disabled: false,
  readOnly: false,
  defaultValue: "",
  placeholder: ""
};
