import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Mainpage = () => {
  return (
    <div className="bg-gradient-primary">
      <div className="container" id="mainpage">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome To CRM Project !
                        </h1>
                      </div>
                      <hr />
                      <Link to="/Userlogin"className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with Users
                      </Link>
                      <Link to="/Adminlogin"className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with Admin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
