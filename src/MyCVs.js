import React, { useState, useEffect } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { GetUserCVsHandler, localURL } from "./api/cv";

export default function MyCVs() {
  const [cvs, setCvs] = useState([]);

  const getUserCVs = async () => {
    const data = await GetUserCVsHandler();
    setCvs(data);
  };

  useEffect(() => {
    getUserCVs();
  }, []);

  return (
    <body>
      <div class="slider-area ">
        <div
          class="single-slider section-overly slider-height2 d-flex align-items-center cvImage"
          style={{ backgroundSize: "contain" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>My CVs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-section">
        <div className="myCvs">
          {cvs.map((cv, index) => (
            <div className="centeralize" key={index}>
              <Document
                file={`${localURL}/cv/${cv.id}`}
                onLoadError={(e) => console.log(e)}
                className="cv"
              >
                <a
                  href={`${localURL}/cv/${cv.id}?download=true`}
                  target="_blank"
                >
                  <Page pageNumber={1} height={300} />
                </a>
              </Document>
              <div>{cv.cvName}</div>
            </div>
          ))}
        </div>
      </section>
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
      <script src="./assets/js/jquery.scrollUp.min.js"></script>
      <script src="./assets/js/jquery.nice-select.min.js"></script>
      <script src="./assets/js/jquery.sticky.js"></script>
      <script src="./assets/js/jquery.magnific-popup.js"></script>
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
