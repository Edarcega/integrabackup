import axios from "axios";
import Grupoicon from '../../assets/img/membro_icon_2.png'
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Funcao } from "../../models/funcao";

type Props = {
    funId: string
}


function embfuncoes({ funId }: Props) {

    const [funcao, setFuncao] = useState<Funcao>();

    useEffect(() => {
        axios.get(`${BASE_URL}/funcoes/${funId}`)
            .then(response => {
                setFuncao(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Fazer um tratamento aqui para retornar um texto de não encontrado quando não houver objeto membro para a função
    return (

        <>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-warning"> Colaboradores: </li>
                </ul>

                {funcao?.membros?.map(x => {
                    return (
                        <>

                            <div className="card">

                                <ul key={x?.idMembro} className="list-group">
                                    <li className="list-group-item"> {x?.nome} | {x?.tipoMembro}</li>
                                </ul>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default embfuncoes