import React from "react";
import "./assets/scss/style.scss";
import "./App.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/price_rangs.css";
import "./assets/css/slicknav.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/slick.css";
import "./assets/css/nice-select.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
//import "./Doc/css/font-awesome.min.css";
//import "./Doc/css/main.css";
//import "./Doc/css/normalize.min.css";
import "./assets/scss/style.scss";
import "./assets/scss/_apply-proces.scss";
import "./assets/scss/_blog_page.scss";
import "./assets/scss/_blog.scss";
import "./assets/scss/_bradcam.scss";
import "./assets/scss/_color.scss";
import "./assets/scss/_common.scss";
import "./assets/scss/_contact.scss";
import "./assets/scss/_cv-online.scss";
import "./assets/scss/_elements.scss";
import "./assets/scss/_extend.scss";
import "./assets/scss/_featured-Jobs.scss";
import "./assets/scss/_footer.scss";
import "./assets/scss/_h1-hero.scss";
import "./assets/scss/_headerMenu.scss";
import "./assets/scss/_job_details.scss";
import "./assets/scss/_job_listing.scss";
import "./assets/scss/_mixins.scss";
import "./assets/scss/_overlay.scss";
import "./assets/scss/_pagination.scss";
import "./assets/scss/_recent.scss";
import "./assets/scss/_services_section.scss";
import "./assets/scss/_services.scss";
import "./assets/scss/_support-company.scss";
import "./assets/scss/_team.scss";
import "./assets/scss/_testimonial.scss";
import "./assets/scss/_variables.scss";

export default function About() {
  return (
    <body>
      <header>
        <div className="header-area header-transparrent">
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  <div className="logo">
                    <a
                      href="index.html"
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
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="#">Jobs</a>
                            <ul className="submenu">
                              <li>
                                <a href="./createLookingForJobPost.html">
                                  Create looking for job post
                                </a>
                              </li>
                              <li>
                                <a href="./createJobPost.html">
                                  Create job post
                                </a>
                              </li>
                              <li>
                                <a href="job_listing.html">
                                  List looking for job posts
                                </a>
                              </li>
                              <li>
                                <a href="job_listing_employer.html">
                                  List job posts
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="createCV.html">Create CV</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-btn d-none f-right d-lg-block">
                      <a href="register.html" className="btn head-btn1">
                        Register
                      </a>
                      <a href="login.html" className="btn head-btn2">
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
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center aboutImage"
            style={{ backgroundSize: "contain" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>About us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support-company-area fix section-padding2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>What we are doing</span>
                    <h2>Find your dream job!</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      In these days we almost do all our job remotly because of
                      covid-19 period. Most of the software companies or
                      developers work remote. Also companies usually make their
                      interviews online. Becuase of that job applicants need an
                      online version of that their CV.
                    </p>
                    <p>
                      In this website you can create cv for free without any
                      subscription according to your informations. Also with
                      your created cv you can look for the posted jobs or if you
                      are an employer you can create an job posting. Also if you
                      are an employee looking for job also you can create
                      looking for job post.
                    </p>
                    <a href="./login.html" className="btn post-btn">
                      Post a job
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src={require("./Doc/img/about_us.png")} />
                  <div className="support-img-cap text-center">
                    <p>Since</p>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-10 col-lg-10 ">
                  <div className="footer-copy-right">
                    <p>
                      This template is made by{" "}
                      <a href="https://github.com/ufuktunca" target="_blank">
                        Ufuk Barış Tunca
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="./assets/js/popper.min.js"></script>
      <script src="./assets/js/bootstrap.min.js"></script>
      <script src="./assets/js/jquery.slicknav.min.js"></script>
      <script src="./assets/js/owl.carousel.min.js"></script>
      <script src="./assets/js/slick.min.js"></script>
      <script src="./assets/js/price_rangs.js"></script>
      <script src="./assets/js/wow.min.js"></script>
      <script src="./assets/js/animated.headline.js"></script>
      <script src="./assets/js/jquery.magnific-popup.js"></script>
      <script src="./assets/js/jquery.scrollUp.min.js"></script>
      <script src="./assets/js/jquery.nice-select.min.js"></script>
      <script src="./assets/js/jquery.sticky.js"></script>
      <script src="./assets/js/contact.js"></script>
      <script src="./assets/js/jquery.form.js"></script>
      <script src="./assets/js/jquery.validate.min.js"></script>
      <script src="./assets/js/mail-script.js"></script>
      <script src="./assets/js/jquery.ajaxchimp.min.js"></script>
      <script src="./assets/js/plugins.js"></script>
      <script src="./assets/js/main.js"></script>
    </body>
  );
}
