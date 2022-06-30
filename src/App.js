import React, { useState } from "react";
import "./App.css";
import ConnectFour from "./ConnectFour";

export default function App() {
  const [playerOneName,setPlayerOneName] = useState("player 1")
  const [playerTwoName,setPlayerTwoName] = useState("player 2")
  const OnChangeOne = (e) =>{
    setPlayerOneName(e.target.value)
  }
  const OnChangeTwo = (e) =>{
    setPlayerTwoName(e.target.value)
  }
  return (
    <div className="App">
      <h1>Connect Four Game</h1>
      <ConnectFour p1Name={playerOneName} p2Name={playerTwoName}/>
      <p>player one name</p>
      <input style={{height: "40px", width: "150px"}} onChange={OnChangeOne} value={playerOneName}/>
      <p>player two name</p>
      <input style={{height: "40px", width: "150px"}} onChange={OnChangeTwo} value={playerTwoName}/>
    </div>
  );
}
