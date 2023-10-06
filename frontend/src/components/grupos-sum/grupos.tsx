import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_PAGES } from "../../utils/request";
import { useParams } from "react-router-dom";
import { Igreja } from "../../models/igreja";

function grupos() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [igreja, setIgreja] = useState<Igreja>();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`${BASE_URL}/igrejas/${id}`)
            .then(response => {
                setIgreja(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="container" id="tabela-membros-sumarizado">
            <div className="row justify-content-center">
                <div className="container pt-3">
                    <h1 className="text-center fonte-titulo-body pt-3">Painel Grupos</h1>
                </div>

                <div className="container">
                    {igreja?.grupos.map(x => {
                        return (
                            <ul key={x?.id} className="list-group">
                                <li className="list-group-item list-group-item-primary">{x.tipoGrupo}: <a href={`${BASE_URL_PAGES}/#/grupo/${x.id}`} className="alert-link"> {x.nome} </a> </li>
                                <li className="list-group-item">Líder: {x?.lider?.nome} </li>
                                <li className="list-group-item">Vice: {x?.viceLider?.nome} </li>
                                <li className="list-group-item">Estrutura: {x?.ministerio?.nome} </li>
                                <div className="pt-2"></div>
                            </ul>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default grupos