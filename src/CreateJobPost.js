import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { CreateJobPostHandler } from "./api/jobPost";

export default function CreateJobPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [currency, setCurrency] = useState("");
  const [company, setCompany] = useState("");

  const createJobPost = async (e) => {
    e.preventDefault();
    const response = await CreateJobPostHandler(
      title,
      company,
      content,
      salary,
      category,
      location,
      image,
      currency,
      "employer"
    );
  };

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
              <form action="" onSubmit={(e) => createJobPost(e)}>
                <h3>Create Job Post</h3>
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
                    Company *
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
                    placeholder="Company *"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    name="Company"
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: "0.8rem !important",
                  }}
                ></div>
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
                  }}
                >
                  <div>
                    <select
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Categories">Categories</option>
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
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
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
      <footer>
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-10 col-lg-10 ">
                  <div className="footer-copy-right">
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
