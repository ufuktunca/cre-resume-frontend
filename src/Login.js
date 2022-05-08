import React, { useState, useEffect } from "react";
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
import {
  LoginHandler,
  SetCookie,
  ReSendHandler,
  ActivationHandler,
} from "./api/user";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [employerPassword, setEmployerPassword] = useState("");
  const [error, setError] = useState(true);
  const [registered, setRegistered] = useState("");

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let userID = params.get("userID");
    activation(userID);
  }, []);

  const reSend = async () => {
    const result = await ReSendHandler(email == "" ? employerEmail : email);
    if (result.status == 200) {
      setError("mailSend");
    } else {
      setError("unkown");
    }
  };

  const activation = async (userID) => {
    const result = await ActivationHandler(userID);
    if (result.status == 200) {
      setRegistered("true");
    }
  };

  const login = async (e, email, password, loginType) => {
    e.preventDefault();
    const result = await LoginHandler(email, password, loginType);

    if (result.status != 200) {
      setError(result.status);
      return;
    }

    SetCookie(
      "auth",
      result.data.token,
      new Date(new Date().getTime() + 60 * 60 * 59 * 55 * 12).toGMTString()
    );
    SetCookie(
      "userType",
      loginType,
      new Date(new Date().getTime() + 60 * 60 * 59 * 55 * 12).toGMTString()
    );
    window.location.href = "/";
  };

  return (
    <body>
      <main>
        <Snackbar open={error == 500} autoHideDuration={6000}>
          <Alert
            onClose={() => setError(0)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Your password or email is not correct !!!
          </Alert>
        </Snackbar>
        <Snackbar open={registered == "true"} autoHideDuration={6000}>
          <Alert
            onClose={() => setRegistered("")}
            severity="success"
            sx={{ width: "100%" }}
          >
            You have successfully registered please check your email for
            actiovation mail.
          </Alert>
        </Snackbar>
        <Snackbar open={error == 401} autoHideDuration={6000}>
          <Alert
            onClose={() => setError(0)}
            severity="warning"
            sx={{ width: "100%" }}
          >
            You need to activate your account. If you want to to re send email
            please
            <div
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => reSend()}
            >
              click here
            </div>
          </Alert>
        </Snackbar>
        <div className="container login-container">
          <div className="row">
            <div
              className="col-md-6 login-form-1"
              style={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadiues: "15px",
              }}
            >
              <form
                action=""
                style={{
                  padding: "0px 12%",
                }}
                onSubmit={(e) => login(e, email, password, "unemployed")}
              >
                <h3>Unemployed User Login</h3>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit"
                    style={{ cursor: "pointer" }}
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
              <form
                action=""
                style={{
                  padding: "0px 12%",
                }}
                onSubmit={(e) =>
                  login(e, employerEmail, employerPassword, "employer")
                }
              >
                <h3>Employer User Login</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email *"
                    value={employerEmail}
                    name="email"
                    onChange={(e) => setEmployerEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    value={employerPassword}
                    onChange={(e) => setEmployerPassword(e.target.value)}
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit"
                    style={{ cursor: "pointer" }}
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
