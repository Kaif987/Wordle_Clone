import {useEffect, useState} from "react"

interface RowProps {
    key: number
    keyPressed: string
    tries: number
    typedWord?: string
}
 
const Row: React.FunctionComponent<RowProps> = ({keyPressed, tries, typedWord}) => {
    const [letterArray, setLetterArray] = useState(new Array(5).fill(''))

    console.log(typedWord)

    // function calculateLetterArray(){
    //     const array = new Array(5).fill('')
    //     if(word){
    //         for(let i=0; i< word.length; i++){
    //             array[i] = word[i]
    //         }
    //     }
    //     console.log(array)
    //     return array
    // }

    useEffect(() =>{
        if(typedWord){
            const copy = letterArray
            for(let i = 0; i < typedWord.length; i++){
                copy[i] = typedWord[i]
            }
            setLetterArray(copy)
        }
    },[typedWord, letterArray])
    

    // if(word){
    //     setLetterArray(prevLetterArray =>{
    //         const copy = prevLetterArray
    //         for(let i=0 ; i< word.length; i++){
    //             copy[i] = word[i]
    //         }
    //         return copy
    //     })
    // }

    // console.log(letterArray)

    const letterArrayElements = 
            letterArray.map((letter,index) =>{
                return <div key={index} className="flex justify-center items-center border-2 border-gray-300 w-12 h-12">{letter}</div>
            })
            
    return (
        <div className="flex gap-1">
            {letterArrayElements}
        </div>
    );
}
 
export default Row;