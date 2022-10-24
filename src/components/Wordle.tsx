import {FaBars, FaQuestionCircle } from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {GiPodium} from "react-icons/gi"

interface WordleProps {
    
}
 
const Wordle : React.FC<WordleProps> = () => {
    return ( 
        <nav className="flex ">
            <FaBars/>
            <h1>Wordle</h1>
            <FaQuestionCircle/>
            <GiPodium/>
            <AiFillSetting/>
        </nav>
     );
}
 
export default Wordle ;