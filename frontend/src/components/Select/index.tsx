import React from 'react';

import { Container, SelectType, Label, MessageError } from './styles';

interface SelectProps {
  register?: any;
  name: string;
  options: any[];
  width?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  messageError?: string;
}

const Select: React.FC<SelectProps> = ({
  register,
  name,
  width,
  placeholder,
  label,
  options,
  error,
  messageError,
}: SelectProps) => (
  <Container width={width || '20'}>
    {label && (
      <div>
        <Label>{label}</Label>
      </div>
    )}

    <SelectType name={name} {...register(name)}>
      <option selected>{placeholder}</option>

      {options.map((item) => (
        <option value={item.id} key={`${name}-${item.id}`}>
          {item.name}
        </option>
      ))}
    </SelectType>

    {error && <MessageError>{messageError}</MessageError>}
  </Container>
);

export default Select;
