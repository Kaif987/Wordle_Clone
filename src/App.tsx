import React, {useState, useEffect} from "react"
import Login from "./components/Login";
import Wordle from "./components/Wordle";


export default function App() {
  const [solution, setSolution] = useState<string>("")
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(solution)

  useEffect(() =>{
    fetch("http://localhost:3001/solution")
      .then(res => res.json())
      .then(data =>{ 
          const array = data["solutions"]
          const randomInt = Math.floor(Math.random() * array.length)
          setSolution(array[randomInt].word)
        })
  }, [setSolution])

  return (
    <div className="App">
      {loggedIn ?
        <Wordle solution = {solution} />
      :
        <Login setLoggedIn = {setLoggedIn}/>
      }
    </div>
  );
}
