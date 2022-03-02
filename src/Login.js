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

export default function Login() {
  return (
    <body>
      <main>
        <div className="container login-container">
          <div className="row">
            <div
              className="col-md-6 login-form-1"
              style={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadiues: "15px",
              }}
            >
              <form action="">
                <h3>Unemployed User Login</h3>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email *"
                    // value=""
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    //value=""
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit" /*value="Login"*/
                  />
                </div>
              </form>
            </div>
            <div
              className="col-md-6 login-form-2"
              style={{
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
            >
              <div className="login-logo">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              </div>
              <form action="">
                <h3>Employer User Login</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email *"
                    // value=""
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    //value=""
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit" /*value="Login"*/
                  />
                </div>
              </form>
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
