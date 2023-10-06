import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Igreja } from "../../models/igreja";
import { useParams } from "react-router-dom";


function Igacomp() {

    const {id} = useParams();

    const [ig, setIgrejas] = useState<Igreja>();

    useEffect(() => {
        axios.get(`${BASE_URL}/igrejas/${id}`)
            .then(response => {
                setIgrejas(response.data)
                console.log(response.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <section className="container" id="tabela-igrejas-sumarizado">
                <div className="row justify-content-center">
                    <div className="container pt-3">
                        <h1 className="text-center fonte-titulo-body pt-3">Informações de Igreja</h1>
                    </div>
                    <div className="table-responsive table-hover table-striped">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">DADO</th>
                                    <th scope="col">INFORMAÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td>{ig?.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">NOME</th>
                                    <td>{ig?.nome}</td>
                                </tr>
                                <tr>
                                    <th scope="row">RAZÃO SOCIAL</th>
                                    <td>{ig?.razaosocial}</td>
                                </tr>
                                <tr>
                                    <th scope="row">DENOMINAÇÃO</th>
                                    <td>{ig?.denominacao}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CNPJ</th>
                                    <td>{ig?.cnpj}</td>
                                </tr>
                                <tr>
                                    <th scope="row">EMAIL</th>
                                    <td>{ig?.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ENDEREÇO</th>
                                    <td>{ig?.endereco.logradouro}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CEP</th>
                                    <td>{ig?.endereco.cep}</td>
                                </tr>
                                <tr>
                                    <th scope="row">NUMERO</th>
                                    <td>{ig?.numero}</td>
                                </tr>
                                <tr>
                                    <th scope="row">RESPONSAVEL</th>
                                    <td>{ig?.responsavel}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CARGO</th>
                                    <td>{ig?.cargo}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CPF-RESPONSAVEL</th>
                                    <td>{ig?.cpfresponsavel}</td>
                                </tr>
                                <tr>
                                    <th scope="row">TELEFONE-RESPONSAVEL</th>
                                    <td>{ig?.telefoneresponsavel}</td>
                                </tr>
                                <tr>
                                    <th scope="row">STATUS</th>
                                    <td>{ig?.statusIgreja}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Igacomp