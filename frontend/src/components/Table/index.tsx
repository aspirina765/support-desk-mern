import React, { memo } from 'react';

import DataTable from 'react-data-table-component';

import {
  KeyboardArrowRight,
  KeyboardArrowDown,
} from 'styled-icons/material-rounded';

import { headCells, rows, IconSort } from './styles';

interface TableProps {
  columns: any[];
  data: any[];
  defaultSortField?: string;
  headerColorTransparent?: boolean;
  expandableRows?: boolean;
  expandableRowsComponent?: any;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  defaultSortField,
  headerColorTransparent = false,
  expandableRows = false,
  expandableRowsComponent,
}: TableProps) => {
  if (headerColorTransparent) {
    headCells.style.background = 'var(--white)';
  }

  return (
    <DataTable
      title=""
      overflowY
      columns={columns}
      noDataComponent={data.length > 0 ? '' : 'Nenhum item encontrado.'}
      data={data}
      noHeader
      defaultSortAsc
      expandableIcon={{
        collapsed: <KeyboardArrowRight color="#tertiary" size="17" />,
        expanded: <KeyboardArrowDown color="#tertiary" size="17" />,
      }}
      expandableRows={expandableRows}
      expandableRowsComponent={expandableRowsComponent}
      defaultSortField={defaultSortField}
      sortIcon={<IconSort />}
      customStyles={{
        headCells,
        rows,
      }}
    />
  );
};

export default memo(Table);
