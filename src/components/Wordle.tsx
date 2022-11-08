import React from "react"
import {FaBars, FaQuestionCircle } from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {GiPodium} from "react-icons/gi"
import Board from "./Board"

interface WordleProps {
    solution: string
}
 
const Wordle : React.FC<WordleProps> = ({solution}) => {
    return ( 
        <div className="flex flex-col  justify-center">
            <nav className="flex justify-between align-center p-4 text-2xl font-mono">
                <a href= "#"><FaBars/></a>
                <h1 className="font-black" >Wordle</h1>
                <div className="flex gap-3 align-center">
                    <a href = "#"><FaQuestionCircle/></a>
                    <a href = "#"><GiPodium/></a>
                    <a href = "#"><AiFillSetting/></a>
                </div>
            </nav>
            <hr/>
            <Board solution = {solution}/>
        </div>
     );
}
 
export default Wordle ;