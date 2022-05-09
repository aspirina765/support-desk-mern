import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Container, ContainerChart, Title } from './styles';

Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: '.',
  },
});

const chartOptions = {
  colors: ['#F37E1F'],
  credits: {
    enabled: false,
  },
  chart: {
    height: 210,
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: 'Total: {point.y:,.2f}',
    shared: true,
  },
  title: {
    text: '',
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
      format: '{total:,.2f}',
    },
    labels: {
      format: '{value:,.2f}',
    },
  },
  xAxis: {
    categories: [''],
  },
  series: [{ data: [0] }],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 1000,
        },
        chartOptions: {
          chart: { width: 870 },
        },
      },
      {
        condition: {
          maxWidth: 1200,
        },
        chartOptions: {
          chart: { width: 870 },
        },
      },
    ],
  },
};

interface ChartLineProps {
  description: string;
  categories: string[];
  series: number[];
}

const ChartLine: React.FC<ChartLineProps> = ({
  description,
  categories,
  series,
}: ChartLineProps) => {
  chartOptions.xAxis.categories = categories;
  chartOptions.series[0].data = series;

  return (
    <Container>
      <Title>{description}</Title>
      <ContainerChart>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </ContainerChart>
    </Container>
  );
};

export default ChartLine;
