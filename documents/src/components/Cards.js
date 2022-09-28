import React from "react";

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import { Grid } from "@mui/material";

import CountUp from "react-countup";

import "./style.css";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



function Cards (props) {
 


  const { totalConfirmed, newDeaths, totalDeaths, country, date, dailyConfirmed, dailyRecovered, TotalRecovered } = props;
  
  return (
    
    <div>

      <h1> {country === "" ? "World Wide Covid19 Report" : country} </h1>


  <Grid container spacing={1}>

    <Grid item xs={12} lg={4}>
        
      


    <Card sx={{ minWidth: 275 }}>
      <CardContent className="border-bottom-blue">
        
        <Typography variant="h4" component="div" className="text-blue">
           Confirmed
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <CountUp 
                      start={0}
                      end={totalConfirmed}
                      duration={2.5}
                      separator=","
                      />
        </Typography>

       

        <Typography variant="h5" component="div" className="text-blue">
         World Daily Confirmed
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <CountUp 
                      start={0}
                      end={dailyConfirmed}
                      duration={2.5}
                      separator=","
                      />
        </Typography>

        <Typography> <strong> { new Date(date).toDateString() } </strong> </Typography>
        
      </CardContent>
      
    </Card>


  </Grid>


  <Grid item xs={12} lg={4}>
        
        <Card sx={{ minWidth: 275 }}>
      <CardContent className="border-bottom-purple">
      <Typography variant="h4" component="div" className="text-purple">
          Recovered
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <CountUp
          start={0}
          end={TotalRecovered}
          duration={2.5}
          separator={","}

          />
        </Typography>

        <Typography variant="h6" component="div" className="text-purple">
          New Recovered
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <CountUp
          start={0}
          end={dailyRecovered}
          duration={2.5}
          separator={","}

          />
        </Typography>

        <Typography> <strong> { new Date(date).toDateString() } </strong> </Typography>
      </CardContent>
      
    </Card>

  </Grid>

  <Grid item xs={12} lg={4}>
        
        <Card sx={{ minWidth: 275 }}>
      <CardContent className="border-bottom-red" >
      
      <Typography variant="h4" component="div" className="text-red">
          Deaths
        
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
          <CountUp
          start={0}
          end={totalDeaths}
          duration={2.5}
          separator={", "}
          
          />
        </Typography>

        <Typography variant="h6" component="div" className="text-red">
          New Deaths
        </Typography>
        
         <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <CountUp
          start={0}
          end={newDeaths}
          duration={2.5}
          separator={","}

          />
        </Typography>

        <Typography> <strong> { new Date(date).toDateString() } </strong> </Typography>
      
      </CardContent>
      
    </Card>


  </Grid>

</Grid>


        


    </div>
  )
};

export default Cards;