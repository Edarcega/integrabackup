import axios from "axios";
import { BASE_URL } from "./request";
import Igasum from "../components/igasum/igasum";

type Props = {
    idIgreja: string;
}

function Evento ({idIgreja} : Props) {
    

    function handleClick(id : string) {
        axios(`${BASE_URL}/igrejas/${id}`)
        .then(response => {
            console.log(response.data)
        })

        return (
            <Igasum/>
        )
    }

    return(
        <div>
            <button className="btn btn-primary" type="submit" onClick={() => handleClick(idIgreja)}>{idIgreja}</button>
        </div>
    )
}

export default Evento