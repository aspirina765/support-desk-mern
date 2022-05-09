import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';

import SliderRange from '../SliderRange';

import { Container, WrapperCrop, Controls, Button } from './styles';

const ImageCrop: React.FC = () => {
  const [crop, setCrop] = useState<Point>({ x: 10, y: 10 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      // console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  return (
    <Container>
      <p>Crop</p>
      <p>
        Sugerimos que escolha uma foto com fundo branco para manter o padrão do
        aplicativo.
      </p>

      <WrapperCrop>
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </WrapperCrop>

      <Controls>
        <SliderRange setZoom={setZoom} />
      </Controls>

      <Button>aplicar</Button>
    </Container>
  );
};

export default ImageCrop;
