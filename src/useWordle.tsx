import {useState, useEffect} from "react"

const useWordle = (solution: string) => {
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState<string[]>([])
    const [turn, setTurn] = useState(0)
    const [history, setHistory] = useState<string[]>([])
    const alphabets = /^[a-zA-Z]$/

    useEffect(() =>{
        console.log(guesses)
    },[guesses])


    const formatGuesses = () => {
        const solutionArray: string[] = solution.split('')
        const formatted = guesses.map(guess =>{
            const guessArray: string[] = guess.split("")
            return guessArray.map((letter, index) =>{
                if(solutionArray[index] === letter){
                    return {color: "green"}
                }
                if(solutionArray.includes(letter)){
                    return {color: "yellow"}
                }else{
                    return {color: "black"}
                }
            })
        })
        console.log(formatted)
        return formatted
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

    return {currentGuess, guesses, handleKeyup, formatGuesses}
}


export {useWordle}