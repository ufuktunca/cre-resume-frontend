import React, { useState, useEffect } from "react";
import { GetJobPostsHandler } from "./api/jobPost";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
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
import { height } from "@mui/system";

function valuetext(value) {
  return `${value}°C`;
}

export default function JobListingEmployer() {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [jobCategoryOpen, setJobCategoryOpen] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [value2, setValue2] = React.useState([3000, 15000]);
  const [sort, setSort] = useState({ name: "None", type: "" });
  const [category, setCategory] = useState({ name: "Categories", type: "" });
  const [limit, setLimit] = useState(0);

  const minDistance = 10;

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const getJobPosts = async () => {
    const response = await GetJobPostsHandler("employer");
    if (response.status == 200) {
      setJobPosts(response.data);
    }
  };

  const calculateTime = (time) => {
    const date1 = new Date();
    const date2 = new Date(time);
    return Math.round((date1 - date2) / (1000 * 3600));
  };

  useEffect(() => {
    getJobPosts();
  }, []);

  return (
    <body>
      <main>
        <div class="slider-area ">
          <div
            class="single-slider section-overly slider-height2 d-flex align-items-center jobListingEmployerList"
            style={{ backgroundSize: "contain" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>List job posts</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="job-listing-area pt-120 pb-120">
          <div class="container">
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
                        <span className="current">{category.name}</span>
                        <ul className="list">
                          <li
                            data-value=""
                            className="option selected focus"
                            onClick={() =>
                              setCategory({ name: "Categories", type: "" })
                            }
                          >
                            Categories
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Frontend Developer",
                                type: "Frontend Developer",
                              })
                            }
                          >
                            Frontend Developer
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Assistant",
                                type: "Assistant",
                              })
                            }
                          >
                            Assistant
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Mobile Developer",
                                type: "Mobile Developer",
                              })
                            }
                          >
                            Mobile Developer
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Full Stack Developer",
                                type: "Full Stack Developer",
                              })
                            }
                          >
                            Full Stack Developer
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Data Scientist",
                                type: "Data Scientist",
                              })
                            }
                          >
                            Data Scientist
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({ name: "Devops", type: "Devops" })
                            }
                          >
                            Devops
                          </li>
                          <li
                            data-value=""
                            className="option"
                            onClick={() =>
                              setCategory({
                                name: "Product Owner",
                                type: "Product Owner",
                              })
                            }
                          >
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
                          <Box sx={{ width: 175 }}>
                            <Slider
                              getAriaLabel={() => "Minimum distance shift"}
                              value={value2}
                              onChange={handleChange2}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                              disableSwap
                              min={0}
                              max={50000}
                            />
                          </Box>
                          <input
                            type="text"
                            className="js-range-slider irs-hidden-input"
                            value="600"
                            readOnly=""
                            onClick={(e) => console.log(e.target.value)}
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
                                value={value2[0]}
                                onChange={(e) =>
                                  setValue2([e.target.value, value2[1]])
                                }
                              />
                              <span>to</span>
                              <input
                                type="text"
                                className="js-input-to"
                                id="amount"
                                readOnly=""
                                value={value2[1]}
                                onChange={(e) =>
                                  setValue2([value2[0], e.target.value])
                                }
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
                              <span className="current">{sort.name}</span>
                              <ul className="list">
                                <li
                                  data-value=""
                                  className="option selected focus"
                                  onClick={() =>
                                    setSort({ name: "None", type: "" })
                                  }
                                >
                                  None
                                </li>
                                <li
                                  data-value=""
                                  className="option"
                                  onClick={() =>
                                    setSort({ name: "Salary", type: "salary" })
                                  }
                                >
                                  Salary
                                </li>
                                <li
                                  data-value=""
                                  className="option"
                                  onClick={() =>
                                    setSort({
                                      name: "Location",
                                      type: "location",
                                    })
                                  }
                                >
                                  Location
                                </li>
                                <li
                                  data-value=""
                                  className="option"
                                  onClick={() =>
                                    setSort({
                                      name: "Company",
                                      type: "company",
                                    })
                                  }
                                >
                                  Company
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {jobPosts.map((post, index) => {
                      return index < limit ? (
                        <div className="single-job-items mb-30">
                          <div className="job-items">
                            <div className="company-img">
                              <a href="#">
                                <img
                                  src={`data:image/png;base64,${post.image}`}
                                  width="75"
                                  height="75"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="job-tittle job-tittle2">
                              <a href="#">
                                <h4>{post.title}</h4>
                              </a>
                              <ul>
                                <li>{post.company}</li>
                                <li>
                                  <i className="fas fa-map-marker-alt"></i>
                                  {post.location}
                                </li>
                                <li>
                                  {Math.abs(post.salary - 1500)} -{" "}
                                  {post.salary + 1500}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form action="">
                            <div className="items-link items-link2 f-right">
                              <a
                                onClick={() => calculateTime(post.createdAt)}
                                style={{ cursor: "pointer" }}
                              >
                                Apply
                              </a>
                              <span>
                                {calculateTime(post.createdAt) > 24
                                  ? `${Math.round(
                                      calculateTime(post.createdAt) / 24
                                    )} days ago`
                                  : `${calculateTime(
                                      post.createdAt
                                    )} hours ago`}{" "}
                                hours ago
                              </span>
                            </div>
                          </form>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                    {limit < jobPosts.length && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#8b92dd",
                            border: "none",
                            height: "25%",
                            fontFamily: "Muli, sans-serif",
                            cursor: "pointer",
                            width: "350px",
                            height: "40px",
                          }}
                          onClick={() => setLimit(limit + 10)}
                        >
                          Show More
                        </button>
                      </div>
                    )}
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
