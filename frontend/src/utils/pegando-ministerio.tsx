type Props = {
    nomeMinisterio: string;
}

function setNome({ nomeMinisterio }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let nomMinisterio = nomeMinisterio

    function setNom(nomeMinisterio: string): void {
        if (nomeMinisterio != null) {
            nomMinisterio = nomeMinisterio
        } else {
            nomMinisterio = " - "
        }
    }

    return(
        <td>setNom</td>
    )
}

export default setNome