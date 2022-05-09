import React from 'react';

import { Title, Value, Card, Legend, LegendValue, ItemTop } from './styles';

const SummaryMonth: React.FC = () => (
  <>
    <Title>faturamento</Title>
    <Value>R$ 130.286,00</Value>

    <Card marginTop="48">
      <ItemTop
        borderBottomColor="--border"
        borderRightColor="--border"
        padding="0px 9px 5px 0px"
      >
        <Legend>total de vendas</Legend>
        <LegendValue marginTop="4">1.004</LegendValue>
      </ItemTop>
      <ItemTop
        borderBottomColor="--border"
        borderRightColor="--white"
        padding="0px 10px 5px 5px"
      >
        <Legend>ticket médio</Legend>
        <LegendValue marginTop="4">R$ 38,70</LegendValue>
      </ItemTop>
    </Card>

    <Card marginTop="2">
      <ItemTop
        padding="0px 30px 5px 0px"
        borderBottomColor="--white"
        borderRightColor="--border"
      >
        <Legend marginTop="5">devoluções</Legend>
        <LegendValue marginTop="4">32</LegendValue>
      </ItemTop>
      <ItemTop
        padding="0px 0px 5px 5px"
        borderBottomColor="--white"
        borderRightColor="--white"
      >
        <Legend marginTop="5">média de frete</Legend>
        <LegendValue marginTop="4">R$ 8,00</LegendValue>
      </ItemTop>
    </Card>
  </>
);

export default SummaryMonth;
