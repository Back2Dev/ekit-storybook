import React from 'react';
import { Box } from '@mui/material'

import InfoCard from './index'

const mocaData = { id: 1, Workshop: 'Newport Beach, CA', Date: '11-13 Jan 2023', Participants: '21', progress: 80, Type: 'Archived', name: 'test name', company: 'Test Company', Role: 'Test Role', consultant: 'Test Consultant', last_updated: '2021-10-10', phone:'123456789', email:'test@test.com',}

export default {
	title: 'Compinents/InfoCard',
	component: InfoCard,
	argTypes: {
		outBoxWide:{control: 'number', min: 0, max: 2000, step: 50, defaultValue: 450},
		data:{defaultValue: mocaData, control: {type: 'object'}},
	}
};

const Template = (args) => {
	const outBoxWide = `${args.outBoxWide}px`;
	return (
		<Box width={outBoxWide} sx={{bgcolor:'gray', borderRadius:'20px 0 0 20px'}}>		
				<InfoCard {...args} />
			<hr />
		</Box>
	)
}

export const Cards = () => {
	return (
		<>
			<Box width='450px' >
				<hr/>
				<h4> WorkshopCard</h4>
				<InfoCard cardType='WorkshopCard' data={mocaData} />
				<hr/>
				<h4>ConnectCard</h4>
				<InfoCard cardType='ConnectCard' data={mocaData} />
				<hr/>
				<h4>ProgressCard</h4>
				<InfoCard cardType='ProgressCard' data={mocaData} />
				<hr/>
				<h4>BatchesCard</h4>
				<InfoCard cardType='BatchesCard' data={mocaData} />
			</Box>
		</>
	)
}


export const WorkshopPageInfo = Template.bind({})
WorkshopPageInfo.args = {
	cardType:'workshop'
}

export const ParticipantPageInfo = Template.bind({})
ParticipantPageInfo.args = {
	cardType:'participant'
}