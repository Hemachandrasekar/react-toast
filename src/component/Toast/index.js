import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Toast = ({ type, position, text }) => {
  return (
    <div className={`toast-container ${type} ${position}`}>
      <span className="toast-child">{text}</span>
      <button>x</button>
    </div>
  );
};
export { Toast };

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
