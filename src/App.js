import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [redMode, setRedMode] = useState("danger");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  // setTimeout(() => {
  //   document.title = 'Instal textUtill App'
  // }, 2000);
  //   setTimeout(() => {
  //     document.title = "open textUtill App";
  //   }, 1500);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Activated", "success");
      document.title = "textUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#0a0332";
      showAlert("Dark Mode Has Been Activated", "success");
      document.title = "textUtils - Dark Mode";
    }
  };

  // const toggleRedMode = () => {
  //     if (redMode === "danger") {
  //     setRedMode("success");
  //     document.body.style.backgroundColor = "green";
  //     showAlert("Green Mode Has Been Activated", "success");
  //     document.title = "textUtils - Green Mode";
  //   } else {
  //       setRedMode("danger");
  //       document.body.style.backgroundColor = "red";
  //       showAlert("Red Mode Has Been Activated", "success");
  //     document.title = "textUtils - Red Mode";
  //   }
  // };
  
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtills"
          mode={mode}
          // toggleRedMode={toggleRedMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        {/* <Switch>
        <Routes>
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
        </Switch> */}

        <Routes>
          <Route
            path="/"
            index
            element={<TextForm showAlert={showAlert} mode={mode} />}
          >
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);