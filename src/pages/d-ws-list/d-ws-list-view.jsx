import * as React from 'react';
import { Box, Button } from '@mui/material';

import ProgressBar from '../components/progress-bar';
import DesktopContext from '../d-provider/d-provider';
import DataGridTable from '../components/data-grid-table/data-grid-table'

import { listData } from '../../moca_data';
import { wsData } from '../../moca_data';

const DWLView = () => {

  const { setPageNavData, setPageNow } = React.useContext(DesktopContext)
  const rows = listData;
  const columns = [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'Workshop', name: 'Workshop', width: 200 },
      { key: 'Date', name: 'Date', width: 200, },
      { key: 'Participants', name: 'Participants', width: 160, },
      { key: 'Progress', name: 'Progress', width: 160,
        formatter: (props) => {
          const progress = props.row.Progress
          return <ProgressBar 
                    variant="determinate" 
                    value={parseFloat(progress * 100)} 
                    width="60%"
                    height="15px"
                    borderRadius="6px"
                    showText={true}
                  />
        }
      },
      { key: 'Type', name: 'Type', width: 100,
        formatter: (props) => {
          const type = props.row.Type
          switch (type) {
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
    ]

  return (
    <Box sx={{ height: '100px', width: '100%', display:'flex', justifyContent:'center'}}>
      <DataGridTable 
        rows={rows}
        columns={columns}
        onCellClick={() => {
          setPageNavData({ title: ['Workshops', 'One-workshop'], data: wsData});
          setPageNow('workshopPage');
        }}
      />
    </Box>
  );
}

export default DWLView