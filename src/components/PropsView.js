// Recieve and add data
import React from "react";
import PropsData from "./PropsData";
import { useState } from "react";
import MainNavigation from "./Navigation";

export default function PropsView() {
  //database fed dynamically |capitalize first leters names
  const namesd = ["vague", "magma", "villes", "cygnux", "dunchez"];
  const namesdb = namesd.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
  });
  const valuedb = ["Gold III", "platinum I", "conqueror", "Diamond IV"];
  const gundb = ["M-416", "M-24 XT", "Kar-28", "Scar-l"];
  var i = 0;
  // function addn() {
  //   i++;
  // }

  var inputName;
  var inputTier;
  var inputGun;

  function inputData() {
    inputName = document.getElementById("name").value;
    inputTier = document.getElementById("tier").value;
    inputGun = document.getElementById("gun").value;
    console.log("sucess");
    updates();
    return (inputName, inputTier, inputGun);
  }

  function datainput() {
    return (
      <div>
        <br />
        <input id="name" type="text"></input>
        <br />
        <br />
        <input id="tier" type="text"></input>
        <br />
        <br />
        <input id="gun" type="text"></input>
        <br />
        <br />
        <button onClick={inputData}>add player</button>
        <br />
        <br />
      </div>
    );
  }

  const datapacks = [
    {
      name: namesdb[0],
      value: valuedb[0],
      gun: gundb[0],
    },
    {
      name: namesdb[1],
      value: valuedb[1],
      gun: gundb[1],
    },
    {
      name: namesdb[2],
      value: valuedb[2],
      gun: gundb[2],
    },
    {
      name: namesdb[3],
      value: valuedb[3],
      gun: gundb[3],
    },
    {
      name: namesdb[4],
      value: valuedb[3],
      gun: gundb[1],
    },
  ];
  const [dataState, setDataState] = React.useState(datapacks);
  console.log(dataState);

  function updates() {
    setDataState((prevState) => {
      return [
        ...prevState,
        { name: inputName, value: inputTier, gun: inputGun },
      ];
    });
  }
  //setDataState()
  // datapacks.push({ name: "blue", value: "erf", gun: "rfq" });
  const datapack = dataState.map((prevDataState) => {
    return (
      <PropsData
        name={prevDataState.name}
        value={prevDataState.value}
        pro={prevDataState.gun}
        key={prevDataState.name}
      />
    );
  });

  const [first, setFirst] = useState(0);

  //both methods are correct but for add is preffered
  function Subtract() {
    setFirst(first - 1);
  }
  //best practices
  function adding() {
    setFirst((prevFirst) => prevFirst + 1);
  }

  const [goingOut, setGoingOut] = useState(true);
  function goOut() {
    setGoingOut((prevGoing) => (prevGoing ? false : true));
    // same as last line just using ! sign to mean opposite of prevGoing
    //--> setGoingOut(prevGoing => !prevGoing)
  }

  return (
    <div>
      <MainNavigation />
      Dynamic Addition and SubtractSubtractaction, going out query & Pubg
      players data
      <div>
        <span onClick={Subtract}>
          <h1>-</h1>
        </span>
        <h1>{first}</h1>
        <span onClick={adding}>
          <h1>+</h1>
        </span>
      </div>
      <h2>Are you going out today ? </h2>
      {goingOut ? "yeah I'm going" : "Not today, Changed mind"}
      <br />
      <br />
      <button onClick={goOut}>Change Mind</button>
      {datainput()}
      {datapack}
      {console.log("values are : " + (1 + i))}
    </div>
  );
}
//Randomizing the id
// let id = Math.floor(Math.random() * 20000 + 10000);
// let idAdd = Math.floor(Math.random() * 200 + 1);
// function idAded() {
//   id += idAdd;
//   return idAded;
// }
//console.log(PropsView)
//#maps() squaring of number
// const nums = [1, 2, 3, 4, 5];
// const numsq = nums.map(square);

// function square(val) {
//   return val * val;// }

//const numsq = nums.map(num => num * num)
//console.log(numsq);
