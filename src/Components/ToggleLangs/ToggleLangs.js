import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

const ToggleLangs = () => {
  const { toggleLang } = useContext(Context);
  console.log(toggleLang);
  return (
    <div className="container-langs">
      <img
        onClick={() => {
          toggleLang("FR");
        }}
        src={FrenchFlag}
      />
      <img
        onClick={() => {
          toggleLang("ES");
        }}
        src={SpanishFlag}
      />
      <img
        onClick={() => {
          toggleLang("EN");
        }}
        src={EnglishFlag}
      />
    </div>
  );
};

export default ToggleLangs;
