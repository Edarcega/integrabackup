export type Funcao = {
    "id": string;
    "descricao": string;
    "tipoFuncao": string;
    "igreja": {
        "id": string;
        "nome": string;
    },
    "estrutura": {
        "id": string;
        "nome": string;
        "tipoGrupo": string;
    },
    "membros": [
        {
            "idMembro": string;
            "nome": string;
            "tipoMembro": string;
        }
    ]
}