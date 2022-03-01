import React from "react";

export default function Contact() {
  return (
    <body>
      <header>
        <div class="header-area header-transparrent">
          <div class="headder-top header-sticky">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-2">
                  <div class="logo">
                    <a
                      href="index.html"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./Doc/img/logo.png"
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
                <div class="col-lg-9 col-md-9">
                  <div class="menu-wrapper">
                    <div class="main-menu">
                      <nav class="d-none d-lg-block">
                        <ul id="navigation">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="#">Jobs</a>
                            <ul class="submenu">
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
                    <div class="header-btn d-none f-right d-lg-block">
                      <a href="register.html" class="btn head-btn1">
                        Register
                      </a>
                      <a href="login.html" class="btn head-btn2">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="slider-area ">
        <div
          class="single-slider section-overly slider-height2 d-flex align-items-center contactImage"
          style={{ backgroundSize: "contain" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder=" Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button
                    type="submit"
                    class="button button-contactForm boxed-btn"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-home"></i>
                </span>
                <div class="media-body">
                  <h3>İstanbul Türkiye.</h3>
                  <p>Istanbul Aydin University</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-tablet"></i>
                </span>
                <div class="media-body">
                  <h3>+90 552 547 54 54</h3>
                  <p>Every day you can call</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-email"></i>
                </span>
                <div class="media-body">
                  <h3>uftunca@gmail.com</h3>
                  <p>You can mail any time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-bottom-area footer-bg">
          <div class="container">
            <div class="footer-border">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-xl-10 col-lg-10 ">
                  <div class="footer-copy-right">
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
      <script src="./assets/js/jquery.scrollUp.min.js"></script>
      <script src="./assets/js/jquery.nice-select.min.js"></script>
      <script src="./assets/js/jquery.sticky.js"></script>
      <script src="./assets/js/jquery.magnific-popup.js"></script>
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
