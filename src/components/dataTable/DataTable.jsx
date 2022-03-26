import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

function DataTable() {
  const data = [
    {
      id: 1,
      title: 'Commodity',
      price: 100,
      quantity: 6,
    },
    {
      id: 2,
      title: 'Commodity2',
      price: 100,
      quantity: 6,
    },
    {
      id: 3,
      title: 'Commodity3',
      price: 100,
      quantity: 6,
    },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid columns={[{ field: 'title', width: 300 }, { field: 'price' }, { field: 'quantity' }]}
          id="title"
          rows={[...data]} />
      </div>
    </div>
  );
}
export default DataTable;