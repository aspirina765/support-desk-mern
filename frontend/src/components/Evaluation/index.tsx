import React from 'react';

import { Title, Score, Legend, Stars, ViewMore } from './styles';

import iconStar from '../../assets/star.png';
import iconStarOpacity from '../../assets/star_opacity.png';

const Evaluation: React.FC = () => (
  <>
    <Title>avaliações</Title>
    <Score>4.8</Score>
    <Stars>
      <img src={iconStar} alt="avaliação" />
      <img src={iconStar} alt="avaliação" />
      <img src={iconStar} alt="avaliação" />
      <img src={iconStar} alt="avaliação" />
      <img src={iconStarOpacity} alt="avaliação" />
    </Stars>
    <Legend>732 pesspas gostaram dos seus produtos</Legend>
    <ViewMore>Ver mais</ViewMore>
  </>
);

export default Evaluation;
