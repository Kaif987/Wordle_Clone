import {useEffect} from "react"
import {useWordle} from "../useWordle"
import randomWords from "../words"
import Row from "./Row";

console.log(randomWords())

interface BoardProps {
    
}
 
const Board: React.FC<BoardProps> = () => {
    const {currentGuess, handleKeyUp} = useWordle()
    
    useEffect(() =>{
        window.addEventListener('keyup', handleKeyUp)

        return () =>{
            window.removeEventListener('keyup', handleKeyUp)
        }
    },[])

    return (
        <div className="flex flex-col justify-center items-center gap-1 mt-4">
            {/* {userWords.map((word,index) =>{
                if(index === tries){
                    return <Row key={index} keyPressed= {keyPressed} tries = {tries} typedWord = {typedWord} />
                }else{
                    return <Row key={index} keyPressed= {keyPressed} tries = {tries} />
                }
            })} */}
            {currentGuess}
        </div>
    );
}
 
export default Board;