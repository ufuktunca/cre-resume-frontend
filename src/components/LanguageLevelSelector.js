import React from "react";

export default function LanguageLevelSelector(props) {
  return (
    <div
      className={categoryOpen ? "nice-select open" : "nice-select"}
      onClick={() => setCategoryOpen(!categoryOpen)}
      tabindex="0"
    >
      <span className="current">
        {language.level && language.level != "" ? language.level : "Levels"}
      </span>
      <ul className="list">
        <li
          data-value=""
          className="option selected"
          onClick={() => setLanguageVariable(index, "level", "A1")}
        >
          A1
        </li>
        <li
          data-value=""
          className="option"
          onClick={() => setLanguageVariable(index, "level", "A2")}
        >
          A2
        </li>
        <li
          data-value=""
          className="option"
          onClick={() => setLanguageVariable(index, "level", "B1")}
        >
          B1
        </li>
        <li
          data-value=""
          className="option"
          onClick={() => setLanguageVariable(index, "level", "B2")}
        >
          B2
        </li>
        <li
          data-value=""
          className="option"
          onClick={() => setLanguageVariable(index, "level", "C1")}
        >
          C1
        </li>
        <li
          data-value=""
          className="option"
          onClick={() => setLanguageVariable(index, "level", "C2")}
        >
          C2
        </li>
      </ul>
    </div>
  );
}
