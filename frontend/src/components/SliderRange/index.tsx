import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container, ImageLeft, ImageRight } from './styles';

interface SliderRangeProps {
  setZoom: (e: number) => void;
}

const SliderRange: React.FC<SliderRangeProps> = ({
  setZoom,
}: SliderRangeProps) => {
  const handleCalcZoom = (value: number) => {
    const percent = value / 100;
    setZoom(Number(percent.toFixed(1)) + value);
  };

  return (
    <Container>
      <ImageLeft />
      <Slider
        onChange={(value) => handleCalcZoom(value)}
        defaultValue={1}
        min={1}
        max={2}
        step={0.05}
        dotStyle={{ backgroundColor: '#F37E1F' }}
        handleStyle={{
          backgroundColor: '#F37E1F',
          borderColor: '#F37E1F',
          width: 20,
          height: 20,
          marginTop: -9,
        }}
        trackStyle={{ backgroundColor: '#F37E1F', height: 0.5 }}
        railStyle={{ backgroundColor: '#ddd', height: 0.5 }}
      />

      <ImageRight />
    </Container>
  );
};

export default SliderRange;
