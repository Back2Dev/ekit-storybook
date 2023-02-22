import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { listData } from '../../moca_data';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Workshop',
    headerName: 'Workshop',
    width: 200,
    editable: false,
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 200,
    editable: false,
    sortable: true,
  },
  {
    field: 'Participants',
    headerName: 'Participants',
    width: 160,
    editable: false,
  },
  {
    field: 'Progress',
    headerName: 'Progress',
    width: 160,
    editable: false,
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 100,
    editable: false,
  },
];

const DWLView = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={listData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onRowClick={(params) => {
          console.log(params.id);
        }}
      />
    </Box>
  );
}

export default DWLView