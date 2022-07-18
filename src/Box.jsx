import React from "react";

function Box() {
  return (
    <div className="col">
      <div className="card shadow-lg">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height={225}
          src="Best-Thermal-Leak-Detection-Kits-1.jpg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveaspectratio="xMidYMid slice"
          focusable="false"
        />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
        <div className="card-body">
          <h5>TV SCREEN DAMAGE DETECTION</h5>
          <p className="card-text">
            Leverage AI to automatically detect several <br />
            cases of tv damages and severity damage
            <br />
            <br />
            Flag DOA,Manufacturibg defects in real time
          </p>
          <div className="d-flex justify-content-end align-items-end">
            <div className="btn-group">
              <button type="button" className="btn btn-sm  penta ">
                More
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Box;