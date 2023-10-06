import logo from '../../assets/img/Marca-IBJM.png'
import { BASE_URL_PAGES } from "../../utils/request";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>

                </div>
                <a className="navbar-brand" href={`${BASE_URL_PAGES}/#/paineladm`}>
                    <img src={logo} width="60" height="60" alt="" />
                </a>
                <a className="navbar-brand" href={`${BASE_URL_PAGES}/#/paineladm`}>
                    <h1 className="fonte-titulo mx-auto">Integra Igreja</h1>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href={`${BASE_URL_PAGES}/#/paineladm`}>Home<span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>

    )
}

export default Header