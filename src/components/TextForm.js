import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')


    const hadlechange = (event) => {
        setText(event.target.value)
    }
    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Change to UpperCase", "success");
    }

    const lowerCase = () => {
      let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Change to Lowercase", "success");
    };

    const handleCapitalize = () => {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext)
        props.showAlert("Change to Capitalize",'success')
    }


    const clear = () => {
        setText('');
        props.showAlert("Your clear ALL Text", "success");
    };

    return (
      <>
        <div
          className="container p-5 pt-3 pb-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1 className="fs-2  fw-900 ">Enter the Text to Analyze Below</h1>
          <div className="my-3 ">
            <textarea
              className="form-control border-1"
              style={{
                backgroundColor: props.mode === "dark" ? "#0a0332" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="exampleFormControlTextarea1"
              placeholder="Enter Your Text"
              rows="6"
              onChange={hadlechange}
              value={text}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={upperCase}
            className="mx-2 border-2 fw-bold btn btn-primary"
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={lowerCase}
            className="mx-2 border-2 fw-bold btn btn-primary"
          >
            LowerCase
          </button>
          <button
            type="button"
            onClick={handleCapitalize}
            className="mx-2 border-2 fw-bold btn btn-primary"
          >
            Capitalize
          </button>
          <button
            type="button"
            onClick={clear}
            className="mx-2 border-2 fw-bold btn btn-primary"
          >
            clear
          </button>
        </div>
        <div
          className="container p-5 pt-0"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1 className="fs-4 fw-bold">Your Text Summary</h1>
          <p>
            <span className="text-primary fw-bold">
              {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
            </span>{" "}
            Words,{" "}
            <span className="text-primary fw-bold">{text.trim().length}</span>{" "}
            Characters
          </p>
          <p>
            <span className="text-primary fw-bold">
              {0.008 * text.split(" ").length}
            </span>{" "}
            Minutes read
          </p>
          <h2 className="fs-4 fw-bolder">Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter Something to the textbox and preview it"}
          </p>
        </div>
      </>
    );
}
