import React from "react";
import "./Title.scss";
import packageJson from "../../../package.json";

const Title = () => {
  return (
    <div className="Title">
      <div className="Title__l1">Micheline</div>
      <div className="Title__l2">Michelson</div>
      <div className="Title__l3">Translator</div>
    </div>
  );
};

export default Title;
