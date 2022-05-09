import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, IconArrow } from './styles';

type PathT = {
  title: string;
  route: string;
};

interface PathProps {
  primary: PathT;
  secondary: string;
}

const Path: React.FC<PathProps> = ({ primary, secondary }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <p onClick={(e) => navigate(`/${primary.route}`)} role="presentation">
        {primary.title}
      </p>
      <IconArrow />
      <p>{secondary}</p>
    </Container>
  );
};

export default Path;
