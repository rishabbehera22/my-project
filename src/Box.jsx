import React from "react";
import { Link } from "react-router-dom";
function Box(props) {
  return (
    <div className="col">
      <div className="card shadow-lg">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height={225}
          src={props.imges}
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveaspectratio="xMidYMid slice"
          focusable="false"
        />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
        <div className="card-body">
          <h5> <b>{props.firsthead}</b></h5>
          <p className="card-text">
            {props.secondhead}
            <br />
            <br />
            {props.threehead}
          </p>
          <Link to="/tvdamage">
          <div className="d-flex justify-content-end align-items-end">
            <div className="btn-group">
              <button type="button" className="btn btn-sm  penta ">
              
                More
                
                <i className="fa-solid fa-arrow-right" />
                
              </button>
            </div>
          </div>
          </Link>
   
        </div>
      </div>
    </div>
  );
}
export default Box;