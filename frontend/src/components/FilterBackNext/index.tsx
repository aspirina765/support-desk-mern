import React from 'react';

import { Filters, FilterSelected } from './styles';

import iconArrowLeftGray from '../../assets/arrow_left_gray.png';
import iconArrowRightGray from '../../assets/arrow_right_gray.png';

interface FilterBackNextProps {
  selected: string;
}

const FilterBackNext: React.FC<FilterBackNextProps> = ({
  selected,
}: FilterBackNextProps) => (
  <Filters>
    <img src={iconArrowLeftGray} alt="Voltar" />
    <FilterSelected>{selected}</FilterSelected>
    <img src={iconArrowRightGray} alt="Próximo" />
  </Filters>
);

export default FilterBackNext;
