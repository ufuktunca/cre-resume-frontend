import React, { useState, useEffect } from "react";
import { GetJobPostsHandler } from "./api/jobPost";

export default function JobListing() {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [jobCategoryOpen, setJobCategoryOpen] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);

  const getJobPosts = async () => {
    const response = await GetJobPostsHandler("unemployed");
    if (response.status == 200) {
      setJobPosts(response.data);
    }
  };

  useEffect(() => {
    getJobPosts();
  }, []);

  return (
    <body>
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center jobImage"
            style={{
              backgroundSize: "contain",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>List looking for job posts</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="job-listing-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="row">
                  <div className="col-12">
                    <div className="small-section-tittle2 mb-45">
                      <div className="ion">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="12px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(27, 207, 107)"
                            d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                          />
                        </svg>
                      </div>
                      <h4>Filter Jobs</h4>
                    </div>
                  </div>
                </div>
                <div className="job-category-listing mb-50">
                  <div className="single-listing">
                    <div className="small-section-tittle2">
                      <h4>Job Category</h4>
                    </div>
                    <div className="select-job-items2">
                      <div
                        className={
                          jobCategoryOpen ? "nice-select open" : "nice-select"
                        }
                        tabIndex="0"
                        onClick={() => setJobCategoryOpen(!jobCategoryOpen)}
                      >
                        <span className="current">Categories</span>
                        <ul className="list">
                          <li data-value="" className="option selected focus">
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
                  </div>
                  <div className="single-listing">
                    <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                      <div className="small-section-tittle2">
                        <h4>Filter Jobs</h4>
                      </div>
                      <div className="widgets_inner">
                        <div className="range_item">
                          <span className="irs js-irs-0">
                            <span className="irs">
                              <span className="irs-line" tabIndex="-1">
                                <span className="irs-line-left"></span>
                                <span className="irs-line-mid"></span>
                                <span className="irs-line-right"></span>
                              </span>
                              <span
                                className="irs-min"
                                style={{ visibility: "hidden" }}
                              >
                                tk. 0
                              </span>
                              <span
                                className="irs-max"
                                style={{ visibility: "visible" }}
                              >
                                tk. 1.000
                              </span>
                              <span
                                className="irs-from"
                                style={{ visibility: "visible", left: "0%" }}
                              >
                                tk. 0
                              </span>
                              <span
                                className="irs-to"
                                style={{
                                  visibility: "visible",
                                  left: "35.2601%",
                                }}
                              >
                                tk. 500
                              </span>
                              <span
                                className="irs-single"
                                style={{
                                  visibility: "hidden",
                                  left: "4.33526%",
                                }}
                              >
                                tk. 0 - tk. 500
                              </span>
                            </span>
                            <span className="irs-grid"></span>
                            <span
                              className="irs-bar"
                              style={{ left: "4.33526%", width: "45.6647%" }}
                            ></span>
                            <span
                              className="irs-shadow shadow-from"
                              style={{ display: "none" }}
                            ></span>
                            <span
                              className="irs-shadow shadow-to"
                              style={{ display: "none" }}
                            ></span>
                            <span
                              className="irs-slider from"
                              style={{ left: "0%" }}
                            ></span>
                            <span
                              className="irs-slider to type_last"
                              style={{ left: "45.6647%" }}
                            ></span>
                          </span>
                          <input
                            type="text"
                            className="js-range-slider irs-hidden-input"
                            value=""
                            readOnly=""
                          />
                          <div className="d-flex align-items-center">
                            <div className="price_text">
                              <p>Price :</p>
                            </div>
                            <div className="price_value d-flex justify-content-center">
                              <input
                                type="text"
                                className="js-input-from"
                                id="amount"
                                readOnly=""
                                value={100}
                              />
                              <span>to</span>
                              <input
                                type="text"
                                className="js-input-to"
                                id="amount"
                                readOnly=""
                                value={1000}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8">
                <section className="featured-job-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="count-job mb-35">
                          <span>{jobPosts.length} Jobs found</span>
                          <div className="select-job-items">
                            <span>Sort by</span>
                            <div
                              className={
                                sortByOpen ? "nice-select open" : "nice-select"
                              }
                              tabIndex="0"
                              onClick={() => setSortByOpen(!sortByOpen)}
                            >
                              <span className="current">None</span>
                              <ul className="list">
                                <li
                                  data-value=""
                                  className="option selected focus"
                                >
                                  None
                                </li>
                                <li data-value="" className="option">
                                  job list
                                </li>
                                <li data-value="" className="option">
                                  job list
                                </li>
                                <li data-value="" className="option">
                                  job list
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a href="#">
                            <img
                              src="./Doc/img/apple.jpg"
                              width="75"
                              height="75"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="job-tittle job-tittle2">
                          <a href="#">
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
                      <form action="">
                        <div className="items-link items-link2 f-right">
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
