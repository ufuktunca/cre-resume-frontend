import React from "react";
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

export default function JobListingEmployer() {
  return (
    <body>
      <main>
        <div class="slider-area ">
          <div
            class="single-slider section-overly slider-height2 d-flex align-items-center jobListingEmployerList"
            style="background-size: contain;"
            style={{ backgroundSize: "contain" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hero-cap text-center">
                    <h2>List job post</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="job-listing-area pt-120 pb-120">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-4">
                <div class="row">
                  <div class="col-12">
                    <div class="small-section-tittle2 mb-45">
                      <div class="ion">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="12px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(27, 207, 107)"
                            d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                          />
                        </svg>
                      </div>
                      <h4>Filter Jobs</h4>
                    </div>
                  </div>
                </div>
                <div class="job-category-listing mb-50">
                  <div class="single-listing">
                    <div class="small-section-tittle2">
                      <h4>Job Category</h4>
                    </div>
                    <div class="select-job-items2">
                      <select name="select">
                        <option value="">Categories</option>
                        <option value="">Frontend Developer</option>
                        <option value="">Assistant</option>
                        <option value="">Mobile Developer</option>
                        <option value="">Full Stack Developer</option>
                        <option value="">Data Scientist</option>
                        <option value="">Devops</option>
                        <option value="">Product Owner</option>
                      </select>
                    </div>
                  </div>
                  <div class="single-listing">
                    <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                      <div class="small-section-tittle2">
                        <h4>Filter Jobs</h4>
                      </div>
                      <div class="widgets_inner">
                        <div class="range_item">
                          <input type="text" class="js-range-slider" value="" />
                          <div class="d-flex align-items-center">
                            <div class="price_text">
                              <p>Price :</p>
                            </div>
                            <div class="price_value d-flex justify-content-center">
                              <input
                                type="text"
                                class="js-input-from"
                                id="amount"
                                readonly
                              />
                              <span>to</span>
                              <input
                                type="text"
                                class="js-input-to"
                                id="amount"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-8">
                <section class="featured-job-area">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="count-job mb-35">
                          <span>39, 782 Jobs found</span>
                          <div class="select-job-items">
                            <span>Sort by</span>
                            <select name="select">
                              <option value="">None</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="single-job-items mb-30">
                      <div class="job-items">
                        <div class="company-img">
                          <a href="#">
                            <img
                              src="./Doc/img/apple.jpg"
                              width="75"
                              height="75"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="job-tittle job-tittle2">
                          <a href="#">
                            <h4>Digital Marketer</h4>
                          </a>
                          <ul>
                            <li>Creative Agency</li>
                            <li>
                              <i class="fas fa-map-marker-alt"></i>Athens,
                              Greece
                            </li>
                            <li>$3500 - $4000</li>
                          </ul>
                        </div>
                      </div>
                      <form action="">
                        <div class="items-link items-link2 f-right">
                          <a href="job_details.html">Apply</a>
                          <span>7 hours ago</span>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
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
    </body>
  );
}
