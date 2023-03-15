import * as React from 'react';
import { Box, Button } from '@mui/material';

import ProgressBar from '../components/progress-bar';
import DesktopContext from '../d-provider/d-provider';
import DataGridTable from '../components/data-grid-table/data-grid-table'

import { data1 } from '../../data/file1';
import { data2 } from '../../data/file2';
import { data3 } from '../../data/file3';
import { data4 } from '../../data/file4';
import { data5 } from '../../data/file5';

const DWLView = () => {

  const { pageNavData, setPageNavData, setPageNow } = React.useContext(DesktopContext)
  const data = [data1, data2, data3, data4, data5];

  const rows = data.map((item, index) => {
    return (
      {
        id: item._id,
        workshop: `${item.workshop.city}, ${item.workshop.state}`,
        date: item.workshop.startdate,
        // not sure this number is right or not
        participants: item.peer.length,
        // no data for this progress
        progress: index * 10 + index,
        type: ['2.5', 'In-house', 'Archived', 'Custom'][Math.floor(Math.random() * 4)]
      }

    )
  });

  
  const columns = [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'workshop', name: 'Workshop', width: 200 },
      { key: 'date', name: 'Date', width: 200, },
      { key: 'participants', name: 'Participants', width: 160, },
      { key: 'progress', name: 'Progress', width: 160,
        formatter: (props) => {
          const progress = props.row.progress
          return <ProgressBar 
                    variant="determinate" 
                    value={progress} 
                    width="60%"
                    height="15px"
                    borderRadius="6px"
                    showText={true}
                  />
        }
      },
      { key: 'type', name: 'Type', width: 100,
        formatter: (props) => {
          const type = props.row.type
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
        
        onRowClik={(params, event) => {
          setPageNavData({ title: ['Workshops', 'One-workshop'], data: data.find(item => item._id === event.id)});
          setPageNow('workshopPage');
          console.log({event})
          console.log({params})
        }}
        rowsCount={rows.length}
      />
    </Box>
  );
}

export default DWLView