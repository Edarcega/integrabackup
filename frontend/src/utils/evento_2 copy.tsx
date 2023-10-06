import { Membro } from "../../models/membro";

function UserGreeting(props) {
    return
    <li className="list-group-item">
        <h5>Conjuge </h5>
        <p>{membro?.dataDaInscricao}</p>
    </li>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Evento3(props) {
    const Membro = props
    if (nome) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;

}

export default Evento3