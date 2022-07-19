import React from "react";
import Heading from "./Heading";
import List from "./List";
import Box from "./Box";
function Home(){
    return(<div>
         <div className="App">
   <Heading></Heading>
    <br />
    <div class="d-flex flex-row">
      <List></List>
      <div class="album  bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Box 
            firsthead="TV SCREEN DAMAGE DETECTION"
            secondhead="Leverage AI to automatically detect several
cases of tv damages and severity damage"
threehead="Flag DOA,Manufacturibg defects in real time"></Box>
            <Box 
            firsthead="TV SCREEN DAMAGE DETECTION"
            secondhead="Leverage AI to automatically detect several
cases of tv damages and severity damage"
threehead="Flag DOA,Manufacturibg defects in real time"></Box>
            <Box 
            firsthead="TV SCREEN DAMAGE DETECTION"
            secondhead="Leverage AI to automatically detect several
cases of tv damages and severity damage"
threehead="Flag DOA,Manufacturibg defects in real time"></Box>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>);
}

export default Home;