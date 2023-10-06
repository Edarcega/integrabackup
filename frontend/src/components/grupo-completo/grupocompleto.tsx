import axios from "axios";
import Grupoicon from '../../assets/img/membro_icon_2.png'
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Grupo } from "../../models/grupo";
import { useParams } from "react-router-dom";
import { BASE_URL_PAGES } from "../../utils/request";
import Funcao from "../../components/funcoes/funcoes";


function GrupoCompleto() {

    const { id } = useParams();

    const [grupo, setGrupo] = useState<Grupo>();

    useEffect(() => {
        axios.get(`${BASE_URL}/grupos/${id}`)
            .then(response => {
                setGrupo(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <>

            <section className="container pt-2" id="painel-membro-completo">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title pt-2">{grupo?.nome}</h5>
                        </div>
                        <div className="card-body">
                            <img src={Grupoicon} alt="..." className="img-thumbnail card-img-minhas-info" />
                            <div className="tab-content pt-1" id="nav-tabContent">

                                <div className="accordion pt-3" id="accordionMembro">

                                    {/* DADOS GERAIS */}
                                    <div className="card">
                                        <div className="card-header" id="headingGeral">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseGeral" aria-expanded="false" aria-controls="collapseGeral">
                                                    <h5>DADOS GERAIS</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseGeral" className="collapse" aria-labelledby="headingGeral" data-parent="#accordionMembro">
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <h5>Id</h5>
                                                        <p>{grupo?.id}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5>Tipo</h5>
                                                        <p>{grupo?.tipoGrupo}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5>Nome do Grupo</h5>
                                                        <p>{grupo?.nome}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5 className="text-primary">Líder</h5>
                                                        <p>{grupo?.lider?.nome}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5 className="text-warning">Vice Líder</h5>
                                                        <p>{grupo?.viceLider?.nome}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5>Igreja</h5>
                                                        <p>{grupo?.igreja.nome}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <h5>Estrutura</h5>
                                                        <p>{grupo?.ministerio?.nome}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                    </div>

                                    {/* INTEGRANTES*/}
                                    <div className="card">
                                        <div className="card-header" id="headingInteg">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseInteg" aria-expanded="false" aria-controls="collapseInteg">
                                                    <h5>INTEGRANTES</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseInteg" className="collapse" aria-labelledby="headingInteg" data-parent="#accordionMembro">
                                            <div className="card-body">

                                                <div className="container">
                                                    {grupo?.participantes.map(y => {
                                                        return (
                                                            <ul key={y.idMembro} className="list-group">
                                                                <li className="list-group-item active">
                                                                    {y?.nome}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <h5>Id:</h5>
                                                                    <p><a href={`${BASE_URL_PAGES}/#/membro/${y.idMembro}`}>{y.idMembro}</a></p>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <h5>Tipo:</h5>
                                                                    <p>{y?.tipoMembro}</p>
                                                                </li>
                                                                <div className="pt-2"> </div>
                                                            </ul>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2"></div>


                                    {/* FUNCOES */}

                                    <div className="card">
                                        <div className="card-header" id="headingFunc">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFunc" aria-expanded="false" aria-controls="collapseFunc">
                                                    <h5>FUNÇÕES</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFunc" className="collapse" aria-labelledby="headingFunc" data-parent="#accordionMembro">
                                            <div className="card-body">
                                                {grupo?.funcoes?.map(x => {
                                                    return (
                                                        <>
                                                            <div className="card">

                                                                <ul key={x?.id} className="list-group">
                                                                    <li className="list-group-item active"> {x?.descricao} | {x?.tipoFuncao}</li>
                                                                    <li className="list-group-item"> <Funcao funId={x?.id}/></li>                                                   
                                                                </ul>
                                                            </div>
                                                            <div className="pt-2"> </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2"></div>

                                    {/* colaboradores */}

                                </div>
                                <div className="pt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GrupoCompleto