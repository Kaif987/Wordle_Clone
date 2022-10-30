import {useEffect, useState} from "react"
import { useWordle } from "../useWordle"


interface RowProps {
    key: number;
    currentGuess?: string;
    guess?: string;
    colors?: ('gray' | 'green' | 'yellow')[]
}
 
const Row: React.FunctionComponent<RowProps> = ({currentGuess , guess, colors}) => {

    // adds spaces at the end of string to make it a 5 letter word 
    const addSpaces = () =>{
        if(!currentGuess)return 
        const letters: string[] = currentGuess.split('')
        const lengthOfGuess: number = letters.length
        for(let i = 0; i < 5 - lengthOfGuess; i++){
            letters.push(" ")
        }
        return letters
    }

    // 3 cases have arised
    // one where current guess is passed

    function currentGuessCase(){
        const letters = addSpaces()
        return letters?.map((letter,index) =>{
            return <div key={index} className = "border-2 border-gray-300 w-12 h-12 flex justify-center items-center" >{letter.toUpperCase()}</div>
        })
    }

    // second where the guess is a past guess
    function pastGuess(){
        const letters = guess?.split("")
        return letters?.map((letter, index) =>{
            let style = (function(){
                if(colors?.[index] === "green"){
                    return "bg-green-200"
                }else if(colors?.[index] === "yellow"){
                    return "bg-yellow-200"
                }else {
                    return "bg-darkGray"
                }
            })()

            return <div key = {index} className = {`border-2 border-gray-300 w-12 h-12 flex justify-center items-center text-white font-bold ${style}`} >{letter.toUpperCase()}</div>
        })
    }

    // third when the player has not guessed the word
    function elseCase(){
        const letters = new Array(5).fill(" ")
        return letters.map((letter, index) =>{
            return <div key={index} className = "border-2 border-gray-300 w-12 h-12 flex justify-center items-center" >{letter.toUpperCase()}</div>
        })
    }

    return (
        <div className="flex gap-1">
                {
                (function(){
                    if(currentGuess){
                        return currentGuessCase()
                    }else if(guess){
                        return pastGuess()
                    }else{
                        return elseCase()
                    }
                })()
                }
        </div>
    );
}
 
export default Row;