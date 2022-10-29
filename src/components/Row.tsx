import {useEffect, useState} from "react"
import { useWordle } from "../useWordle"


interface RowProps {
    currentGuess?: string;
}
 
const Row: React.FunctionComponent<RowProps> = ({currentGuess}) => {

    // adds spaces at the end of string to make it a 5 letter word 
    const calculateLetters = () =>{
        if(!currentGuess)return 
        const letters: string[] = currentGuess.split('')
        const lengthOfGuess: number = letters.length
        for(let i = 0; i < 5 - lengthOfGuess; i++){
            letters.push(" ")
        }
        return letters
    }

    const letters = calculateLetters()
    
    const letterArrayElements = 
            letters.map((letter, index) =>{
                return <div key = {index} className="flex justify-center items-center border-2 border-gray-300 w-12 h-12">{letter}</div>
            })
            
    return (
        <div className="flex gap-1">
            {letterArrayElements}
        </div>
    );
}
 
export default Row;