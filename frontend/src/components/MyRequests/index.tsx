import React, { memo } from 'react';

import Table from '../Table';
import ItemsRequest from '../ItemsRequest';
import iconSearch from '../../assets/search.png';

import {
  Title,
  ContainerMyRequests,
  TableRequests,
  ButtonAction,
} from './styles';

const MyRequests: React.FC = () => {
  const requestsTable = [
    {
      id: '112312131',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Aguardando',
      items: [],
    },
    {
      id: '112312132',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Separando',
      items: [],
    },
    {
      id: '112312133',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Separando',
      items: [],
    },
    {
      id: '112312134',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Enviado',
      items: [],
    },
    {
      id: '112312135',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Enviado',
      items: [],
    },
    {
      id: '112312136',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Aguardando',
      items: [],
    },
    {
      id: '112312137',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Entregue',
      items: [],
    },
    {
      id: '11231213',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Entregue',
      items: [
        {
          codProduct: '989738127831',
          name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
          brand: 'Pedigree',
          category: 'ração',
          specie: 'cães',
          scale: '1kg',
          price: 'R$ 18,39',
        },
        {
          codProduct: '989738127831',
          name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
          brand: 'Pedigree',
          category: 'ração',
          specie: 'cães',
          scale: '1kg',
          price: 'R$ 18,39',
        },
      ],
    },
    {
      id: '112312138',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Entregue',
      items: [],
    },
    {
      id: '112312139',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Aguardando',
      items: [],
    },
    {
      id: '112312131022',
      name: 'Ana Carolina',
      cpf: '123.456.789-09',
      qty: 2,
      total: 'R$34,90',
      date: 'hoje',
      hour: '12:00',
      prevision: '16/06/2021',
      status: 'Entregue',
      items: [],
    },
  ];

  const getTitleButton = (status: string) => {
    switch (status) {
      case 'Aguardando':
        return 'separar';
      case 'Separando':
        return 'pronto';
      case 'Enviado':
      case 'Entregue':
        return 'pronto';
      default:
        return '';
    }
  };

  const handleUpdateStatus = (id: string) => {
    console.log(id);
  };

  const Button = memo((props: any) => (
    <ButtonAction
      status={props.row.status}
      onClick={(e) => handleUpdateStatus(props.row.id)}
    >
      <p>{getTitleButton(props.row.status)}</p>
    </ButtonAction>
  ));

  const columnsTable = [
    {
      name: 'id pedido',
      selector: 'id',
      sortable: true,
      grow: 4,
    },
    {
      name: 'cliente',
      selector: 'name',
      grow: 6,
      wrap: true,
      sortable: true,
    },
    {
      name: 'cpf',
      selector: 'cpf',
      grow: 4,
      hide: 900,
      sortable: true,
    },
    {
      name: 'qtd itens',
      selector: 'qty',
      hide: 1050,
      grow: 4,
      sortable: true,
      center: true,
    },
    {
      name: 'valor total',
      selector: 'total',
      wrap: true,
      hide: 1100,
      grow: 4,
      sortable: true,
      right: true,
    },
    {
      name: 'data',
      selector: 'date',
      hide: 1150,
      sortable: true,
      center: true,
    },
    {
      name: 'hora',
      selector: 'hour',
      hide: 1200,
      sortable: true,
      center: true,
    },
    {
      name: 'agendamento',
      selector: 'prevision',
      right: true,
      hide: 1250,
      sortable: true,
    },
    {
      name: 'status',
      selector: 'status',
      left: true,
      sortable: true,
    },
    {
      cell: (row: any) => memo(() => <Button row={row} />),
    },
  ];

  return (
    <>
      <ContainerMyRequests>
        <select placeholder="todos" style={{ backgroundColor: '#fff' }}>
          <option>todos</option>
          <option>aguardando</option>
          <option>separando</option>
          <option>enviado</option>
          <option>entregue</option>
        </select>

        <div>
          <img src={iconSearch} alt="Banner" />
          <input type="search" placeholder="o que você está procurando?" />
        </div>
      </ContainerMyRequests>

      <Title>
        <strong>18</strong> pedidos encontrados
      </Title>
      <TableRequests>
        <Table
          headerColorTransparent
          defaultSortField="id"
          columns={columnsTable}
          data={requestsTable}
          expandableRows
          expandableRowsComponent={<ItemsRequest />}
        />
      </TableRequests>
    </>
  );
};

export default MyRequests;
