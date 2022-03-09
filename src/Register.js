import React, { useState } from "react";
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

export default function Register() {
  const [name, setName] = useState("");

  return (
    <body>
      <main>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6 login-form-2"
              style={{
                borderRadius: "15px",
              }}
            >
              <form action="">
                <h3
                  style={{
                    fontSize: "35px",
                    textAlign: "center",
                    marginBottom: "12%",
                    color: "#fff",
                  }}
                >
                  Register
                </h3>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Name *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                    value={name}
                    onChange={(e) =>
                      e.target.value.match("^[a-zA-Z ]*$") != null
                        ? setName(e.target.value)
                        : ""
                    }
                    name="name"
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Surname *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Surname *"
                    /*value=""*/
                    name="surname"
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Email *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email *"
                    /*value=""*/
                    name="email"
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Password *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    /*value=""*/
                    name="password"
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Confirm Password *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password *"
                    /*value=""*/
                    name="confirmPassword"
                  />
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    /*value="employer"*/
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineRadio1"
                    // style="color: white;font-size: 17px;"
                    style={{
                      color: "white",
                      fontSize: "17px",
                    }}
                  >
                    Employer
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    //value="unemployed"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineRadio2"
                    // style="color: white;font-size: 17px;"
                    style={{
                      color: "white",
                      fontSize: "17px",
                    }}
                  >
                    Unemployed
                  </label>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <input
                    type="submit"
                    className="btnSubmit" /*value="Register"*/
                  />
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
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
