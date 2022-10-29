import {useEffect} from "react"
import {useWordle} from "../useWordle"
import randomWords from "../words"
import Row from "./Row";

console.log(randomWords())

interface BoardProps {
    
}
 
const Board: React.FC<BoardProps> = () => {
    const solution = randomWords()
    const {currentGuess, guesses, handleKeyup, turn} = useWordle(solution)


    useEffect(() =>{
        window.addEventListener('keyup', handleKeyup)

        return () =>{
            window.removeEventListener('keyup', handleKeyup)
        }
    },[handleKeyup])

    return (
        <div className="flex flex-col justify-center items-center gap-1 mt-4">
            {
            [...Array(6)].map((e,i) => {
                // const colors = formatGuesses(guesses[i])
                if(turn === i){
                    return <Row currentGuess= {currentGuess}/>
                }
                if(guesses[i]){
                    return <Row guess = {guesses[i]}/>
                }else{
                    return <Row />
                }
            })
            }
        </div>
    );
}
 
export default Board;