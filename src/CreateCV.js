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
import FileBase64 from "react-file-base64";
import { CVHandler } from "./api/cv";

export default function CreateCV() {
  const [stage, setStage] = useState(1);
  const [nameAndSurname, setNameAndSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState([
    { startDate: "", endDate: "", description: "", school: "" },
  ]);
  const [experience, setExperience] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState("");
  const [phoenNumber, setPhoneNumber] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [photo, setPhoto] = useState("");
  const [cvName, setCVName] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

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
      case "school":
        educations[index].school = value;
        break;
      default:
        break;
    }
    setEducation(educations);
  };

  const setLanguageVariable = (index, variable, value) => {
    let tempLanguages = [...languages];
    switch (variable) {
      case "language":
        tempLanguages[index].language = value;
        break;
      case "level":
        tempLanguages[index].level = value;
        break;
      default:
        break;
    }
    setLanguages(tempLanguages);
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
    e.preventDefault();
    setStage(stage + 1);
  };

  const createCV = async () => {
    const result = await CVHandler(
      nameAndSurname,
      cvName,
      aboutMe,
      jobTitle,
      phoenNumber,
      email,
      hobbies,
      photo,
      education,
      experience,
      github,
      linkedin,
      socialMediaLinks,
      languages,
      skills
    );
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
                              e.target.value.match("^[a-zA-ZğüşöçİĞÜŞÖÇ ]*$") !=
                              null
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
                            value={phoenNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                          <label className="fieldlabels">About Me:</label>
                          <textarea
                            placeholder="About Me"
                            value={aboutMe}
                            onChange={(e) => setAboutMe(e.target.value)}
                          />
                          <label
                            className="fieldlabels"
                            style={{
                              marginRight: "210px",
                              marginBottom: "28px",
                            }}
                          >
                            Languages:
                          </label>
                          {languages.map((language, index) => (
                            <div style={{ display: "flex" }}>
                              <input
                                type="text"
                                placeholder="Language"
                                required
                                onChange={(e) =>
                                  e.target.value.match(
                                    "^[a-zA-ZğüşöçİĞÜŞÖÇ ]*$"
                                  ) != null
                                    ? setLanguageVariable(
                                        index,
                                        "language",
                                        e.target.value
                                      )
                                    : ""
                                }
                                value={language.language}
                              />
                              <div
                                className={
                                  categoryOpen === index
                                    ? "nice-select open"
                                    : "nice-select"
                                }
                                onClick={() =>
                                  setCategoryOpen(
                                    categoryOpen === index ? "" : index
                                  )
                                }
                                tabindex="0"
                              >
                                <span className="current">
                                  {language.level && language.level != ""
                                    ? language.level
                                    : "Levels"}
                                </span>
                                <ul className="list">
                                  <li
                                    data-value=""
                                    className="option selected"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "A1")
                                    }
                                  >
                                    A1
                                  </li>
                                  <li
                                    data-value=""
                                    className="option"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "A2")
                                    }
                                  >
                                    A2
                                  </li>
                                  <li
                                    data-value=""
                                    className="option"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "B1")
                                    }
                                  >
                                    B1
                                  </li>
                                  <li
                                    data-value=""
                                    className="option"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "B2")
                                    }
                                  >
                                    B2
                                  </li>
                                  <li
                                    data-value=""
                                    className="option"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "C1")
                                    }
                                  >
                                    C1
                                  </li>
                                  <li
                                    data-value=""
                                    className="option"
                                    onClick={() =>
                                      setLanguageVariable(index, "level", "C2")
                                    }
                                  >
                                    C2
                                  </li>
                                </ul>
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="addMoreButton"
                            style={{ marginTop: "20px" }}
                            onClick={() =>
                              setLanguages([
                                ...languages,
                                { language: "", level: "" },
                              ])
                            }
                            disabled={
                              languages[languages.length - 1] != undefined &&
                              (languages[languages.length - 1].language == "" ||
                                languages[languages.length - 1].level == "")
                            }
                          >
                            Add More
                          </button>
                          <label
                            className="fieldlabels"
                            style={{
                              marginRight: "344px",
                              marginBottom: "28px",
                              marginTop: "-3px",
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
                                e.target.value.match(
                                  "^[a-zA-ZğüşöçİĞÜŞÖÇ ]*$"
                                ) != null
                                  ? setHobbiesIndex(index, e.target.value)
                                  : ""
                              }
                              value={hobbie}
                            />
                          ))}
                          <button
                            type="button"
                            className="addMoreButton"
                            style={{ marginTop: "0px" }}
                            onClick={() => setHobbies([...hobbies, ""])}
                            disabled={hobbies[hobbies.length - 1] == ""}
                          >
                            Add More
                          </button>
                          <label
                            className="fieldlabels"
                            style={{ marginTop: "10px" }}
                          >
                            Upload Your Photo:
                          </label>
                          <FileBase64
                            onDone={(e) => setPhoto(e.base64.split(",")[1])}
                          />
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
                                <input
                                  type="text"
                                  name="educationPasr"
                                  placeholder="School"
                                  id="educationSchool"
                                  required
                                  value={education.school}
                                  onChange={(e) =>
                                    setEducationVariable(
                                      index,
                                      "school",
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
                                  department: "",
                                  school: "",
                                },
                              ])
                            }
                            disabled={
                              education[education.length - 1].startDate == "" ||
                              education[education.length - 1].endDate == "" ||
                              education[education.length - 1].school == "" ||
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
                              (experience[experience.length - 1].startDate ==
                                "" ||
                                experience[experience.length - 1].endDate ==
                                  "" ||
                                experience[experience.length - 1].company ==
                                  "" ||
                                experience[experience.length - 1].title == "" ||
                                experience[experience.length - 1].description ==
                                  "")
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
                          <label className="fieldlabels">Name of CV: *</label>
                          <input
                            type="text"
                            placeholder="Name of CV"
                            required
                            value={cvName}
                            onChange={(e) => setCVName(e.target.value)}
                          />
                          <label className="fieldlabels">Github: </label>
                          <input
                            type="text"
                            name="github"
                            placeholder="Github"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                          />
                          <label className="fieldlabels">Linkedin: </label>
                          <input
                            name="linkedin"
                            placeholder="Linkedin"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
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
                          value="Finish"
                          className="next action-button"
                          onClick={() => createCV()}
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
