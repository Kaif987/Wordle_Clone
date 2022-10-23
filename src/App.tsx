import React, {useState} from "react"
import Login from "./components/Login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Login loggedIn = {loggedIn}/>
    </div>
  );
}
