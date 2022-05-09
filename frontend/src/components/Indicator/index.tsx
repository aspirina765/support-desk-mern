import React from 'react';

import { ArrowNarrowUp, ArrowNarrowDown } from 'styled-icons/heroicons-outline';
import { InformationCircle } from 'styled-icons/ionicons-outline';

import { Container, Card, Header, Legend, Value } from './styles';

interface ValuesProps {
  name: string;
  value: string;
  arrowUp?: boolean;
}

interface IndicatorProps {
  page: string;
  data: ValuesProps[];
}

const Indicator: React.FC<IndicatorProps> = ({
  page,
  data,
}: IndicatorProps) => (
  <Container>
    {data.map((item, key) => (
      <Card key={key}>
        <Header>
          <Legend>{item.name}</Legend>
          {page === 'home' && item.arrowUp && (
            <ArrowNarrowUp size={15} color="#3cd9a1" />
          )}
          {page === 'home' && !item.arrowUp && (
            <ArrowNarrowDown size={15} color="#F65454" />
          )}
          {page === 'my-store' && (
            <InformationCircle size={20} color="#767676" />
          )}
        </Header>

        <Value>{item.value}</Value>
      </Card>
    ))}
  </Container>
);

export default Indicator;
