//pass data to props viewer

import React from "react";

//read value of props passed in as props was executed in propsview
//and pass the data to be displayed dynamically
export default function PropsData(props) {
  //destructuring
  const { id, name, value, pro } = props;

  //assign props to vars for conditions
  console.log(id, name, value, pro);
  //const propId = (props.id !== "" ? props.id : "no id")
  const propName = props.name !== "" ? props.name : "no Name";
  const propValue = props.value !== "" ? props.value : "no values";
  const property = props.pro !== "" ? props.pro : "no property";
  return (
    <div>
      {/* player id : {propId} ,<br /> */}
      Username : {propName} ,<br />
      Player tier : {propValue} ,<br />
      Gun of Choice :{property} ,<br />
      <hr />
    </div>
  );
}
