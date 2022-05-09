import styled, { css } from 'styled-components';

import { ArrowDropUp } from 'styled-icons/material';

export const headCells = {
  style: {
    marginTop: 30,
    background: 'var(--senary)',
    color: 'var(--tertiary)',
    height: 30,
    minHeight: 30,
    fontSize: 13,
  },
};

export const rows = {
  style: {
    color: 'var(--tertiary)',
    fontSize: 12,
  },
};

const iconCSS = css`
  /* width: 10px; 
    height: 10px; */
`;

export const IconSort = styled(ArrowDropUp)`
  ${iconCSS}
`;
