import React, { useEffect, useState } from "react";
import "../styles/removeDuplicates.css";
import Modal from "./Modal";

import { useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Layout from "./Layout";

function RemoveDuplicates() {
  const [string, setString] = useState("");
  const [newString, setNewString] = useState(string);
  const [charArray, setCharArray] = useState<string[]>([]);
  const [charObject, setCharObject] = useState({ a: { time: 0, color: "" } });
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [totalCharacter, setTotalCharacter] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [modal, setModal] = useState(false);

  const randomColor = require("randomcolor");
  const location = useLocation();

  const checkForDuplicates = () => {
    let duplicatePresent = false;
    for (const key in charObject) {
      if (charObject[key as keyof typeof charObject]["time"] > 1) {
        duplicatePresent = true;
      }
    }
    if (duplicatePresent) {
      setIsDuplicate(true);
      setModal(false);
    } else {
      setIsDuplicate(false);
      setModal(true);
    }
  };

  const storeCharacter = () => {
    const splitArray = string.split("");
    const tempObject = { a: { time: 0, color: "" } };
    for (let i = 0; i < splitArray.length; i++) {
      const character: string = splitArray[i].toUpperCase();
      const color = randomColor();

      let charCount;
      if (tempObject[character as keyof typeof tempObject]) {
        charCount = tempObject[character as keyof typeof tempObject]["time"];
      }
      if (!charCount) {
        charCount = 1;
      } else {
        charCount++;
      }
      if (character !== " ") {
        let timeColorObject = { time: charCount, color: color };
        setTotalCharacter((prevState) => prevState + 1);
        setCharObject((prevState) => ({
          ...prevState,
          [character]: timeColorObject,
        }));
      }
      setCharArray((prevState) => [...prevState, character]);
      tempObject[character as keyof typeof tempObject] = {
        time: charCount,
        color: color,
      };
    }
  };

  const removeDuplicate = (character: string, givenIndex: number) => {
    if (charObject[character as keyof typeof charObject]["time"] === 1) {
    } else {
      const tempArray = charArray.filter(
        (value, index) => value !== character || givenIndex === index
      );
      const color = randomColor();
      let timeColorObject = { time: 1, color: color };
      setNewString(tempArray.join(""));
      setCharObject((prevState) => ({
        ...prevState,
        [character]: timeColorObject,
      }));
      setCharArray(tempArray);
    }
  };

  useEffect(() => {
    setString(location.state.string.toUpperCase());
    if (!charArray.length) {
      storeCharacter();
    }
    window.scroll(0, 158);
  }, [string]);

  useEffect(() => {
    checkForDuplicates();
    setCardWidth(100 * (1 / Math.ceil(totalCharacter / 3.0)));
  }, [charObject]);

  const Card = (props: any) => {
    console.log(cardWidth);
    return (
      <div
        className="card-item"
        style={{
          flexBasis: `calc(${props.cardWidth}% - 30px)`,
          color: "white",
        }}
      >
        <a className="card-item-link">
          <div
            className="card-item-bg"
            style={{ backgroundColor: `${props.color}` }}
          ></div>
          <div className="card-item-title">{props.item}</div>

          <div
            onClick={() => removeDuplicate(props.item, props.index)}
            className="card-itemDeltebox"
          >
            Delete Duplicates
          </div>
        </a>
      </div>
    );
  };
  return (
    <Layout>
      <div style={{}}>
        <div className="both-string-container">
          <div className="string-container">
            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <FiArrowLeft color="rgb(0, 75, 145)" size={50} />

              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                  marginLeft: "10px",
                }}
              >
                Back
              </h1>
            </a>
          </div>
          <div className="string-container">
            <h1
              style={{
                fontWeight: "400",
                fontSize: "30px",
                alignSelf: "center",
              }}
            >
              Original String
            </h1>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "35px",
                marginLeft: "10px",
              }}
            >
              {string}
            </h1>
          </div>
          {newString ? (
            <div className="string-container">
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "30px",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
              >
                New String
              </h1>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                  display: "block",
                  marginLeft: "10px",
                }}
              >
                {newString}
              </h1>
            </div>
          ) : null}
        </div>
        <div className="card-container">
          {charArray.map((value: string, index: number) => {
            return value !== " " ? (
              <Card
                item={value}
                index={index}
                color={charObject[value as keyof typeof charObject].color}
                cardWidth={cardWidth}
              />
            ) : null;
          })}
        </div>
        {modal ? (
          <Modal setModal={setModal}>
            <h2 style={{ fontSize: "23px", color: "brown" }}>
              🎊🎊 Congratulations all duplicates removed 🎊🎊
            </h2>
          </Modal>
        ) : null}
      </div>
    </Layout>
  );
}

export default RemoveDuplicates;
