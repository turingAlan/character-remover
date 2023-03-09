import React, { useEffect, useState } from "react";
import "../styles/removeDuplicates.css";

import { useLocation } from "react-router-dom";

function RemoveDuplicates() {
  const [string, setString] = useState("");
  const [newString, setNewString] = useState(string);
  const [charArray, setCharArray] = useState<string[]>([]);
  const [charObject, setCharObject] = useState({ a: { time: 0, color: "" } });
  const [isDuplicate, setIsDuplicate] = useState(false);

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
    } else {
      setIsDuplicate(false);
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
      console.log("No duplictes found");
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
  }, [string]);

  useEffect(() => {
    checkForDuplicates();
  }, [charObject]);

  const Card = (props: any) => {
    return (
      <div className="ag-courses_item">
        <a className="ag-courses-item_link">
          <div
            className="ag-courses-item_bg"
            style={{ backgroundColor: `${props.color}` }}
          ></div>
          <div className="ag-courses-item_title">{props.item}</div>

          <div
            onClick={() => removeDuplicate(props.item, props.index)}
            className="ag-courses-item_date-box"
          >
            Delete Duplicates
          </div>
        </a>
      </div>
    );
  };

  return (
    <div>
      <div className="both-string-container">
        <div className="string-container">
          <h1
            style={{ fontWeight: "400", fontSize: "30px", alignSelf: "center" }}
          >
            Original String
          </h1>
          <h1
            style={{ fontWeight: "600", fontSize: "35px", marginLeft: "10px" }}
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
            />
          ) : null;
        })}
      </div>
      <h2>{!isDuplicate ? "No duplicate character was found" : null}</h2>
    </div>
  );
}

export default RemoveDuplicates;
