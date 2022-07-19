import React from "react";
import { Link } from "react-router-dom";
function Heading() {
  return (
    <header className="p-3 bg-dark text-white " style={{ height: 90 }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link 
              to="/" className=" -flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" aria-current="page" ></Link>
          
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              {" "}
           
              <Link 
              to="/" className="nav-link px-2 text-secondary text-center text-white" aria-current="page" >
                                <i
                  className="fa-solid fa-house-chimney bi d-block mx-auto mb-1"
                  width={24}
                  height={24}
                />
                Home
              
              </Link>

            </li>
            <li>
              <Link
                to="/solution"
                className="nav-link px-2 text-secondary text-center text-white"
              >
                <i
                  className="fa-solid fa-briefcase bi d-block mx-auto mb-1"
                  width={24}
                  height={24}
                />
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/projectp"
                className="nav-link px-2 text-secondary text-center text-white"
              >
                <i
                  className="fa-solid fa-chart-line bi d-block mx-auto mb-1"
                  width={50}
                  height={50}
                />
                My projects
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/tvdamage"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </Link>
            
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            
              <li className="">
              <Link to="/danger">
              <button type="button" className="pill">
                  <i
                    className="fa-solid fa-display bi d-block mx-auto mb-1"
                    width={24}
                    height={24}
                  >
                    <p1 className="text-white">
                      Try for <br />
                      <br /> free
                    </p1>
                  </i>
                </button>
              </Link>
           
              </li>
              <li>
                <Link
                  to="/danger"
                  className="nav-link px-2 text-secondary  text-white"
                >
                  <i
                    className="fa-solid fa-bullseye bi d-block mx-auto mb-1"
                    width={100}
                    height={100}
                  >
                    <p1>
                      REQUEST <br /> DEMO
                    </p1>
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  to="/danger"
                  className="nav-link px-2 text-secondary text-center text-white"
                >
                  <i
                    className="fa-solid fa-gear bi d-block mx-auto mb-1"
                    width={50}
                    height={50}
                  />
                  Settings
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/projectp"
                  className="nav-link px-2 text-secondary text-center text-white"
                >
                  <i
                    className="fa-solid fa-id-card bi d-block mx-auto mb-1"
                    width={50}
                    height={50}
                  />
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
