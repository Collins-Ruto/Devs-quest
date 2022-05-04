import React from "react";
import { useState } from "react";
import MainNavigation from "../components/Navigation";
import "../styles/Calculator.css";

export default function Calculator() {
  const [inum, setInum] = useState(0);
  const [inputNum, setinputNum] = useState("");
  const [data, setData] = useState(inputNum);
  const [answr, setAnswr] = useState("");
  const ops = ["+", "/", "-", "*", "."];
  const zero = ["0"];

  function parse(str) {
    // eslint-disable-next-line no-new-func
    return Function(`'use strict'; return (${str})`)();
  }

  function red(num) {
    if (zero.includes(num) && inputNum === "") {
      return;
    }
    setInum((prev) => prev + 1);
    operand(num);
  }

  console.log(data, "com", inum);

  // used eval function which is un conventional
  function operand(typ) {
    
    if (!ops.includes(typ)) {
      setAnswr(parse(data + typ));
    }
    if (ops.includes(typ) && inputNum === "") {
      setinputNum(answr + " " + typ + " ");
      setData(answr + typ);
      setAnswr(parse(data + typ));
      return;
    }
    if (ops.includes(typ) && ops.includes(data.slice(-1))) {
      return;
    } else {
      setinputNum((prev) => prev + typ);
      setData((prev) => prev + typ);
    }
  }

  function compute() {
    setAnswr(parse(data));
    setinputNum("");
    setData("");
  }
  function delet() {
    if (data === "") {return;}
    setData((prev) => prev.slice(0, -1));
    setinputNum((prev) => prev.slice(0, -1));
  }
  function allClear() {
    if (data === "") {return;}
    setData("");
    setinputNum("");
    setAnswr("0");
  }
  console.log("ans: " + answr);

  return (
    <div>
      <MainNavigation />
      <div className="calc-page">
        <div className="calc-margin">
        <div className="input-disp disp1">{answr}</div>
        <div className="input-disp">{inputNum}</div>
        <div className="calc-container">
          <div className="calc-clr" onClick={() => allClear()}>
            <span>AC</span>
          </div>
          <div className="calc-del" onClick={() => delet()}>
            <span>DEL</span>
          </div>
          <div className="calc-num" onClick={() => red("1")}>
            <span>1</span>
          </div>
          <div className="calc-num" onClick={() => red("2")}>
            <span>2</span>
          </div>
          <div className="calc-num" onClick={() => red("3")}>
            <span>3</span>
          </div>
          <div className="calc-num" onClick={() => operand("+")}>
            <span>+</span>
          </div>
          <div className="calc-num" onClick={() => red("4")}>
            <span>4</span>
          </div>
          <div className="calc-num" onClick={() => red("5")}>
            <span>5</span>
          </div>
          <div className="calc-num" onClick={() => red("6")}>
            <span>6</span>
          </div>
          <div className="calc-num" onClick={() => operand("-")}>
            <span> -</span>
          </div>
          <div className="calc-num" onClick={() => red("7")}>
            <span>7</span>
          </div>
          <div className="calc-num" onClick={() => red("8")}>
            <span>8</span>
          </div>
          <div className="calc-num" onClick={() => red("9")}>
            <span>9</span>
          </div>
          <div className="calc-num" onClick={() => operand("*")}>
            <span>x</span>
          </div>
          <div className="calc-num" onClick={() => operand(".")}>
            <span>.</span>
          </div>
          <div className="calc-num" onClick={() => red("0")}>
            <span>0</span>
          </div>
          <div className="calc-num" onClick={() => operand("/")}>
            <span>/</span>
          </div>
          <div className="calc-num" onClick={() => compute()}>
            <span>=</span>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
