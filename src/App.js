import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Heading from "./Heading";
import Home from "./Home"
import Getthesolution from "./Getthesolution";
import Counting from "./Counting";
import Signinpage from "./Signinpage";
import Tvdamages from "./Tvdamages.jsx";
import Claim from "./Claim";
import Mishandling from "./Mishandling";
import Signdanger from "./Signdanger";
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="solution" element={<Solution />} />
        <Route path="projectp" element={<Projectpage />} />
        <Route path="tvdamage" element={<Tvdm />} />
        <Route path="claimed" element={<Claims />} />
        <Route path="misshandeld" element={<Mishandlinging />} />
        <Route path="misshandeld" element={<Mishandlinging />} />
        <Route path="danger" element={<Dangering />} />

      </Routes>
    </div>
  );
}
function Homepage() {
  return (
    <Home></Home>
  );
}
function Solution() {
  return (
    <div>
      <Heading></Heading>
      <br />
      <Counting></Counting>
      <hr />
      <hr />

      <br />
      <br />
      <Getthesolution></Getthesolution>
    </div>





  );
}
function Projectpage() {
  return (
    <div>
      <Heading></Heading>
      <br />

      <Signinpage></Signinpage>
    </div>

  )
}
function Tvdm() {
  return (
    <div>
    <Tvdamages></Tvdamages>
    </div>
  )
}
function Claims() {
  return (
    <div>
    <Claim></Claim>
    </div>
  )
}
function Mishandlinging() {
  return(
    <div>
      <Mishandling></Mishandling>
    </div>
  )
}
function Dangering(){
  return(
    <div>
    <Heading></Heading>
    <br />
    
      <Signdanger></Signdanger>
    </div>
  )
}
export default App;
