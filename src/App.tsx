import React, {useState} from "react"
import Login from "./components/Login";
import Wordle from "./components/Wordle";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      {loggedIn ?
        <Wordle />
      :
        <Login setLoggedIn = {setLoggedIn}/>
      }
    </div>
  );
}
