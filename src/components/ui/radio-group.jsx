import * as React from "react";

const RadioGroupContext = React.createContext();

export function RadioGroup({ children, ...props }) {
  const [value, setValue] = React.useState(props.value || "");

  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      <div role="radiogroup" {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({ children, value, ...props }) {
  const { value: groupValue, setValue } = React.useContext(RadioGroupContext);

  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        className="form-radio"
        checked={groupValue === value}
        onChange={() => setValue(value)}
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}
