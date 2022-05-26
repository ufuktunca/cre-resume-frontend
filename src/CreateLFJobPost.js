import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { CreateJobPostHandler } from "./api/jobPost";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CVPopUp from "./components/CVPopUp";
import { GetUserCVsHandler } from "./api/cv";

export default function CreateLFJobPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [currency, setCurrency] = useState("");
  const [requestResponse, setRequestResponse] = useState({});
  const [open, setOpen] = useState(false);
  const [cvs, setCvs] = useState([]);
  const [cvId, setCVId] = useState("");

  const getUserCVs = async () => {
    const data = await GetUserCVsHandler();
    setCvs(data);
  };

  const setCVIDHandler = (cvId) => {
    setCVId(cvId);
    setOpen(false);
  };

  const createJobPost = async (e) => {
    e.preventDefault();
    const response = await CreateJobPostHandler(
      title,
      "",
      content,
      salary,
      category,
      location,
      image,
      currency,
      "unemployed",
      cvId
    );

    if (response.status == 201) {
      setTitle("");
      setContent("");
      setSalary(0);
      setCategory("");
      setLocation("");
      setImage("");
      setCurrency("");
      setRequestResponse({
        status: "success",
        message: "Job post successfully created",
      });
    } else {
      setRequestResponse({
        status: "error",
        message: "Some error occur while creating Job post!",
      });
    }
  };

  useEffect(() => {
    getUserCVs();
  }, []);

  return (
    <body>
      <main>
        <CVPopUp
          open={open}
          setOpen={setOpen}
          cvs={cvs}
          onClickAction={setCVIDHandler}
          disableCondition={false}
          title={"Choose CV for Apply"}
        />
        <Snackbar
          open={
            requestResponse.status == "success" ||
            requestResponse.status == "error"
          }
          autoHideDuration={6000}
        >
          <Alert
            onClose={() => setRequestResponse({})}
            severity={requestResponse.status}
            sx={{ width: "100%" }}
          >
            {requestResponse.message}
          </Alert>
        </Snackbar>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6 login-form-2"
              style={{ borderRadius: "15px" }}
            >
              <form action="" onSubmit={(e) => createJobPost(e)}>
                <h3>Create Looking For Job Post</h3>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Title *
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
                    placeholder="Title *"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Content *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Content *"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                    required
                  >
                    {" "}
                  </textarea>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Salary *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Salary *"
                      value={salary}
                      onChange={(e) => setSalary(parseInt(e.target.value))}
                      name="salary"
                      required
                    />
                    <select
                      className="form-control"
                      name="currency"
                      style={{ width: "100px" }}
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="$">$</option>
                      <option value="€">€</option>
                      <option value="£">£</option>
                      <option value="₺">₺</option>
                      <option value="B$">B$</option>
                      <option value="RD$">RD$</option>
                      <option value="S$">S$</option>
                    </select>
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Category *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                    height: "38px!important",
                  }}
                >
                  <div>
                    <select
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>
                      <option value="Assistant">Assistant</option>
                      <option value="Mobile Developer">Mobile Developer</option>
                      <option value="Full Stack Developer">
                        Full Stack Developer
                      </option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="Devops">Devops</option>
                      <option value="Product Owner">Product Owner</option>
                    </select>
                  </div>
                </div>

                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Location *
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
                    placeholder="Location *"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    name="location"
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    Image *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <FileBase64
                    onDone={(e) => setImage(e.base64.split(",")[1])}
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <div href="#" className="btnForgetPwd" value="">
                    CV *
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                >
                  <button
                    style={{ color: "black" }}
                    onClick={() => setOpen(true)}
                  >
                    Choose CV
                  </button>
                </div>

                <div className="form-group" style={{ marginTop: "30px" }}>
                  <input
                    type="submit"
                    className="btnSubmit"
                    value="Create Job Post"
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
