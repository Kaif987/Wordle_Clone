import {useEffect} from "react"
import {useWordle} from "../useWordle"
import Row from "./Row";

interface BoardProps {
    solution: string    
}

const Board: React.FC<BoardProps> = ({solution}) => {
    const {currentGuess, guesses, isCorrect, formattedGuesses, handleKeyup, turn} = useWordle(solution)

    useEffect(() =>{
        window.addEventListener('keyup', handleKeyup)
        return () =>{
            window.removeEventListener('keyup', handleKeyup)
        }
    },[handleKeyup])


    return (
        <>
        {   isCorrect ? 
            <div className="text-center bg-green-400 text-2xl h-20 mt-20 flex justify-center items-center ">
                You Won The Game
            </div>
        :
            turn === 6 ?
                <div className="text-center bg-red-400 text-2xl h-20 mt-20 flex justify-center items-center ">
                    Sorry, You Lost the game
                </div>
            :
            <div className="flex flex-col justify-center items-center gap-1 mt-4">
            {
                [...Array(6)].map((e,i) => {
                    if(turn === i){
                    return <Row key = {i} currentGuess= {currentGuess}/>
                }
                else if(guesses[i]){
                    return <Row key ={i}  guess = {guesses[i]} formatted = {formattedGuesses[i]} />
                }else{
                    return <Row key = {i} />
                }
            })
            }
            </div>
        }
        </>
    );
}
 
export default Board;