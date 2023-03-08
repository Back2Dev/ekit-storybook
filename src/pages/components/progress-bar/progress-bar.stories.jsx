import React from 'react'
import { Box } from '@mui/material';

import ProgressBar from './index'

export default {
	title: 'Compinents/ProgressBar',
	component: ProgressBar,
	argTypes: {
		value: { control: 'number', min: 0, max: 100, step: 1, defaultValue: 50},
		width: {control: 'text', defaultValue: '200px'},
		height: {control: 'text', defaultValue: '20px'},
		showText: {control: 'boolean', defaultValue: false},
		variant: {control:{ type: 'select', options: ['determinate', 'indeterminate', 'buffer', 'query']}},
	}
}

const Template = (args) => {
	return (
		<div>
			<h3> ProgressBar </h3>
			<Box sx={{width: '300px', height: '50px', border: 'solid lightGray', borderRadius: '10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
				<ProgressBar {...args}/>
			</Box>
		</div>
	)
}

export const Default = Template.bind({})
Default.args = {
	value: 50,
}
