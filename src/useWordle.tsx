import {useState} from "react"

export const useWordle = () => {
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([])
    const [turn, setTurn] = useState(0)
    const alphabets = /^[a-zA-Z]$/
    
    console.log(currentGuess)
    
    function handleKeyUp(event: KeyboardEvent){
        const {key} = event

        if(alphabets.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess(prevGuess =>  prevGuess + key)
            }
        }

        if(key === "Backspace"){
            setCurrentGuess(prevGuess =>{
                return prevGuess.slice(0, -1)
            })
        }

        // if(key === "Enter"){
        //     return 
        // }

        // if(turn > 5){
        //     console.log("You have only 5 guesses")
        // }
        
    }

    return {currentGuess, guesses, handleKeyUp}
}