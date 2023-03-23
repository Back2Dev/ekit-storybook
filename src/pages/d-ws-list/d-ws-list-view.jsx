import * as React from 'react';
import { Box, Button } from '@mui/material';

import ProgressBar from '../components/progress-bar';
import DesktopContext from '../d-provider/d-provider';
import DataGridTable from '../components/data-grid-table/data-grid-table'

import { workshopsData } from '../../data/workshopsData'
import { paricipantsData } from '../../data/paricipantsData'

const DWLView = () => {

  const { pageNavData, setPageNavData, setPageNow } = React.useContext(DesktopContext)
  const data = workshopsData;
  const pData = paricipantsData;

  console.log(data[0])
  console.log(pData[0])


  const rows = data.map((item, index) => {
    if(item.hotel_id === 'CANCEL') {
      return (
        {
          id: item._id,
          workshop_id: item.workshop_id,
          // city , state
          workshop: '--',
          // address: `${item.address}, ${item.city} ,${item.state}`,
          address: '--',
          startdate: '--',
          date: '--',
          hotel_id: item.hotel_id,
          hotelRate: '--',
          // participants: item.peer.length,
          progress: 0,
          type: 'Canceled'
        }
      )
    } else {
      return (
        {
          id: item._id,
          workshop_id: item.workshop_id,
          // city , state
          workshop: `${item.city}, ${item.state}`,
          // address: `${item.address}, ${item.city} ,${item.state}`,
          address: item.address,
          startdate: item.startdate,
          date: item.date,
          hotel_id: item.hotel_id,
          hotelRate: item.hotelRate,
          // participants: item.peer.length,
          progress: Math.floor(Math.random() * 100),
          type: ['2.5', 'In-house', 'Archived'][Math.floor(Math.random() * 4)]
        }
      )          
    }
  });

  const columns = [
      // { key: 'id', name: 'ID', width: '0px'},
      { key: 'workshop_id', name: 'Workshop_ID', width: 200 },
      { key: 'workshop', name: 'Workshop', width: 160 },
      { key: 'address', name: 'Address', width: 160 },
      { key: 'startdate', name: 'Start Date', width: 100, },
      { key: 'date', name: 'Date', width: 160, },
      { key: 'hotel_id', name: 'Hotel_ID', width: 60 },
      { key: 'hotelRate', name: 'Hotel Rate', width: 60, },
      // { key: 'participants', name: 'Participants', width: 160, },
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
              case 'Canceled':
                return (<Button component="button" variant="outlined" color="warning" size='small' style={{width:'20px', fontSize:'11px'}}>Cancel</Button>)
            // case 'Custom':
            //   return <Button component="button" variant="outlined" color='success' size='small' style={{width:'20px', fontSize:'11px'}}>Custom</Button>
          }
        }
      },
    ]

  return (
    <Box sx={{ minHeight: '1000px', width: '100%', display:'flex', justifyContent:'center'}}>
      <DataGridTable 
        rows={rows}
        columns={columns}
        
        onCellClick={(params, event) => {
          setPageNavData({ title: ['Workshops', 'One-workshop'], data: pData.find(item => item.workshop._id === event.id)});
          setPageNow('workshopPage');
          console.log(event)
          console.log(pageNavData)
        }}
        rowsCount={rows.length}
      />
    </Box>
  );
}

export default DWLView