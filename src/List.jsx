import React from "react";

function List() {
  return (
    <div
      className="d-flex flex-column flex-shrink-1 p-3 text-white bg-dark"
      style={{ width: 160 }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link navbar-brand" aria-current="page">
            <div className="align-items-center">
              <i className="fa-solid fa-box mx-auto bi d-block mx-auto mb-1 px-4  text-white " />
              <p className="text-white">Box damage</p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            <div className="align-items-center">
              <i className="fa-solid fa-tv mx-auto bi d-block mx-auto mb-1 px-4  text-white " />
              <p className="text-white">Box damage</p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            <div className="align-items-center">
              <i className="fa-solid fa-screwdriver mx-auto bi d-block mx-auto mb-1 px-4  text-white " />
              <p className="text-white">
                Fraud Repair
                <br />
                claim
              </p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            <div className="align-items-center">
              <i className="fa-solid fa-warehouse mx-auto bi d-block mx-auto mb-1 px-4  text-white align-content-center " />
              <p className="text-white ">
                Warehouse
                <br />
                mishandling
              </p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            <div className="align-items-center">
              <i className="fa-solid fa-microchip mx-auto bi d-block mx-auto mb-1 px-4  text-white align-content-center " />
              <p className="text-white ">
                Warehouse
                <br />
                mishandling
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default List;
