import {useState} from "react"
import randomWords from "../words"
import Row from "./Row";

console.log(randomWords())

interface BoardProps {
    
}
 
const Board: React.FC<BoardProps> = () => {
    const [userWords, setUserWords] = useState(new Array(6).fill(null))
    console.log(userWords.map(word => <Row/>))
    return (
        <div>
            {userWords.map((word,index) =>{
                return <Row key={index}/>
            })}
        </div>
    );
}
 
export default Board;