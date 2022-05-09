import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import Select from '../../components/Select';

import Table from '../Table';
import iconSearch from '../../assets/search.png';
import Dialog from '../Dialog';

import {
  ContainerTitleMyProducts,
  Title,
  ContainerMyProducts,
  TableProducts,
  ViewMoreProducts,
  DialogTitle,
  DialogQuest,
  DialogButton,
} from './styles';

interface MyProductsProps {
  visibleTitleSearch: boolean;
}

const MyProducts: React.FC<MyProductsProps> = ({ visibleTitleSearch }) => {
  const [dialogShow, setDialogShow] = useState(false);
  const navigate = useNavigate();

  const columnsTable = [
    {
      name: 'código',
      selector: 'code',
      sortable: true,
    },
    {
      name: 'nome',
      selector: 'name',
      grow: 10,
      wrap: true,
      sortable: true,
    },
    {
      name: 'marca',
      selector: 'brand',
      wrap: true,
      hide: 900,
      sortable: true,
    },
    {
      name: 'escala',
      selector: 'scale',
      hide: 1050,
      sortable: true,
    },
    {
      name: 'categoria',
      selector: 'category',
      wrap: true,
      hide: 1100,
      sortable: true,
    },
    {
      name: 'vendas',
      selector: 'offers',
      center: true,
      hide: 1150,
      sortable: true,
    },
    {
      name: 'estoque',
      selector: 'qty',
      center: true,
      hide: 1200,
      sortable: true,
    },
    {
      name: 'preço',
      selector: 'price',
      right: true,
      sortable: true,
    },
    {
      name: 'desconto',
      selector: 'discount',
      center: true,
      hide: 1250,
      sortable: true,
    },
    {
      name: 'avaliado',
      selector: 'rate',
      center: true,
      hide: 1300,
      sortable: true,
    },
  ];

  const productsTable = [
    {
      id: 1,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 2,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 3,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 4,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 11,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 5,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 6,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 7,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 8,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 10,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
    {
      id: 9,
      code: '092736829',
      name: 'Ração para Cães Adultos Raças Pequenas Pedigree',
      brand: 'Pedigree',
      scale: '1kg',
      category: 'ração',
      offers: '429',
      qty: '283',
      price: 'R$18,39',
      discount: '234',
      rate: '4.8',
    },
  ];

  return (
    <>
      <ContainerTitleMyProducts>
        {visibleTitleSearch && (
          <>
            <Title>meus produtos</Title>
            <p onClick={(e) => navigate('/my-store-full')} role="presentation">
              Ver mais
            </p>
          </>
        )}
      </ContainerTitleMyProducts>
      <ContainerMyProducts>
        <select placeholder="todos" style={{ backgroundColor: '#fff' }}>
          <option>todos</option>
          <option>código</option>
          <option>nome</option>
          <option>marca</option>
          <option>escala</option>
        </select>

        {/* <Select name="search" options={[]}/> */}

        <div>
          <img src={iconSearch} alt="Banner" />
          <input type="search" placeholder="o que você está precisando?" />
        </div>

        <button type="button" onClick={() => setDialogShow(true)}>
          <span>+</span>
          <p>novo produto</p>
        </button>
      </ContainerMyProducts>

      <Title>
        <strong>437</strong> produtos encontrados
      </Title>
      <TableProducts>
        <Table
          headerColorTransparent
          defaultSortField="name"
          columns={columnsTable}
          data={productsTable}
        />
      </TableProducts>

      <ViewMoreProducts onClick={(e) => navigate('/my-store-full')}>
        Ver mais
      </ViewMoreProducts>

      <Dialog show={dialogShow} setShow={setDialogShow}>
        <DialogTitle>Legal, vamos lá</DialogTitle>

        <DialogQuest>Como você prefere adicionar um novo produto?</DialogQuest>

        <DialogButton
          marginTop="61"
          onClick={(e) => navigate('my-store-create')}
        >
          manualmente
        </DialogButton>
        <DialogButton marginTop="6">via excel</DialogButton>
      </Dialog>
    </>
  );
};

export default MyProducts;
