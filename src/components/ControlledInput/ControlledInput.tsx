import React from "react";

type InputProps = {
  value?: string;
  type: string;
  disabled: boolean;
  readOnly: boolean;
  defaultValue: string;
  placeholder: string;
  onChange: (value: string | null) => void;
  id?: string
};

export default function ControlledInput(props: InputProps) {
  return (
    <div className="input-field">
      <input
        type={props.type}
        value={props.value}
        onChange={event => props.onChange(event.currentTarget.value)}
        placeholder={props.placeholder}
        id={props.id}
      />
    </div>
  );
}

ControlledInput.defaultProps = {
  type: "text",
  disabled: false,
  readOnly: false,
  defaultValue: "",
  placeholder: "What are you up to?"
};
