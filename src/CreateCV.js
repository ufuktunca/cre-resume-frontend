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
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState([
    { startDate: "", endDate: "", description: "", department: "" },
  ]);
  const [experience, setExperience] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);

  const setEducationVariable = (index, variable, value) => {
    let educations = [...education];
    switch (variable) {
      case "startDate":
        educations[index].startDate = value;
        break;
      case "endDate":
        educations[index].endDate = value;
        break;
      case "department":
        educations[index].department = value;
        break;
      case "description":
        educations[index].description = value;
        break;
      default:
        break;
    }
    setEducation(educations);
  };

  const setSocialMediaIndex = (index, variable) => {
    let scMedia = [...socialMediaLinks];
    scMedia[index] = variable;
    setSocialMediaLinks(scMedia);
  };

  const setHobbiesIndex = (index, variable) => {
    let hobbis = [...hobbies];
    hobbis[index] = variable;
    setHobbies(hobbis);
  };

  const setLanguagesIndex = (index, variable) => {
    let language = [...languages];
    language[index] = variable;
    setLanguages(language);
  };

  const setSkillsIndex = (index, variable) => {
    let skill = [...skills];
    skill[index] = variable;
    setSkills(skill);
  };

  const setExperienceVariable = (index, variable, value) => {
    let experiences = [...experience];
    switch (variable) {
      case "startDate":
        experiences[index].startDate = value;
        break;
      case "endDate":
        experiences[index].endDate = value;
        break;
      case "company":
        experiences[index].company = value;
        break;
      case "title":
        experiences[index].title = value;
        break;
      case "description":
        experiences[index].description = value;
        break;
      default:
        break;
    }
    setExperience(experiences);
  };

  const increseStage = (e) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    e.preventDefault();
    setStage(stage + 1);
  };

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
                <div id="msform">
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
                  <form action="" onSubmit={(e) => increseStage(e)}>
                    {stage === 1 && (
                      <div>
                        <div className="form-card">
                          <div className="row">
                            <div className="col-7">
                              <h2 className="fs-title">
                                Personal Information:
                              </h2>
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
                            placeholder="Name and Surname *"
                            onChange={(e) =>
                              e.target.value.match("^[a-zA-Z ]*$") != null
                                ? setNameAndSurname(e.target.value)
                                : ""
                            }
                            required
                            value={nameAndSurname}
                          />
                          <label className="fieldlabels">Job Title: *</label>
                          <input
                            type="text"
                            placeholder="Job Title *"
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                            value={jobTitle}
                          />
                          <label className="fieldlabels">Email: *</label>
                          <input
                            type="email"
                            placeholder="Email *"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            value={email}
                          />
                          <label className="fieldlabels">Phone Number: *</label>
                          <input
                            type="number"
                            required
                            placeholder="Phone Number *"
                          />
                          <label
                            className="fieldlabels"
                            style={{
                              marginRight: "200px",
                              marginBottom: "28px",
                            }}
                          >
                            Your Hobbies:
                          </label>
                          {hobbies.map((hobbie, index) => (
                            <input
                              type="text"
                              placeholder="Hobbie"
                              required
                              onChange={(e) =>
                                e.target.value.match("^[a-zA-Z ]*$") != null
                                  ? setHobbiesIndex(index, e.target.value)
                                  : ""
                              }
                              value={hobbie}
                            />
                          ))}
                          <button
                            type="button"
                            className="addMoreButton"
                            style={{ marginTop: "19px" }}
                            onClick={() => setHobbies([...hobbies, ""])}
                            disabled={hobbies[hobbies.length - 1] == ""}
                          >
                            Add More
                          </button>
                          <label
                            className="fieldlabels"
                            style={{
                              marginRight: "210px",
                              marginBottom: "28px",
                            }}
                          >
                            Languages:
                          </label>
                          {languages.map((hobbie, index) => (
                            <input
                              type="text"
                              placeholder="Language"
                              required
                              onChange={(e) =>
                                e.target.value.match("^[a-zA-Z ]*$") != null
                                  ? setLanguagesIndex(index, e.target.value)
                                  : ""
                              }
                              value={hobbie}
                            />
                          ))}
                          <button
                            type="button"
                            className="addMoreButton"
                            style={{ marginTop: "30px" }}
                            onClick={() => setLanguages([...languages, ""])}
                            disabled={languages[languages.length - 1] == ""}
                          >
                            Add More
                          </button>
                          <label className="fieldlabels">
                            Upload Your Photo:
                          </label>
                          <input required type="file" accept="image/*" />
                        </div>{" "}
                        <input
                          type={"submit"}
                          value="Next"
                          className="next action-button"
                        />
                      </div>
                    )}
                    {stage === 2 && (
                      <fieldset>
                        <div
                          className="form-card"
                          style={{ marginBottom: "50px" }}
                        >
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
                          <label className="fieldlabels">Education: *</label>
                          {education.map((education, index) => (
                            <>
                              <div style={{ display: "flex" }}>
                                <input
                                  placeholder="Start Date"
                                  value={education.startDate}
                                  required
                                  onChange={(e) =>
                                    setEducationVariable(
                                      index,
                                      "startDate",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  placeholder="End Date"
                                  value={education.endDate}
                                  required
                                  onChange={(e) =>
                                    setEducationVariable(
                                      index,
                                      "endDate",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <input
                                placeholder="Department"
                                value={education.department}
                                required
                                onChange={(e) =>
                                  setEducationVariable(
                                    index,
                                    "department",
                                    e.target.value
                                  )
                                }
                              />
                              <div>
                                <textarea
                                  type="text"
                                  name="educationPasr"
                                  placeholder="Description"
                                  id="educationDescription"
                                  required
                                  value={education.description}
                                  onChange={(e) =>
                                    setEducationVariable(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </>
                          ))}
                          <button
                            type="button"
                            name="next"
                            className="addMoreButton"
                            onClick={() =>
                              setEducation([
                                ...education,
                                {
                                  startDate: "",
                                  endDate: "",
                                  description: "",
                                  department: "",
                                },
                              ])
                            }
                            disabled={
                              education[education.length - 1].startDate == "" &&
                              education[education.length - 1].endDate == "" &&
                              education[education.length - 1].description ==
                                "" &&
                              education[education.length - 1].department == ""
                            }
                          >
                            Add More
                          </button>
                          <div
                            className="fieldlabels"
                            style={{ marginTop: "40px", paddingBottom: "10px" }}
                          >
                            Job Experiences:
                          </div>
                          {experience.map((exp, index) => (
                            <>
                              <div style={{ display: "flex" }}>
                                <input
                                  placeholder="Start Date"
                                  value={exp.startDate}
                                  required
                                  onChange={(e) =>
                                    setExperienceVariable(
                                      index,
                                      "startDate",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  placeholder="End Date"
                                  value={exp.endDate}
                                  required
                                  onChange={(e) =>
                                    setExperienceVariable(
                                      index,
                                      "endDate",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div style={{ display: "flex" }}>
                                <input
                                  placeholder="Company"
                                  required
                                  value={exp.company}
                                  onChange={(e) =>
                                    setExperienceVariable(
                                      index,
                                      "company",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  placeholder="Title"
                                  value={exp.title}
                                  required
                                  onChange={(e) =>
                                    setExperienceVariable(
                                      index,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <textarea
                                  type="text"
                                  name="educationPasr"
                                  required
                                  placeholder="Description"
                                  id="educationDescription"
                                  value={exp.description}
                                  onChange={(e) =>
                                    setExperienceVariable(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </>
                          ))}
                          <button
                            type="button"
                            name="next"
                            className="addMoreButton"
                            onClick={() =>
                              setExperience([
                                ...experience,
                                {
                                  startDate: "",
                                  endDate: "",
                                  company: "",
                                  title: "",
                                  description: "",
                                },
                              ])
                            }
                            disabled={
                              experience[experience.length - 1] &&
                              experience[experience.length - 1].startDate ==
                                "" &&
                              experience[experience.length - 1].endDate == "" &&
                              experience[experience.length - 1].company == "" &&
                              experience[experience.length - 1].title == "" &&
                              experience[experience.length - 1].description ==
                                ""
                            }
                          >
                            Add More
                          </button>
                          <div
                            className="fieldlabels"
                            style={{ marginTop: "40px", paddingBottom: "10px" }}
                          >
                            Skills:
                          </div>
                          {skills.map((hobbie, index) => (
                            <input
                              type="text"
                              name="skill"
                              required
                              placeholder="skill"
                              onChange={(e) =>
                                setSkillsIndex(index, e.target.value)
                              }
                              value={hobbie}
                            />
                          ))}
                          <button
                            type="button"
                            name="next"
                            className="addMoreButton"
                            style={{ marginTop: "5px" }}
                            onClick={() => setSkills([...skills, ""])}
                            disabled={skills[skills.length - 1] == ""}
                          >
                            Add More
                          </button>
                        </div>{" "}
                        <input
                          type={"submit"}
                          value="Next"
                          className="next action-button"
                        />
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
                        <div
                          className="form-card"
                          style={{ marginBottom: "50px" }}
                        >
                          <div className="row">
                            <div className="col-7">
                              <h2 className="fs-title">Image Upload:</h2>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 3 - 4</h2>
                            </div>
                          </div>
                          <label className="fieldlabels">Github: </label>
                          <input
                            type="text"
                            name="github"
                            placeholder="Github"
                          />
                          <label className="fieldlabels">Linkedin: </label>
                          <input
                            type="password"
                            name="linkedin"
                            placeholder="Linkedin"
                          />
                          <label className="fieldlabels">
                            Other Social Media Link:{" "}
                          </label>
                          {socialMediaLinks.map((link, index) => (
                            <input
                              name="socialMedia"
                              placeholder="Social Media"
                              value={link}
                              required
                              onChange={(e) =>
                                setSocialMediaIndex(index, e.target.value)
                              }
                            />
                          ))}
                          <button
                            type="button"
                            name="next"
                            style={{ marginTop: "17px" }}
                            className="addMoreButton"
                            onClick={() =>
                              setSocialMediaLinks([...socialMediaLinks, ""])
                            }
                            disabled={
                              socialMediaLinks[socialMediaLinks.length - 1] ==
                              ""
                            }
                          >
                            Add More
                          </button>
                        </div>{" "}
                        <input
                          type={"submit"}
                          value="Next"
                          className="next action-button"
                        />
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
                  </form>
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
                </div>
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
