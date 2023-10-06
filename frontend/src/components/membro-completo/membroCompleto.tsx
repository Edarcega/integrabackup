import axios from "axios";
import Membroicon from '../../assets/img/membro_icon.png'
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Membro } from "../../models/membro";
import { useParams } from "react-router-dom";
import { BASE_URL_PAGES } from "../../utils/request";


function Mombrocompleto() {

    const { id } = useParams();

    const [membro, setMembro] = useState<Membro>();

    useEffect(() => {
        axios.get(`${BASE_URL}/membros/${id}`)
            .then(response => {
                setMembro(response.data)
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
                            <h5 className="card-title pt-2">{membro?.nome}</h5>
                        </div>
                        <div className="card-body">
                            <img src={Membroicon} alt="..." className="img-thumbnail card-img-minhas-info" />
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
                                                        <p className="paragrafo-sm">Id</p>
                                                        <p className="paragrafo-lg">{membro?.id}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Nome completo</p>
                                                        <p className="paragrafo-lg">{membro?.nome}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Nome completo</p>
                                                        <p className="paragrafo-lg">{membro?.telefone}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">CPF</p>
                                                        <p className="paragrafo-lg">{membro?.cpf}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Identidade</p>
                                                        <p className="paragrafo-lg">{membro?.identidade}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Sexo</p>
                                                        <p className="paragrafo-lg">{membro?.sexo}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Data de Nascimento</p>
                                                        <p className="paragrafo-lg">{new Date(membro?.dataDeNascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Idade</p>
                                                        <p className="paragrafo-lg">{membro?.idade} anos</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Batizado?</p>
                                                        <p className="paragrafo-lg">{membro?.batizado}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Nascionalidade </p>
                                                        <p className="paragrafo-lg">{membro?.nascionalidade}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Nome do Pai</p>
                                                        <p className="paragrafo-lg">{membro?.nomeDoPai}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Nome da Mãe</p>
                                                        <p className="paragrafo-lg">{membro?.nomeDaMae}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Profissão</p>
                                                        <p className="paragrafo-lg">{membro?.profissao}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Estado Civil </p>
                                                        <p className="paragrafo-lg">{membro?.estadoCivil}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Possui Filhos? (Menores) </p>
                                                        <p className="paragrafo-lg">{membro?.possuiFilhos}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">PNE</p>
                                                        <p className="paragrafo-lg">{membro?.portadorDeNecessidadesEspeciais}</p>
                                                    </li>
                                                    <li className="list-group-item">

                                                        <p className="paragrafo-sm">Qual?</p>
                                                        <p className="paragrafo-lg">{membro?.detalhamentoPne}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Tipo </p>
                                                        <p className="paragrafo-lg">{membro?.tipoMembro}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Data Cadastro </p>
                                                        <p className="paragrafo-lg">{new Date(membro?.dataCadastro).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                    </div>

                                    {/* ENDERECO*/}
                                    <div className="card">
                                        <div className="card-header" id="headingEndereco">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEndereco" aria-expanded="false" aria-controls="collapseEndereco">
                                                    <h5>ENDEREÇO</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseEndereco" className="collapse" aria-labelledby="headingEndereco" data-parent="#accordionMembro">
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Logradouro</p>
                                                        <p className="paragrafo-lg">{membro?.endereco?.logradouro}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Numero </p>
                                                        <p className="paragrafo-lg">{membro?.numero}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Complemento</p>
                                                        <p className="paragrafo-lg">{membro?.complemento}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">CEP</p>
                                                        <p className="paragrafo-lg">{membro?.endereco?.cep}</p>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p className="paragrafo-sm">Localidade</p>
                                                        <p className="paragrafo-lg">{membro?.endereco?.localidade} / {membro?.endereco?.uf}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2"></div>

                                    {/* FILHOS*/}
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <h5>FILHOS</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionMembro">

                                            <div className="card-body">


                                                {membro?.filhos?.map(x => {
                                                    return (
                                                        <ul key={x?.id} className="list-group">
                                                            <li className="list-group-item active">
                                                                {x?.nome}
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">CPF:</p>
                                                                <p className="paragrafo-lg">{x?.cpf}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Identidade:</p>
                                                                <p className="paragrafo-lg">{x?.identidade}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Sexo:</p>
                                                                <p className="paragrafo-lg">{x?.sexo}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Data de nascimento:</p>
                                                                <p className="paragrafo-lg">{new Date(x.dataDeNascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Nascionalidade:</p>
                                                                <p className="paragrafo-lg">{x?.nascionalidade}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Nome do pai:</p>
                                                                <p className="paragrafo-lg">{x?.pai.nome}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Nome da mãe:</p>
                                                                <p className="paragrafo-lg">{x?.mae.nome}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">PCD?:</p>
                                                                <p className="paragrafo-lg">{x?.portadorDeNecessidadesEspeciais}</p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p className="paragrafo-sm">Detalhe PCD?:</p>
                                                                <p className="paragrafo-lg">{x?.detalhamentoPne}</p>
                                                            </li>
                                                            <div className="pt-2"></div>
                                                        </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2"></div>

                                    {/* GRUPOS */}

                                    <div className="card">
                                        <div className="card-header" id="headingGrupo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseGrupo" aria-expanded="false" aria-controls="collapseGrupo">
                                                    <h5>GRUPOS</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseGrupo" className="collapse" aria-labelledby="headingGrupo" data-parent="#accordionMembro">
                                            <div className="card-body">

                                                <div className="container">
                                                    {membro?.grupos?.map(x => {
                                                        return (
                                                            <ul key={x.id} className="list-group">
                                                                <li className="list-group-item list-group-item-primary">
                                                                    <a href={`${BASE_URL_PAGES}/#/grupo/${x.id}`}>{x?.nome}</a>
                                                                </li>
                                                                {/* <li className="list-group-item">
                                                                    <h5>Id:</h5>
                                                                    <p><a href={`${BASE_URL_PAGES}/#/grupo/${x.id}`}>{x.id}</a></p>
                                                                </li> */}
                                                                <li className="list-group-item">
                                                                    <p>Tipo: {x?.tipoGrupo}</p>
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

                                                <div className="container">
                                                    {membro?.funcoes?.map(x => {
                                                        return (
                                                            <ul key={x.id} className="list-group">
                                                                <li className="list-group-item active">
                                                                    {x?.descricao}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <p className="paragrafo-sm">Estrutura:</p>
                                                                    <p className="paragrafo-lg">{x?.estrutura?.nome}</p>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <p className="paragrafo-sm">Tipo:</p>
                                                                    <p className="paragrafo-lg">{x?.tipoFuncao}</p>
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

                                    {/* CONJUGE */}

                                    <div className="card">
                                        <div className="card-header" id="headingConj">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseConj" aria-expanded="false" aria-controls="collapseConj">
                                                    <h5>CONJUGE</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseConj" className="collapse" aria-labelledby="headingConj" data-parent="#accordionMembro">
                                            <div className="card-body">
                                                <div className="card">
                                                    <ul className="list-group">
                                                        <li className="list-group-item active">
                                                            {membro?.conjuge?.nome}
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">Id Membro:</p>
                                                            <p className="paragrafo-lg"><a href={`${BASE_URL_PAGES}/#/membro/${membro?.conjuge?.idMembro}`} target="_blank">{membro?.conjuge?.idMembro}</a></p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">Email:</p>
                                                            <p className="paragrafo-lg">{membro?.conjuge?.email}</p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">Data de nascimento:</p>
                                                            <p className="paragrafo-lg">{new Date(membro?.conjuge?.dataDeNascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">Nacionalidade:</p>
                                                            <p className="paragrafo-lg">{membro?.conjuge?.nascionalidade}</p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">Profissão: </p>
                                                            <p className="paragrafo-lg">{membro?.conjuge?.profissao}</p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p className="paragrafo-sm">É membro? </p>
                                                            <p className="paragrafo-lg">{membro?.conjuge?.ehMembro}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Mombrocompleto