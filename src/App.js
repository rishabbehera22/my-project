import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Heading from "./Heading";
import Home from "./Home"
import Getthesolution from "./Getthesolution";
import Counting from "./Counting";
import Signinpage from "./Signinpage";
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="solution" element={<Solution />} />
        <Route path="projectp" element={<Projectpage />} />
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
export default App;
