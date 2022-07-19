import React from "react";
import Heading from "./Heading";
import Text from "./Text";
function Claim(){
    return(
        <div>
        <Heading></Heading>
        <br />
        <br />
        <div>
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">We are sorry for the inconvinence caused</h1>
            <p class="lead my-3">please be patient with us </p>
            <b class="text-primary">We are working on it
            <br />
               <i class="fa-solid fa-face-smile"></i>
            </b>
            <br />
            <h1 className="text-warning">Please upload the photo of the damage</h1>
  <h3>Should be a png,jpg or a jpeg file</h3>
  <form action="/action_page.php" encType="multipart/form-data">
    <label htmlFor="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile" multiple="multiple" />
    <br />
    <br />
    
  </form>
  <br />
  <br />
  <Text></Text>
  <br />
  <form className="w3-container">
  <label>What is your claim?</label>
  <input
    className="w3-input w3-animate-input"
    type="text"
    style={{ width: 135 }}
  />
  <br />
</form>
  <input type="submit" />
          </div>
        </div>
 
     </div>
     </div>
    );

}

export default Claim;
