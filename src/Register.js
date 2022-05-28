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
import { RegisterHandler } from "./api/user";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("employer");
  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date("01-01-1980"));

  var passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/g;

  const register = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("confirmPasswordError");
      setErrorMessage("Your passwords doesnt match please check them again!");
      return;
    }

    if (passwordRegex.exec(password) == null) {
      setError("regexError");
      setErrorMessage(
        "Your password should contain minimum eight characters, at least one letter, one number and one special character!"
      );
      return;
    }

    let bDate = String(startDate).split(" ");

    if (bDate[3] > "2005") {
      setError("bDateError");
      setErrorMessage("You need to be older than 18 years old.");
      return;
    }

    const resp = await RegisterHandler(
      name,
      surname,
      email,
      password,
      userType,
      bDate[1] + " " + bDate[2] + " " + bDate[3]
    );

    if (resp.status == 400) {
      setError("emailError");
      setErrorMessage(
        "This email is already registered. Please try with another email."
      );
    }

    window.location.href = "/login?registered=true";
    return;
  };

  console.log(startDate);

  return (
    <body>
      <main>
        <Snackbar open={error !== 0} autoHideDuration={6000}>
          <Alert
            onClose={() => setError(0)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6 login-form-2"
              style={{
                borderRadius: "15px",
              }}
            >
              <form action="" onSubmit={register}>
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
                    minLength={3}
                    value={name}
                    required
                    onChange={(e) =>
                      e.target.value.match("^[a-zA-ZğüşöçİĞÜŞÖÇ ]*$") != null
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
                    name="surname"
                    required
                    minLength={3}
                    value={surname}
                    onChange={(e) =>
                      e.target.value.match("^[a-zA-ZğüşöçİĞÜŞÖÇ ]*$") != null
                        ? setSurname(e.target.value)
                        : ""
                    }
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
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    value={email}
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    minLength={8}
                    value={password}
                    required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
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
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password *"
                    value={confirmPassword}
                    required
                    minLength={8}
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" /*value=""*/>
                    Birth Date *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div
                    style={{ backgroundColor: "white" }}
                    className="datePicker"
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDateFns}
                      style={{ width: "100%" }}
                    >
                      <DatePicker
                        value={startDate}
                        onChange={(newValue) => {
                          setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        style={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    checked={userType === "employer"}
                    onClick={() => setUserType("employer")}
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
                    checked={userType === "unemployed"}
                    onClick={() => setUserType("unemployed")}
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
