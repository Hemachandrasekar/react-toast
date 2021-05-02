import React from "react";
import { Toast } from "./component/Toast";
import "./App.css";
import { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    type: "error",
    text: "somthing",
    position: "bottom-right",
  });
  const handleToast = () => {
    setShowToast(true);
  };

  const handleDropdown = (keyname, e) => {
    setShowToast(false);

    setToastConfig({ ...toastConfig, [keyname]: e.target.value });
  };
  return (
    <>
      <h1>Hello </h1>
      <div>
        Select Toast Type:
        <select
          value={toastConfig.type}
          onChange={(e) => handleDropdown("type", e)}
        >
          <option value="info">Info</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
        </select>
      </div>
      <hr />
      <div>
        Select Toast Position:
        <select
          value={toastConfig.position}
          onChange={(e) => handleDropdown("position", e)}
        >
          <option value="top-right">Top-Right</option>
          <option value="bottom-right">Bottom-Right</option>
          <option value="top-left">Top-Left</option>
          <option value="bottom-left">Bottom-Left</option>
        </select>
      </div>

      <br />
      <button onClick={handleToast}>Show Toast</button>
      {showToast && (
        <Toast
          type={toastConfig.type}
          text={toastConfig.text}
          position={toastConfig.position}
        />
      )}
    </>
  );
}

export default App;
