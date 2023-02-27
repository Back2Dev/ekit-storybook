import React from 'react'
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator} from "react-tabulator";
import { Box, Grid } from '@mui/material'

import DWPInfo from './d-ws-page-info';
import DWSPageContext from './d-ws-page-provider';

import { wsData } from '../../moca_data';

const DWPView = () => {

  const { infoButton } = React.useContext(DWSPageContext);

  const options = {
    // cellEdited: onCellEdited,
    height: 'auto',
    layout: 'fitColumns',
    minHeight: 'calc(100vh - 500px)',
    movableRows: true,
    movableColumns: true,
    // maxHeight: props.maxHeight || '80vh',
    pagination: 'local', //enable local pagination.
    paginationSize: 20,
    persistence: {
      sort: true,
      filter: true,
      columns: true,
    },
    persistenceID: 'schema',
  }

  const editableColumns = [
    {
      title: "",
      field: "avatar",
      // width: 80,
      editor: false,
    },
    {
      title: "Name",
      field: "name",
      // width: 150,
      editor: false,
    },
    {
      title: "Consultant",
      field: "consultant",
      // width: 150,
      editor: false,
    },
    {
      title: "Company",
      field: "company",
      // width: 150,
      editor: false,
    },
    {
      title: "Role",
      field: "role",
      // width: 200,
      editor: false,
    },
    {
      title: "Participent",
      field: "p-progress",
      // width: 200,
      editor: false,
      formatter: (cell, formatterParams, onRendered) => {
        const value = cell.getValue();
        let color, textColor;
    
        if (value >= 0.7) {
          color = 'green';
          textColor = 'white';
        } else if (value >= 0.4) {
          color = 'orange';
          textColor = 'black';
        } else {
          color = 'red';
          textColor = 'white';
        }
    
        const percentage = Math.round(value * 100);
        const button = `
          <button style="background-color: ${color}; color: ${textColor}">
            ${percentage}%
          </button>
        `;
        return button;
      }
    },
    {
      title:"Boss",
      field: "b-progress",
      // width: 200,
      editor: false,
      formatter: (cell, formatterParams, onRendered) => {
        const value = cell.getValue();
        let color, textColor;
    
        if (value >= 0.7) {
          color = 'green';
          textColor = 'white';
        } else if (value >= 0.4) {
          color = 'orange';
          textColor = 'black';
        } else {
          color = 'red';
          textColor = 'white';
        }
    
        const percentage = Math.round(value * 100);
        const button = `
          <button style="background-color: ${color}; color: ${textColor}">
            ${percentage}%
          </button>
        `;
        return button;
      }
    },
    {
      title: "Peers",
      field: "peers",
      // width: 200,
      editor: false,
      formatter: (cell, formatterParams, onRendered) => {
        const value = cell.getValue();
        let color, textColor;
    
        if (value >= 0.7) {
          color = 'green';
          textColor = 'white';
        } else if (value >= 0.4) {
          color = 'orange';
          textColor = 'black';
        } else {
          color = 'red';
          textColor = 'white';
        }
    
        const percentage = Math.round(value * 100);
        const button = `
          <button style="background-color: ${color}; color: ${textColor}">
            ${percentage}%
          </button>
        `;
        return button;
      }
    },
  ];

  const rowClick = (e, row) => {
    // console.log("ref table: ", this.ref.current); // this is the Tabulator table instance
    // console.log("rowClick id: ${row.getData().id}", row, e);
    this.setState({ selectedName: row.getData().name });
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={infoButton ? 8.5 : 12}>
            <ReactTabulator
              onRef={(ref) => (ref = ref)}
              columns={editableColumns}
              data={ wsData }
              events={{
                rowClick: rowClick
              }}
              options={options}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
              // footerElement={<span>Footer</span>}
            />
          </Grid>
          <Grid item xs={3.5} hidden={!infoButton}>
            <DWPInfo />
          </Grid>
        </Grid>
      </Box>
  )
}

export default DWPView
