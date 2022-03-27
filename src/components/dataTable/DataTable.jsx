import { React, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

function DataTable({ data, headTable }) {
  // const dataTable = useState(data);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid
          id="_id"
          columns={headTable}
          rows={[...data]} />
      </div>
    </div>
  );
}
export default DataTable;