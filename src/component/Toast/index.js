import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Toast = ({ type }) => {
  const getText = () => {
    if (type === "info") {
      return "Info";
    }
  };
  return (
    <div className={`toast-container ${type}`}>
      <span className="toast-child">{getText()}</span>
      <button>x</button>
    </div>
  );
};
export { Toast };

Toast.propTypes = {
  type: PropTypes.string,
};
