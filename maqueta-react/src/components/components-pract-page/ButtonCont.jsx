import React from "react";
import ReturnBtn from './ReturnBtn';
import NextBtn from './NextBtn';

export default function ButtonCont() {
  return (
    <div className="button-cont">
      <div className="button-box">
        <ReturnBtn></ReturnBtn>
        <NextBtn></NextBtn>
      </div>
    </div>
  );
}
