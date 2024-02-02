import CalcHeading from "./components/CalcHeading";
import CalcInput from "./components/CalcInput";
import CalcButton from "./components/CalcButton";
import { useState } from "react";
import "./App.css";

function App() {
  const Button_Name = [
    "9",
    "C",
    "del",
    "7",
    "8",
    "+",
    "5",
    "6",
    "-",
    "3",
    "4",
    "*",
    "1",
    "2",
    "/",
    "0",
    ".",
    "=",
  ];

  let [C_Input, setChangeInput] = useState("");

  const ButtonClicked = (item) => {
    if (item === "C") {
      setChangeInput("");
    } else if (item === "=") {
      let result = eval(C_Input);
      setChangeInput(result);
    } else if (item === "del") {
      let delClick =
        C_Input.length > 0 ? C_Input.slice(0, C_Input.length - 1) : "0";
      setChangeInput(delClick);
    } else {
      let newDisplay = C_Input === "0" ? item : C_Input + item;
      setChangeInput(newDisplay);
    }
  };

  return (
    <div className="container w-75 border border-3 my-5 mx-5 p-5 bg-secondary">
      <CalcHeading></CalcHeading>
      <CalcInput DisplayValue={C_Input}></CalcInput>
      <CalcButton
        Button_Name={Button_Name}
        ButtonClicked={ButtonClicked}
      ></CalcButton>
    </div>
  );
}

export default App;
