import React, { useState } from 'react';

import imageProduct from '../../assets/product.png';

import Modal from '../Modal';

import {
  ContainerItem,
  CardItem,
  ViewMore,
  ContainerModalClient,
  RowOne,
  RowOther,
} from './styles';

const ItemsRequest: React.FC = ({ data }: any) => {
  const [modalClient, setModalClient] = useState(false);

  return (
    <ContainerItem>
      {data.items.map((item: any) => (
        <CardItem>
          <img src={imageProduct} alt="" />

          <div>
            <p>código</p>
            <p>{item.codProduct}</p>
          </div>

          <div>
            <p>nome do produto</p>
            <p>{item.name}</p>
          </div>

          <div>
            <p>marca</p>
            <p>{item.brand}</p>
          </div>

          <div>
            <p>categoria</p>
            <p>{item.category}</p>
          </div>

          <div>
            <p>espécie</p>
            <p>{item.specie}</p>
          </div>

          <div>
            <p>escala</p>
            <p>{item.scale}</p>
          </div>

          <div>
            <p>preço</p>
            <p>{item.price}</p>
          </div>
        </CardItem>
      ))}

      {data.items.length > 0 && (
        <ViewMore onClick={(e) => setModalClient(true)}>
          Ver dados do cliente
        </ViewMore>
      )}

      <Modal
        show={modalClient}
        setShow={setModalClient}
        width="488"
        height="411"
      >
        <ContainerModalClient>
          <p>Ana Carolina</p>
          <p>Pedido 0983928938</p>

          <RowOne>
            <div>
              <p>id do cliente</p>
              <p>129345453</p>
            </div>
            <div>
              <p>nome do cliente</p>
              <p>Ana Carolina</p>
            </div>
            <div>
              <p>CPF</p>
              <p>123.456.789-09</p>
            </div>
            <div>
              <p>Contato</p>
              <p>(00) 00000-0000</p>
            </div>
          </RowOne>
          <RowOther>
            <p>agendamento</p>
            <p>10/06/2021 - 12:30</p>
          </RowOther>
          <RowOther>
            <p>endereço</p>
            <p>
              Rua Torres da Barra, 409 - Água Branca, São Paulo - SP, 05037-055
            </p>
          </RowOther>
          <RowOther>
            <p>complemento</p>
            <p>Ap 409</p>
          </RowOther>
        </ContainerModalClient>
      </Modal>
    </ContainerItem>
  );
};

export default ItemsRequest;
