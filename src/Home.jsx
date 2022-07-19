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
            <Box imges="https://www.cyborgservices.in/wp-content/uploads/2017/08/ressssssssssss.jpg"
            firsthead="TV SCREEN DAMAGE DETECTION"
            secondhead="Leverage AI to automatically detect several
cases of tv damages and severity damage"
threehead="Flag DOA,Manufacturibg defects in real time"></Box>
            <Box imges="https://www.billerudkorsnas.com/globalassets/managed-packaging/our-offer/articles/how-packaging-can-reduce-your-return-rates/a-damaged-package-wrapped-with-fragile-tape.jpg"
            firsthead="PACKAGING DAMAGE DETECTION"
            secondhead="Damage detection caused during shipping/transit has never been so fast and trustworthy"
threehead="Helps improve faster insurance claim processing"></Box>
            <Box imges="https://securionpay.com/wp-content/uploads/2020/04/Fraud-Prevention-Tools.png"
            firsthead="REPAIR CLAIMS FRAUD DETECTION"
            secondhead="AI  Enabies service industry to reduce false submitted AC/Technicians staff based on repairing images uploaded"
threehead="Massive datasets is analyzed quick time thereby improving customer satisfaction levels"></Box>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>);
}

export default Home;