import React, { useState } from "react";
import "./assets/css/bootstrap.min.css";
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

export default function CreateCV() {
  const [stage, setStage] = useState(1);
  const [nameAndSurname, setNameAndSurname] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <body>
      <main>
        <div
          className="container-fluid"
          style={{
            fontFamily: "Muli,sans-serif !important",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div
                className="card px-10 pt-4 pb-0 mt-3 mb-3"
                style={{
                  padding: "10px",
                }}
              >
                <h2 id="heading">Create your CV</h2>
                <p>Fill all form field to go to next step</p>
                <form id="msform">
                  <ul id="progressbar">
                    <li className="active" id="personal1">
                      <strong>Personal</strong>
                    </li>
                    <li className={stage > 1 ? "active" : ""} id="experience">
                      <strong>Experience</strong>
                    </li>
                    <li className={stage > 2 ? "active" : ""} id="social-media">
                      <strong>Social Media</strong>
                    </li>
                    <li className={stage > 3 ? "active" : ""} id="confirm1">
                      <strong>Finish</strong>
                    </li>
                  </ul>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${25 * stage}%` }}
                    ></div>
                  </div>{" "}
                  <br />
                  {stage === 1 && (
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-7">
                            <h2 className="fs-title">Personal Information:</h2>
                          </div>
                          <div className="col-5">
                            <h2 className="steps">Step 1 - 4</h2>
                          </div>
                        </div>
                        <label className="fieldlabels">
                          Name and Surname: *
                        </label>
                        <input
                          type="text"
                          name="nameSurname"
                          placeholder="Name and Surname *"
                          onChange={(e) =>
                            e.target.value.match("^[a-zA-Z ]*$") != null
                              ? setNameAndSurname(e.target.value)
                              : ""
                          }
                          value={nameAndSurname}
                        />
                        <label className="fieldlabels">Phone Number: *</label>
                        <input
                          type="number"
                          name="phoneNumber"
                          placeholder="Phone Number *"
                        />
                        <label className="fieldlabels">Your Hobbies: *</label>
                        <input
                          type="text"
                          name="hobbies"
                          placeholder="Hobbis"
                          onChange={(e) =>
                            e.target.value.match("^[a-zA-Z ]*$") != null
                              ? setHobbies(e.target.value)
                              : ""
                          }
                          value={hobbies}
                        />
                        <label className="fieldlabels">
                          Upload Your Photo:
                        </label>
                        <input type="file" name="pic" accept="image/*" />
                      </div>{" "}
                      <button
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={() => setStage(stage + 1)}
                      >
                        Next
                      </button>
                    </fieldset>
                  )}
                  {stage === 2 && (
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-7">
                            <h2 className="fs-title">
                              Experience Information:
                            </h2>
                          </div>
                          <div className="col-5">
                            <h2 className="steps">Step 2 - 4</h2>
                          </div>
                        </div>
                        <label className="fieldlabels">
                          Graduated Schools: *
                        </label>
                        <textarea type="text" name="educationPasr">
                          {" "}
                        </textarea>
                        <label className="fieldlabels">
                          Job Experiences: *
                        </label>
                        <textarea type="text" name="pastExperience">
                          {" "}
                        </textarea>
                      </div>{" "}
                      <button
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={() => setStage(stage + 1)}
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={() => setStage(stage - 1)}
                      >
                        Previous
                      </button>
                    </fieldset>
                  )}
                  {stage === 3 && (
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-7">
                            <h2 className="fs-title">Image Upload:</h2>
                          </div>
                          <div className="col-5">
                            <h2 className="steps">Step 3 - 4</h2>
                          </div>
                        </div>
                        <label className="fieldlabels">Github: </label>
                        <input type="text" name="github" placeholder="Github" />
                        <label className="fieldlabels">Linkedin: </label>
                        <input
                          type="password"
                          name="linkedin"
                          placeholder="Linkedin"
                        />
                        <label className="fieldlabels">
                          Other Social Media Link:{" "}
                        </label>
                        <input
                          type="password"
                          name="socialMedia"
                          placeholder="Social Media"
                        />
                      </div>{" "}
                      <button
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Submit"
                        onClick={() => setStage(stage + 1)}
                      >
                        Next
                      </button>{" "}
                      <button
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={() => setStage(stage - 1)}
                      >
                        Previous
                      </button>
                    </fieldset>
                  )}
                  {stage === 4 && (
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-7">
                            <h2 className="fs-title">Finish:</h2>
                          </div>
                          <div className="col-5">
                            <h2 className="steps">Step 4 - 4</h2>
                          </div>
                        </div>{" "}
                        <br />
                        <br />
                        <h2 className="purple-text text-center">
                          <strong>CV Succesfully created !</strong>
                        </h2>{" "}
                        <br />
                      </div>
                    </fieldset>
                  )}
                </form>
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
