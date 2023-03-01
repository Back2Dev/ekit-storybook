import * as React from 'react';
import { Box, LinearProgress, Button, styled, linearProgressClasses } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { listData } from '../../moca_data';
import { wsData } from '../../moca_data';

import DesktopContext from '../d-provider/d-provider';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Workshop',
    headerName: 'Workshop',
    width: 200,
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 200,
  },
  {
    field: 'Participants',
    headerName: 'Participants',
    width: 160,
  },
  {
    field: 'Progress',
    headerName: 'Progress',
    width: 160,
    renderCell: (progress) => {
      return (
        <Box sx={{display:'flex', justifyContent:'space-around', width: '100%'}}>
          <BorderLinearProgress 
            variant="determinate" 
            value={parseFloat(progress.formattedValue * 100)} 
            sx={{width:"60%", height:"15px", borderRadius: "8px"}}
          />
          {progress.formattedValue * 100} %
        </Box>
      )
    }
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 100,
    renderCell: (type) => {
      switch (type.formattedValue) {
        case '2.5':
          return (<Button component="button" variant="outlined" color="primary" size='small' style={{width:'20px', fontSize:'11px'}}>2.5</Button>)
        case 'In-house':
          return (<Button component="button" variant="outlined" color="info" size='small' style={{width:'20px', fontSize:'11px'}}>In-house</Button>)
        case 'Archived':
          return (<Button component="button" variant="outlined" color="error" size='small' style={{width:'20px', fontSize:'11px'}}>Archived</Button>)
        case 'Custom':
          return <Button component="button" variant="outlined" color='success' size='small' style={{width:'20px', fontSize:'11px'}}>Custom</Button>
      }
    }
  },
];

const DWLView = () => {

  const { setPageNavData, setPageNow } = React.useContext(DesktopContext)

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={listData}
        columns={columns}
        autoPageSize={true}
        pageSize={15}
        disableColumnMenu={true}
        headerHeight={45}
        rowHeight={45}
        hideFooterSelectedRowCount={true}
        onRowClick={(params) => {
          console.log(params.id)
          setPageNavData({ title: ['Workshops', 'One-workshop'], data: wsData});
          setPageNow('workshopPage');
        }}
      />
    </Box>
  );
}

export default DWLView