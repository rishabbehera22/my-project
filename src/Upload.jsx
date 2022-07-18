import React from "react";

function Upload(){
    return(
        <div>
            <>
  <h1>Show File-select Fields</h1>
  <h3>Show a file-select field which allows multiple files to be chosen:</h3>
  <form action="/action_page.php" encType="multipart/form-data">
    <label htmlFor="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile" multiple="multiple" />
    <br />
    <br />
    <input type="submit" />
  </form>
</>

        </div>
    )
}

export default Upload;