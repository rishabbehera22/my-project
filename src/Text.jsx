import React from "react";

function Text(){
    return(
        <div>
            <>
  <div className="w3-container w3-orange">
    <h2>Form</h2>
  </div>
  <form className="w3-container">
    <p>
      <label>First Name</label>
      <input className="w3-input w3-hover-red w3-animate-input" type="text" />
    </p>
    <p>
      <label>Last Name</label>
      <input className="w3-input w3-hover-red w3-animate-input " type="text" />
    </p>
    <p>
      <label>Email</label>
      <input className="w3-input w3-hover-red w3-animate-input" type="text" />
    </p>
    <p>
      <label>Number</label>
      <input className="w3-input w3-hover-red w3-animate-input" type="text" />
    </p>
    <input className="w3-check" type="checkbox" defaultChecked="checked" />
  <label>INSURANCE</label>

  </form>
  <>
 
</>

</>
        </div>
    );
}
export default Text;