import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import SliderRange from '../SliderRange';

import { Container, WrapperCrop, Controls, Button, Cancel } from './styles';

const settings = {
  unit: 'px',
  x: 130,
  y: 50,
  width: 300,
  height: 300,
  aspect: 16 / 9,
};

const ImageCrop: React.FC = () => {
  const [crop, setCrop] = useState<any>({ crop: settings });
  const [zoom, setZoom] = useState(1);

  return (
    <Container>
      <p>Crop</p>
      <p>
        Sugerimos que escolha uma foto com fundo branco para manter o padrão do
        aplicativo.
      </p>

      <WrapperCrop>
        <ReactCrop
          minWidth={200}
          minHeight={200}
          src="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      </WrapperCrop>

      <Controls>
        <SliderRange setZoom={setZoom} />
      </Controls>

      <Button>aplicar</Button>

      <Cancel>cancelar</Cancel>
    </Container>
  );
};

export default ImageCrop;
