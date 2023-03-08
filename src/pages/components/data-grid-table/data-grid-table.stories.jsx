import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Box } from '@mui/material'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded'

import DataGridComponent from './index';
import ProgressBar from '../progress-bar';

// moca data
const columns = [
	{ key: 'id', name: 'ID', width: 60 },
	{ key: 'name', name: 'Name', width: 150, editable: false },
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
	{ key: 'completed', name: 'Completed', width: 100,
		formatter: (props) => {
			if (props.row.completed) {
				return <CheckRoundedIcon sx={{color: 'green'}} />
			} else {
				return <ClearRoundedIcon sx={{color:'red'}} />
			}
		}
	},
	{ key: 'download', name: 'Download', width: 100,
		formatter: (props) => {
			const url = props.row.download;
			// return <a href={url.formattedValue} target="_blank" rel="noopener noreferrer"><FileDownloadRoundedIcon color='primary.main'/></a>
			return <FileDownloadRoundedIcon color='primary.main'/>
		}
	}
]

const rows = [
  { id: 0, name: 'Rose Dalli', Date: '2023-03-01', Participants: '21', Progress: 0.5, Type: '2.5', completed: true, download: 'https://www.google.com/' },
  { id: 1, name: 'Randy Jackson', Date: '2022-04-02', Participants: '11', Progress: 0.6, Type: 'In-house', completed: false, download: 'https://www.google.com/' },
  { id: 2, name: 'Henry Zoe', Date: '2022-04-01', Participants: '30', Progress: 0.1, Type: 'Archived', completed: true, download: 'https://www.google.com/' },
  { id: 3, name: 'Randy X', Date: '2022-05-03', Participants: '15', Progress: 0, Type: 'Custom', completed: true, download: 'https://www.google.com/' },
  { id: 4, name: 'Jack Jackson', Date: '2022-06-01', Participants: '28', Progress: 0.8, Type: '2.5', completed: true, download: 'https://www.google.com/' },
  { id: 5, name: 'Randy Roman', Date: '2023-07-04', Participants: '41', Progress: 1, Type: 'In-house', completed: false, download: 'https://www.google.com/' },
]

const handleClick = (props) => {
  return action('123')
}

export default {
	title: 'Compinents/DataGridTable',
	component: DataGridComponent,
	argTypes: {
    rows:{control: 'object', defaultValue: rows},
    columns:{control: 'object', defaultValue: columns},
    rowHeight: {control: 'number', defaultValue: 45},
    headerHeight: {control: 'number', defaultValue: 45},
    onCellClick:{defaultValue: action('Row clicked')}
	}
}

const Template = (args) => {
	return (
		<Box>
			<h3> DataGridTable </h3>
			<Box sx={{display:'flex'}}>
				<DataGridComponent {...args}/>
			</Box>
		</Box>
	)
}

export const Default = Template.bind({})
Default.args = {}
