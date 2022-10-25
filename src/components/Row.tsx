import {useState} from "react"

interface RowProps {
    
}
 
const Row: React.FunctionComponent<RowProps> = () => {
    const [squareArray, setSquareArray] = useState(new Array(5).fill(null))
    const squareArrayElements = 
            squareArray.map((square,index) =>{
                return <div key={index} className="border border-black">A</div>
            })
    return (
        <div className="flex">
            {squareArrayElements}
        </div>
    );
}
 
export default Row;