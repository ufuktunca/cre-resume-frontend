import React from "react";

export default function CreateLFJobPost() {
  return (
    <body>
      <main>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6 login-form-2"
              style={{ borderRadius: "15px" }}
            >
              <form action="">
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
                    value=""
                    name="title"
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
                    value=""
                    name="content"
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Salary *"
                    value=""
                    name="salary"
                  />
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
                    <select className="form-control" name="category">
                      <option value="">Categories</option>
                      <option value="">Frontend Developer</option>
                      <option value="">Assistant</option>
                      <option value="">Mobile Developer</option>
                      <option value="">Full Stack Developer</option>
                      <option value="">Data Scientist</option>
                      <option value="">Devops</option>
                      <option value="">Product Owner</option>
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
                    value=""
                    name="location"
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
                  <input type="file" name="image" accept="image/*" />
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
