import * as React from 'react';
import WorkshopList from '../m-workshop/m-workshoplist';

const user = 'Admin';

const MDashboard = () => {
  return (
    // <Box>
    //   <Typography
    //     sx={{
    //       paddingTop: 2,
    //       paddingBottom: 1,
    //       fontWeight: 'bold',
    //     }}
    //     variant="h5"
    //     component="h2"
    //     align="center"
    //   >
    //     Welcome, {user}
    //   </Typography>
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'space-evenly',
    //       alignItems: 'stretch',
    //     }}
    //   >
    //     <MUpcoming />
    //     <MDashboardCard
    //       title="Workshops"
    //       icon={<CalendarMonthIcon fontSize="large" />}
    //     />
    //   </Box>
    // </Box>
    <WorkshopList />
  );
};

export default MDashboard;
