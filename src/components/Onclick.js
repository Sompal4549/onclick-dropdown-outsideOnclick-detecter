import React, { useRef, useState } from "react";
import { DetectOutsideClick } from "./detectOutside";
const container = {
  position: "relative",
  display: "inline-block",
};
const button = {
  padding: 0,
  width: "50px",
  border: 0,
  backgroundColor: "#fff",
  color: "#333",
  cursor: "pointer",
  outline: "0",
  fontSize: "40px",
};
const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "300px",
  zIndex: 2,
  border: "1px solid rgba(0, 0, 0, 0.4)",
  boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14)",
};
const Onclick = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);
  return (
    <>
      <div className="dropDown" style={container} ref={dropdownRef}>
        <style>
          {`
          .dropDownContent a{
                padding:8px 12px;
                display:block;
            }
            a:hover{
                background-color:rgba(0, 0, 0, 0.14);
                cursor:pointer;
            }
            `}
        </style>
        <button style={button} className="dropBtn" onClick={handleClick}>
          ☰
        </button>
        {isActive && (
          <div style={dropdown} className="dropDownContent">
            <a href="https://www.google.com">Home</a>
            <a href="https://www.ishasadhguru.com">Website</a>
            <a href="https://www.google.com">Google</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Onclick;