import React from 'react';
import Switch from 'react-switch';

interface CheckboxProps {
  state: boolean;
  onChange: () => void;
  width?: number;
  height?: number;
  handleDiameter?: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  state,
  onChange,
  width = 52,
  height = 29,
  handleDiameter = 25,
}) => (
  <Switch
    onChange={onChange}
    checked={state}
    offColor="#fce0da"
    onColor="#EE4A24"
    uncheckedIcon={false}
    checkedIcon={false}
    height={height}
    width={width}
    handleDiameter={handleDiameter}
  />
);

export default Checkbox;
