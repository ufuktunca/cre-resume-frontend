import React, { useState } from "react";
import { GetCookie, SetCookie } from "./api/user";

export default function Header() {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [myCreResume, setMyCreResume] = useState(false);

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
                        {GetCookie("auth") !== undefined && (
                          <li>
                            <a href="">My Cre-Resume</a>
                            <ul className="submenu">
                              <li>
                                <a href="/my-cvs">My CVs</a>
                              </li>
                              {GetCookie("userType") === "unemployed" && (
                                <>
                                  <li>
                                    <a href="/my-lf-job-posts">
                                      My Looking For Job Posts
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/my-applies">My Applies</a>
                                  </li>
                                </>
                              )}
                              {GetCookie("userType") === "employer" && (
                                <li>
                                  <a href="/my-job-posts">My Job Posts</a>
                                </li>
                              )}
                            </ul>
                          </li>
                        )}
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
                        onClick={() => {
                          SetCookie(
                            "auth",
                            null,
                            "Thu, 01 Jan 1970 00:00:01 GMT"
                          );

                          SetCookie(
                            "userType",
                            null,
                            "Thu, 01 Jan 1970 00:00:01 GMT"
                          );
                        }}
                      >
                        Logout
                      </a>
                    )}
                  </div>
                  <div className="mobile_menu d-block d-lg-none">
                    <div className="slicknav_menu">
                      <a
                        href="#"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                        className="slicknav_btn slicknav_open"
                        style={{ outline: "none" }}
                        onClick={() => setMobileHeaderOpen(!mobileHeaderOpen)}
                      >
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      {mobileHeaderOpen && (
                        <ul
                          className="slicknav_nav"
                          aria-hidden="false"
                          role="menu"
                          style={{ display: "block" }}
                        >
                          <li>
                            <a href="/" role="menuitem" tabindex="0">
                              Home
                            </a>
                          </li>
                          <li className="slicknav_collapsed slicknav_parent">
                            <a
                              href="#"
                              role="menuitem"
                              aria-haspopup="true"
                              tabindex="0"
                              className="slicknav_item slicknav_row"
                              style={{ outline: "none" }}
                              onClick={() => setJobs(!jobs)}
                            >
                              <a tabindex="0">Jobs</a>
                              <span className="slicknav_arrow">
                                {jobs ? "-" : "+"}
                              </span>
                            </a>
                            {jobs && (
                              <ul
                                className="submenu slicknav_hidden"
                                role="menu"
                                aria-hidden="true"
                              >
                                {GetCookie("userType") === "unemployed" && (
                                  <li>
                                    <a href="/create-lf-job-post">
                                      Create looking for job post
                                    </a>
                                  </li>
                                )}
                                {GetCookie("userType") === "employer" && (
                                  <li>
                                    <a href="/create-job-post">
                                      Create job post
                                    </a>
                                  </li>
                                )}
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
                            )}
                          </li>
                          <li>
                            <a
                              href="createCV.html"
                              role="menuitem"
                              tabindex="0"
                            >
                              Create CV
                            </a>
                          </li>
                          {GetCookie("auth") !== undefined && (
                            <li className="slicknav_collapsed slicknav_parent">
                              <a
                                href="#"
                                role="menuitem"
                                aria-haspopup="true"
                                tabindex="0"
                                className="slicknav_item slicknav_row"
                                style={{ outline: "none" }}
                                onClick={() => setMyCreResume(!myCreResume)}
                              >
                                <a tabindex="0">My Cre-Resume</a>
                                <span className="slicknav_arrow">
                                  {myCreResume ? "-" : "+"}
                                </span>
                              </a>
                              {myCreResume && (
                                <ul
                                  className="submenu slicknav_hidden"
                                  role="menu"
                                  aria-hidden="true"
                                >
                                  <li>
                                    <a href="/my-cvs">My CVs</a>
                                  </li>
                                  {GetCookie("userType") === "unemployed" && (
                                    <>
                                      <li>
                                        <a href="/my-lf-job-posts">
                                          My Looking For Job Posts
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/my-applies">My Applies</a>
                                      </li>
                                    </>
                                  )}
                                  {GetCookie("userType") === "employer" && (
                                    <li>
                                      <a href="/my-job-posts">My Job Posts</a>
                                    </li>
                                  )}
                                </ul>
                              )}
                            </li>
                          )}
                          <li>
                            <a href="/about" role="menuitem" tabindex="0">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="/contact" role="menuitem" tabindex="0">
                              Contact
                            </a>
                          </li>
                          {GetCookie("auth") === undefined ? (
                            <>
                              <li>
                                <a href="/login" role="menuitem" tabindex="0">
                                  Login
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/register"
                                  role="menuitem"
                                  tabindex="0"
                                >
                                  Register
                                </a>
                              </li>
                            </>
                          ) : (
                            <li>
                              <a
                                href="/"
                                role="menuitem"
                                tabindex="0"
                                onClick={() => {
                                  SetCookie(
                                    "auth",
                                    null,
                                    "Thu, 01 Jan 1970 00:00:01 GMT"
                                  );

                                  SetCookie(
                                    "userType",
                                    null,
                                    "Thu, 01 Jan 1970 00:00:01 GMT"
                                  );
                                }}
                              >
                                Logout
                              </a>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
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
