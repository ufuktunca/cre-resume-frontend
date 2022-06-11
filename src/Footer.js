import React from "react";

export default function Footer() {
  console.log(window.location.pathname);
  return (
    <footer>
      {window.location.pathname != "/login" &&
        window.location.pathname != "create-cv" && (
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
        )}
    </footer>
  );
}
