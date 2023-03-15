import { LinearProgress, styled, linearProgressClasses, Box } from '@mui/material';

const ProgressBar = (props) => {
	const value = props.value;
	const variant = props.variant ||'determinate';
	const width = props.width || '100%';
	const height = props.height || '25px';
	const borderRadius = props.borderRadius || '6px';
	const showText = props.showText || false;
	
	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 4,
			backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
		},
	}))


	return (
		<Box sx={{height:'100%', width:'100%', display:'flex', justifyContent:'space-around', alignItems:'center'}} >
			<BorderLinearProgress variant={variant} value={Number(value)} sx={{ height:{height}, width:{width}, borderRadius:{borderRadius} }} />
				{showText? `${value}%` : ""}
		</Box>
	)
}

export default ProgressBar;