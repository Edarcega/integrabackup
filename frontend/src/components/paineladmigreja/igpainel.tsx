import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { BASE_URL_PAGES } from "../../utils/request";
import { Igreja } from "../../models/igreja";
import fotoigreja from '../../assets/img/church_icon.png'
import { useParams } from "react-router-dom";


function igpainel() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ig, setIgrejas] = useState<Igreja>();

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
            <div className="container-fluid">
                <h1 className="fonte-titulo mx-auto">Painel de acesso rápido</h1>
            </div>

            <section className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Igreja Id: {ig?.id}
                    </div>
                    <div className="card-body">
                        <img src={fotoigreja} alt="..." className="img-thumbnail card-img-minhas-info" />
                        <h5 className="card-title">{ig?.nome}</h5>
                        <p className="card-text">Endereço: {ig?.endereco?.logradouro}</p>
                        <p className="card-text">CEP: {ig?.endereco?.cep}</p>
                        <p className="card-text">Telefone: {ig?.telefone}</p>
                        <p className="card-text">Responsável: {ig?.responsavel}</p>
                        <p className="card-text">Email: {ig?.email}</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ações
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href={`${BASE_URL_PAGES}/#/igreja/${ig?.id}`}>Dados gerais</a>
                                <a className="dropdown-item" href={`${BASE_URL_PAGES}/#/membros/${ig?.id}`}>Membros</a>
                                <a className="dropdown-item" href={`${BASE_URL_PAGES}/#/grupos/${ig?.id}`}>Grupos</a>
                                {/* <a className="dropdown-item" href="#">Classes</a> */}
                                {/* <a className="dropdown-item" href="#">Filiais</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">Data Cadastro: {new Date(ig?.dataCadastro).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                    </div>
                </div>
            </section>

            <p>
                {/* ARRUMAR ISSO AQUI, NAO PODE FICAR ASSIM*/}
            </p>
        </>
    )
}

export default igpainel