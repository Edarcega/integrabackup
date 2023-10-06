import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { IgrejaDto } from "../../models/igrejasdto";
import { BASE_URL_PAGES } from "../../utils/request";


function Igasum() {

    const [igrejasDto, setIgrejasDto] = useState<IgrejaDto[]>([]);


    useEffect(() => {
        axios.get(`${BASE_URL}/igrejas/igrejasdto`)
            .then(response => {
                setIgrejasDto(response.data)
            })
    }, []);


    return (
        <section className="container" id="tabela-igrejas-sumarizado">
            <div className="row justify-content-center">
                <div className="container pt-3">
                    <h1 className="text-center fonte-titulo-body pt-3">Painel cadastro de igrejas</h1>
                </div>
                <div className="table-responsive table-hover table-striped">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th scope="col">ID</th> */}
                                <th scope="col">Nome da Igreja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {igrejasDto.map(x => {
                                return (
                                    <tr key={x.id}>
                                        {/* <td>
                                            <a href={`${BASE_URL_PAGES}/#/paineladmigreja/${x.id}`}>{x.id}</a>
                                        </td> */}
                                        <td><a href={`${BASE_URL_PAGES}/#/paineladmigreja/${x.id}`}>{x.nome}</a></td>
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

export default Igasum