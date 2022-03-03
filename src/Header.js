import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <a
                    href="index.html"
                    //style="display: flex;justify-content: center;align-items: center;"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={require("./Doc/img/logo.png")}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                    <div
                      style={{
                        fontFamily: "Muli,sans-serif",
                        color: "#F8C630",
                        fontSize: "25px",
                        fontWeight: 900,
                      }}
                    >
                      {" "}
                      Cre-Resume{" "}
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="">Jobs</a>
                          <ul className="submenu">
                            <li>
                              <a href="/create-lf-job-post">
                                Create looking for job post
                              </a>
                            </li>
                            <li>
                              <a href="/create-job-post">Create job post</a>
                            </li>
                            <li>
                              <a href="/job-listing-employer">
                                List looking for job posts
                              </a>
                            </li>
                            <li>
                              <a href="/job-listing">List job posts</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/create-cv">Create CV</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    <a href="/register" className="btn head-btn1">
                      Register
                    </a>
                    <a href="/login" className="btn head-btn2">
                      Login
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
