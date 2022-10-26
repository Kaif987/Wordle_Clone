import {useState, useEffect} from "react"
import randomWords from "../words"
import Row from "./Row";

console.log(randomWords())

interface BoardProps {
    
}
 
const Board: React.FC<BoardProps> = () => {
    const [userWords, setUserWords] = useState(new Array(6).fill(null))
    const [typedWord, setWord] = useState("")
    const [keyPressed, setKeyPressed] = useState('')
    const [tries, setTries] = useState(0)
    const alphabets = /^[a-zA-Z]*$/

    const handleKeyDown = (event: KeyboardEvent) =>{
        if(event.key === "Enter" && typedWord.length < 5) return
        if(event.key === "Backspace"){
            setWord(prevWord => prevWord.slice(0, prevWord.length -1 ))
        }
        if(typedWord.length > 5) return
        if(alphabets.test(event.key) && (event.key.length === 1)){
            setWord(prevWord => {
                if(prevWord.length < 5){
                    return prevWord + event.key
                }else{
                    return prevWord
                }
            })
            setKeyPressed(event.key)
        }
    }

    useEffect(() =>{
        window.addEventListener('keydown', handleKeyDown)

        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        }
    },[])

    return (
        <div className="flex flex-col justify-center items-center gap-1 mt-4">
            {userWords.map((word,index) =>{
                if(index === tries){
                    return <Row key={index} keyPressed= {keyPressed} tries = {tries} typedWord = {typedWord} />
                }else{
                    return <Row key={index} keyPressed= {keyPressed} tries = {tries} />
                }
            })}
        </div>
    );
}
 
export default Board;