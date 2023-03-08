import React from 'react'
import { Box, Grid, Typography, Stepper, Step, StepButton } from '@mui/material'

import InfoCard from '../components/info-card'
import DesktopContext from '../d-provider/d-provider'

import { participantData } from '../../moca_data'

const DFView = () =>{

  const { infoButton } = React.useContext(DesktopContext);
  const [activeStep, setActiveStep] = React.useState(0);


  const pData = participantData[0]
  const fData = pData.forms[0]

  const steps = ['Q1', 'Q2', 'Q3', 'Q4'];

  const handleStep = (step) => () => {
    setActiveStep(step);
  }

  return(
    <Box sx={{ flexGrow: 1 }} height="100%">
      <Grid container >
        <Grid item xs={infoButton ? 1 : 2} >
          <Box sx={{display:'flex', justifyContent:'center' , alignItems:'center', width:'100%', height:'100%', minHeight:'80vh', bgcolor:'lightgrey'}}>        
            <Stepper nonLinear orientation="vertical" activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {/* {label} */}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
        <Grid item xs={infoButton ? 6.5 : 8}>
          <Box sx={{display:'flex', flexDirection:"column", alignItems:'center', width:'100%', height:'100%', gap:'10px'}}>
            <Box sx={{width:'90%', paddingTop:'20px'}}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Typography  variant="h5" sx={{padding:'20px', color:'darkblue'}}>{fData.f_name}</Typography>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>
            <Box>Q1xxxxxxxxxxxxxxxxxxx</Box>
            <Box>Answer</Box>

            <Box sx={{position:'fixed', bottom:'10px', width:'40%'}}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={infoButton ? 1 : 2} sx={{bgcolor:'lightgrey'}} />
        <Grid item xs={3.5} hidden={!infoButton}>
          <Box sx={{width:"100%"}}>
            <InfoCard cardType='participant' data= {pData}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DFView