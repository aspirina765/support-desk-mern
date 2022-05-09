import React from 'react';

import { Container, InputType, Label, MessageError } from './styles';

interface InputProps {
  register?: any;
  type: string;
  name: string;
  width?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  messageError?: string;
}

const Input: React.FC<InputProps> = (
  {
    register,
    type,
    name,
    width,
    placeholder,
    label,
    disabled,
    value,
    error,
    messageError,
  }: InputProps,
  ...rest: any
) => (
  <Container width={width || ''}>
    {label && (
      <div>
        <Label>{label}</Label>
      </div>
    )}
    <InputType
      {...rest}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      type={type}
      width={width || ''}
      {...register(name)}
    />
    {error && <MessageError>{messageError}</MessageError>}
  </Container>
);

export default Input;
