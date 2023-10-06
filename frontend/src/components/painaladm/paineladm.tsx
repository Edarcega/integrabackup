import igrejaicon from '../../assets/img/church_icon.png'
import membroicon from '../../assets/img/membro_icon.png'
import usericon from '../../assets/img/user_icon.png'
import { BASE_URL_PAGES } from "../../utils/request";

function Paineladm() {
    return (
        <>
            <div className="container pt-3">
                <h1 className="text-center fonte-titulo-body pt-3">Painel Administração</h1>
            </div>

            <section className="container" id="igrejas">
                <div className="row justify-content-center">

                    <article className="card background-card article-card p-0 m-2 col-md-3">
                        <div className="row justify-content-center">
                            <div className="img-cad-dimension">
                                <img className="card-img-top card-img-igreja" src={igrejaicon}
                                    alt="Imagem de capa do card" />
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Adm Igreja</h5>
                            <p className="card-text">Clique no botão abaixo para mais informações</p>
                            <a href={`${BASE_URL_PAGES}/#/igrejas`} className="btn btn-primary">Acessar</a>
                        </div>
                    </article>

                    <article className="card background-card article-card p-0 m-2 col-md-3">
                        <div className="row justify-content-center">
                            <div className="img-cad-dimension">
                                <img className="card-img-top card-img-igreja" src={usericon}
                                    alt="Imagem de capa do card" />
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Adm Usuário</h5>
                            <p className="card-text">Clique no botão abaixo para mais informações</p>
                            <a href="#" className="btn btn-primary">Acessar</a>
                        </div>
                    </article>

                    <article className="card background-card article-card p-0 m-2 col-md-3">
                        <div className="row justify-content-center">
                            <div className="img-cad-dimension">
                                <img className="card-img-top card-img-igreja" src={membroicon}
                                    alt="Imagem de capa do card" />
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Área de Membro</h5>
                            <p className="card-text">Clique no botão abaixo para mais informações</p>
                            <a href="#" className="btn btn-primary">Acessar</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Paineladm