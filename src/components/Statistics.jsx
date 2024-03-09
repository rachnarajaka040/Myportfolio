import {  Grid } from "@chakra-ui/react";
import React from "react";
import StatsCard from "./StatsCard";

const Statistics = () => {
  return (
    <Grid
      templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}
      maxW={['full',"80%"]}
      m="auto"
      mt={['50px','80px']}
      gap={['40px','80px']}
      p='0px'
    >
      <StatsCard  
        statcolor="white"
       
        stat="1200+"
        description="Hours of Coding"
      />
      <StatsCard
        statcolor="white"
        stat="155+"
        description="GitHub Commits"
      />
      <StatsCard
        statcolor="white"
        stat="5+"
        description="Projects Done"
      />
      <StatsCard
        statcolor="white"
        stat="100+"
        description="Hours of Softskills Sessions"
      />
    </Grid>
  );
};

export default Statistics;
