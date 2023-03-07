import { LinearProgress, styled, linearProgressClasses } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 4,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
	},
}))

export default BorderLinearProgress