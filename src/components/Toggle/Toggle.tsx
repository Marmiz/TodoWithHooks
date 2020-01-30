import React from "react";

type ToggleProps = {
  id: string;
  checked: boolean;
  onChange: () => void;
  label?: string;
};

const Toggle = ({ id, checked, onChange, label }: ToggleProps) => (
  <div className="toggle">
    <input
      type="checkbox"
      id={id}
      className="offscreen"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id} className="toggle__switch" />
    <span className="toggle__text" data-checked={checked}>
      {label}
    </span>
  </div>
);

export default Toggle;
