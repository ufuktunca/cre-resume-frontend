import { useState } from "react";
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
import "./assets/scss/style.scss";
import "./assets/scss/_variables.scss";
import Footer from "./Footer";

function Landing() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div>
      <main>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center testclass"
              // style="background-size: contain;"
              style={{
                backgroundSize: "contain",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div
                      className="hero__caption"
                      style={{ color: "#f8c630 !important" }}
                    >
                      <h1>Find your job</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div
                        className="select-form"
                        //  style="border:1px solid #3F3D56; margin-left: 4px;"
                        style={{
                          border: "1px solid #3F3D56",
                          marginLeft: "4px",
                        }}
                      >
                        <div
                          className={
                            categoryOpen ? "nice-select open" : "nice-select"
                          }
                          onClick={() => setCategoryOpen(!categoryOpen)}
                          tabindex="0"
                        >
                          <span className="current">Categories</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              Categories
                            </li>
                            <li data-value="" className="option">
                              Frontend Developer
                            </li>
                            <li data-value="" className="option">
                              Assistant
                            </li>
                            <li data-value="" className="option">
                              Mobile Developer
                            </li>
                            <li data-value="" className="option">
                              Full Stack Developer
                            </li>
                            <li data-value="" className="option">
                              Data Scientist
                            </li>
                            <li data-value="" className="option">
                              Devops
                            </li>
                            <li data-value="" className="option">
                              Product Owner
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-form">
                        <a href="#">Find job</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services section-pad-t30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>FEATURED TOURS Packages</span>
                  <h2>Browse Top Categories </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Design & Creative</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-cms"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Design & Development</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-report"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Sales & Marketing</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-app"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Mobile Application</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-helmet"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Construction</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-high-tech"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Information Technology</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-real-estate"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Real Estate</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-content"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Content Writer</a>
                    </h5>
                    <span>(0)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a href="job_listing.html" className="border-btn2">
                    Browse All Categories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120 worldImage"
          //data-background=""
          style={{
            backgroundImage: "",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1"></p>
                  <p className="pera2">Create Your Online Resume!</p>
                  <a href="./createCV.html" className="border-btn2 border-btn4">
                    Make your cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="featured-job-area feature-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>Recent Job</span>
                  <h2>Featured Jobs</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="job_details.html">
                        <img src="./assets/img/icon/job-list1.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="job_details.html">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens,
                          Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
      {/*<script src="./assets/Doc/custom.js"></script>
      <script src="./assets/Doc/jquery-1.11.0.min.js"></script>
        <script src="./assets/Doc/jquery.nav.js"></script>*/}
    </div>
  );
}

export default Landing;
