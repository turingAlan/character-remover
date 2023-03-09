import React, { useState } from "react";

import "../styles/input.css";

import { useNavigate } from "react-router-dom";
import Validate from "../Utility/Validate";
import Modal from "./Modal";

function InputScreen() {
  const [inputText, setInputText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const OnClick = () => {
    const error = Validate(inputText);
    if (!error) {
      navigate("/removeDuplicates", { state: { string: inputText } });
    } else {
      setErrorText(error.string);
      setModal(true);
    }
  };
  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()} style={{ width: "100%" }}>
        <div className="input-title-container">
          <h1>Enter the String</h1>
        </div>
        <div className="input-button-container">
          <input
            className="input"
            type="text"
            placeholder="Enter the text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input type="submit" className="button" onClick={() => OnClick()} />
        </div>
      </form>
      {modal ? (
        <Modal setModal={setModal}>
          <h2 style={{ color: "brown", fontSize: "30px" }}>{errorText}</h2>
        </Modal>
      ) : null}
    </div>
  );
}

export default InputScreen;
