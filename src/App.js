import {Toast} from "./component/Toast"
import './App.css';
import { useState } from "react";

function App() {
  const [showToast,setShowToast]=useState(false);
  const handleToast =()=>{
    setShowToast(true)
  }
  return (
    <>
    <h1>Hello </h1>
    <button onClick={handleToast}>Show Toast</button>    
    { showToast && <Toast />}
    </>
  );
}

export default App;
