import {FaBars, FaQuestionCircle } from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {GiPodium} from "react-icons/gi"
import Board from "./Board"

interface WordleProps {
    
}
 
const Wordle : React.FC<WordleProps> = () => {
    return ( 
        <div>
            <nav className="flex justify-between align-center p-4 text-2xl font-mono">
                <a href= "#"><FaBars/></a>
                <h1 className="font-black" >Wordle</h1>
                <div className="flex gap-3 align-center">
                    <a href = "#"><FaQuestionCircle/></a>
                    <a href = "#"><GiPodium/></a>
                    <a href = "#"><AiFillSetting/></a>
                </div>
            </nav>
            <Board />
        </div>
     );
}
 
export default Wordle ;