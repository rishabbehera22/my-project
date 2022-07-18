import React from "react";
import Heading from "./Heading";

function Tvdamages(){
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
            <h1 className="text-warning">Please upload the pic for damage photos</h1>
  <h3>Should be a png,jpg or a jpeg file</h3>
  <form action="/action_page.php" encType="multipart/form-data">
    <label htmlFor="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile" multiple="multiple" />
    <br />
    <br />
    <input type="submit" />
  </form>
          </div>
        </div>
 
     </div>
     </div>
    );

}

export default Tvdamages;