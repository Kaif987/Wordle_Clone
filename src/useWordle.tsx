import {useState} from "react"


const useWordle = (solution: string) => {
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState<string[]>([])
    const [turn, setTurn] = useState(0)
    const [history, setHistory] = useState<string[]>([])
    const [formattedGuesses, setFormattedGuesses] = useState<{letter: string, color: string}[][]>([])
    const [isCorrect, setIsCorrect] = useState(false)
    const alphabets = /^[a-zA-Z]$/


    // get the current guess and based on the solution give them appropriate colors
    const formatGuesses = () => {
      
      const solutionArray = [...solution]
      const formattedGuess = [...currentGuess].map((letter) =>{
          return {letter, color: "incorrect"}
      })
      
      formattedGuess.forEach((object, index) =>{
          if(object.letter === solutionArray[index]){
              object.color = "correct"
              solutionArray[index] = "null"
          }
      })
      
      formattedGuess.forEach((object, index) =>{
          if(solutionArray.includes(object.letter)){
              if(object.color !== "correct"){
                  object.color = "correctlyPlaced"
              }
          }    
      })
      
      return formattedGuess
    }


    const handleKeyup = ({ key } : KeyboardEvent) => {
        if(turn > 5){
            console.log("You have only 6 guesses")
            return 
        }

        if(key === "Enter" && currentGuess.length === 5){
            if(!(history.includes(currentGuess))){
                setGuesses(prevGuess => {
                    return [...prevGuess, currentGuess]
                })
                setTurn(prev => prev + 1)        
                setHistory((prevHistory) => [...prevHistory, currentGuess])
                const formatted = formatGuesses()
                setFormattedGuesses(prevFormattedGuesses => {
                    return [...prevFormattedGuesses, formatted]
                })

                if(currentGuess === solution){
                    setIsCorrect(true)
                }
                setCurrentGuess("")
            }
        }

        
        if (key === 'Backspace') {
          setCurrentGuess(prev => prev.slice(0, -1))
          return
        }

        if (alphabets.test(key)) {
          if (currentGuess.length < 5) {
            setCurrentGuess(prev => prev + key)
          }
        }
      }

    return {currentGuess, guesses, turn, isCorrect, formattedGuesses, handleKeyup ,formatGuesses }
}

export {useWordle}
