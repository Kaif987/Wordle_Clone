import React, {useState, useEffect} from "react"
import Login from "./components/Login";
import Wordle from "./components/Wordle";
import {randomWords} from "./words"

export default function App() {
  const [solution, setSolution] = useState<string>("")
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(solution)
  
  return (
    <div className="App">
      {loggedIn ?
        <Wordle solution = {randomWords()} />
      :
        <Login setLoggedIn = {setLoggedIn}/>
      }
    </div>
  );
}
