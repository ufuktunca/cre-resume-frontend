import React, { useState } from "react";
import { GetCookie } from "../api/user";
import { localURL } from "../api/user";
import Switch from "@mui/material/Switch";

export default function JobPost({
  post,
  calculateTime,
  index,
  setOpen,
  setJobID,
  type,
  disableApply,
  switchButton,
  switchButtonAction,
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="single-job-items mb-30"
      key={index + "-post-number"}
      style={{ flexDirection: "column" }}
    >
      {switchButton && (
        <Switch
          checked={!post.disabled}
          onClick={() => switchButtonAction(post.id)}
        />
      )}
      <div style={{ display: "flex" }}>
        <div className="job-items">
          <div className="company-img">
            <a href="#">
              <img
                src={`data:image/png;base64,${post.image}`}
                width="75"
                height="75"
                alt=""
              />
            </a>
          </div>
          <div className="job-tittle job-tittle2">
            <a href="#">
              <h4>{post.title}</h4>
            </a>
            <ul>
              <li>{post.company}</li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {post.location}
              </li>
              <li>
                {Math.abs(post.salary - 1500) + post.currency} -{" "}
                {post.salary + 1500 + post.currency}
              </li>
            </ul>
            <div>{post.category}</div>
            <div
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxHeight: showAll ? "" : "35px",

                whiteSpace: "break-spaces",
              }}
              className="contentDiv"
            >
              {post.content}
            </div>
            <div
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {showAll ? "Hide Description" : "Show All"}
            </div>
          </div>
        </div>
        <form action="">
          <div
            className="items-link items-link2 f-right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {type == "unemployed" || type == "applied" ? (
              <a
                href={`${localURL}/cv/${post.cvId}?download=true`}
                target="_blank"
              >
                Download CV
              </a>
            ) : (
              <a
                onClick={() => {
                  if (
                    GetCookie("userType") == post.type &&
                    disableApply != true
                  ) {
                    return;
                  } else if (disableApply == true) {
                    setOpen(true, post.id);
                  } else {
                    setJobID(post.id);
                    setOpen(true);
                  }
                }}
                style={{
                  cursor:
                    GetCookie("userType") != "employer" || disableApply == true
                      ? "pointer"
                      : "no-drop",
                }}
              >
                {GetCookie("userType") != "employer" || disableApply != true
                  ? "Apply"
                  : "Download CVs"}
              </a>
            )}
            <span>
              {calculateTime(post.createdAt) > 24
                ? `${Math.round(calculateTime(post.createdAt) / 24)} days ago`
                : `${calculateTime(post.createdAt)} hours ago`}{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
