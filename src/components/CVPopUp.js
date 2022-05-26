import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { localURL } from "../api/user";

export default function CVPopUp({
  open,
  setOpen,
  cvs,
  onClickAction,
  disableCondition,
  title,
  disableApply,
}) {
  console.log(cvs);
  const [cvID, setCVID] = useState("");
  return (
    <div>
      {" "}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 550,
            height: 550,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            backgroundColor: "white",
            //padding: "0px 150px 150px 0px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="medium" />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              marginLeft: "35px",
              borderBottom: "1px solid black",
              marginRight: "40px",
            }}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{
              marginLeft: "35px",
              marginRight: "40px",
              height: "425px",
              overflowY: "scroll",
            }}
          >
            {disableApply != true
              ? cvs.map((cv, index) => (
                  <div
                    key={index + "-cv"}
                    className="applyCV"
                    style={{
                      backgroundColor: cv.id == cvID ? "#8b92dd" : "",
                      color: cv.id == cvID ? "#ffffff" : "",
                    }}
                    onClick={() => setCVID(cv.id)}
                  >
                    {cv.cvName}
                  </div>
                ))
              : cvs.map((cv, index) => (
                  <a
                    key={index + "-cv"}
                    className="applyCV"
                    style={{
                      backgroundColor: cv.id == cvID ? "#8b92dd" : "",
                      color: cv.id == cvID ? "#ffffff" : "#000000",
                      display: "block",
                    }}
                    href={`${localURL}/cv/${cv.id}`}
                    target="_blank"
                  >
                    {cv.cvName}
                  </a>
                ))}
          </Typography>
          {disableApply != true && (
            <Button
              style={{
                float: "right",
                marginRight: "40px",
                backgroundColor: "#8b92dd",
                color: "white",
                marginTop: "5px",
              }}
              variant="contained"
              color="primary"
              disabled={disableCondition || cvID == ""}
              onClick={() => {
                onClickAction(cvID);
              }}
            >
              Apply
            </Button>
          )}
        </div>
      </Modal>
    </div>
  );
}
