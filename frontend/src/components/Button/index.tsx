import React from 'react';

import { Container, ButtonType, ReactLoadingCustom } from './styles';

export interface ButtonProps {
  text: string;
  type?: string;
  width?: number;
  height?: number;
  form?: string;
  primary?: boolean;
  cancel?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingType?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes';
  loadingMarginTop?: number;
  loadingSmall?: boolean;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = (
  {
    text,
    type = 'button',
    width = 216,
    height = 48,
    form = 'form-default',
    onClick,
    primary = false,
    cancel = false,
    loading,
    loadingColor = '#EE4A24',
    loadingType = 'spokes',
    loadingMarginTop = 15,
    loadingSmall = false,
  }: ButtonProps,
  ...rest: any
) => (
  <Container>
    <ButtonType
      type={type}
      form={form}
      primary={primary}
      cancel={cancel}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
      disabled={loading}
    >
      {text}
    </ButtonType>
    {loading && (
      <ReactLoadingCustom
        type={loadingType}
        color={loadingColor}
        height="18%"
        width={loadingSmall ? '6%' : '9%'}
        top={loadingMarginTop}
      />
    )}
  </Container>
);

export default Button;
