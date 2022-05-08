import React from "react";
import { GetCookie, SetCookie } from "./api/user";

export default function Header() {
  console.log(GetCookie("auth"), typeof GetCookie("auth"));
  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <a
                    href="/"
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
                            {GetCookie("userType") === "unemployed" && (
                              <li>
                                <a href="/create-lf-job-post">
                                  Create looking for job post
                                </a>
                              </li>
                            )}
                            {GetCookie("userType") === "employer" && (
                              <li>
                                <a href="/create-job-post">Create job post</a>
                              </li>
                            )}
                            <li>
                              <a href="/job-listing">
                                List looking for job posts
                              </a>
                            </li>
                            <li>
                              <a href="/job-listing-employer">List job posts</a>
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
                        {GetCookie("auth") !== undefined && (
                          <li>
                            <a href="">My Cre-Resume</a>
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
                                <a href="/job-listing">
                                  List looking for job posts
                                </a>
                              </li>
                              <li>
                                <a href="/job-listing-employer">
                                  List job posts
                                </a>
                              </li>
                            </ul>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    {GetCookie("auth") === undefined ? (
                      <>
                        <a href="/register" className="btn head-btn1">
                          Register
                        </a>
                        <a href="/login" className="btn head-btn2">
                          Login
                        </a>
                      </>
                    ) : (
                      <a
                        href="/"
                        className="btn head-btn1"
                        onClick={() =>
                          SetCookie(
                            "auth",
                            null,
                            "Thu, 01 Jan 1970 00:00:01 GMT"
                          )
                        }
                      >
                        Logout
                      </a>
                    )}
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
