import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_PAGES } from "../../utils/request";
import { useParams } from "react-router-dom";
import { Igreja } from "../../models/igreja";




function membros() {

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
                    <h1 className="text-center fonte-titulo-body pt-3">Painel cadastro de Membros</h1>
                </div>
                <div className="table-responsive table-hover table-striped">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th scope="col">ID</th> */}
                                <th scope="col">Nome Completo</th>
                                <th scope="col">Tipo Membro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {igreja?.membros.map(x => {
                                return (
                                    <tr key={x.id}>
                                        {/* <td>
                                            <a href={`${BASE_URL_PAGES}/#/membro/${x.id}`}>{x.id}</a>
                                        </td> */}
                                        <td><a href={`${BASE_URL_PAGES}/#/membro/${x.id}`}>{x.nome}</a></td>
                                        <td>{x.tipoMembro}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default membros