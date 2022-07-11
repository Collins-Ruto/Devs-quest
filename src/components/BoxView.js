import React from 'react'
import BoxData from './BoxData'
import '../styles/Box.css'
import MainNavigation from './Navigation';

export default function BoxView() {
  //set default value of is on to false to allow for changes
  const [isOn, setIsOn] = React.useState(false);
  console.log(isOn);

  //set function to be called when button is clicked
  //onSwitch recieves value of id passed from inside callback function in map
  //onValue of inputed id - 1 which is the array value changed to opposite on click
  function onSwitch(prevOn) {
    BoxData[prevOn - 1].on = !BoxData[prevOn - 1].on;
    setIsOn((prevState) => !prevState);
    console.log(prevOn, " Clicked");
  }

  //return value of ternary operator on the ons boolean. id and on value are passed on excecution of onValue
  const boxInfo = BoxData.map((datas) => {
    const styles = {
      backgroundColor: datas.on ? "pink" : "black",
    };
    //computation and jsx element to be passed to the viewer
    return (
      datas.id,
      (
        <div
          style={styles}
          key={datas.id}
          className="boxItem"
          onClick={() => onSwitch(datas.id)}
        >
          <br />
          <div></div>
          <br />
        </div>
      )
    );
  });

  function boxDisplay() {
    return (
      <div className="boxCard">
        <h4>{boxInfo}</h4>
      </div>
    )
  }
  return (
  <div>
    <MainNavigation />
    <div className="boxContainer">{boxDisplay()}</div>;
  </div>
  )
  
}
