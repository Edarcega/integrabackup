export type Membro = {
    "id": string;
    "nome": string;
    "email": string;
    "cpf": string;
    "identidade": string;
    "sexo": string;
    "dataDeNascimento": string;
    "nascionalidade": string;
    "idade" : number;
    "telefone": string;
    "endereco": {
        "cep": string;
        "logradouro": string;
        "complemento": string;
        "bairro": string;
        "localidade": string;
        "uf": string;
        "ibge": string;
        "gia": string;
        "ddd": string;
        "siafi": string;
    },
    "numero": string;
    "complemento": string;
    "nomeDoPai": string;
    "nomeDaMae": string;
    "profissao": string;
    "estadoCivil": string;
    "conjuge": {
        "idMembro": string;
        "nome": string;
        "email": string;
        "cpf": string;
        "dataDeNascimento": string;
        "nascionalidade": string;
        "profissao": string;
        "ehMembro": boolean;
    },
    "dataDoCasamento": string;
    "possuiFilhos": string;
    "portadorDeNecessidadesEspeciais": string;
    "detalhamentoPne": string;
    "filhos": [
        {
            "id": string;
            "nome": string;
            "cpf": string;
            "identidade": string;
            "sexo": string;
            "dataDeNascimento": Date;
            "nascionalidade": string;
            "endereco": string;
            "numero": string;
            "pai": {
                "idMembro": string;
                "nome": string;
            },
            "mae": {
                "idMembro": string;
                "nome": string;
            },
            "portadorDeNecessidadesEspeciais": string;
            "detalhamentoPne": string;
        }
    ];
    "dataCadastro": "2023-05-14T18:21:12.189+00:00";
    "dataDaInscricao": "2023-05-14T18:21:12.189+00:00";
    "batizado": string;
    "igrejaAnterior": string;
    "igreja": {
        "id": string;
        "nome": string;
    },
    "tipoMembro": string;
    "funcoes": [
        {
            "id": "64b86e1591204b537ec4ea36",
            "descricao": "VICE LÍDER MINISTERIAL",
            "tipoFuncao": "REMUNERADO",
            "igreja": {
                "id": "64b2b8e3af06d53e804e33b9",
                "nome": "Igreja Batista Jardim Maracanã"
            },
            "estrutura": {
                "id": "64b751fa7bbb4126bc53fc57",
                "nome": "ALFA",
                "tipoGrupo": "PGM"
            }
        }
    ],
    "usuario": null
    "grupos": [
        {
            "id": string;
            "nome": string;
            "tipoGrupo": string;
        }
    ]

}