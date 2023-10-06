export type Igreja = {
    "id": string;
    "nome": string;
    "razaosocial": "Igreja Jardim Maracanã",
    "denominacao": "Batista",
    "cnpj": "02.735.285/0001-34",
    "email": "ibjm@ibjm.com.br",
    "telefone": "(41) 99748-4172",
    "dataCadastro": string;
    "endereco": {
        "cep": "83405-010",
        "logradouro": "Rua Princesa Izabel",
        "complemento": "",
        "bairro": "Rio Verde",
        "localidade": "Colombo",
        "uf": "PR",
        "ibge": "4105805",
        "gia": "",
        "ddd": "41",
        "siafi": "7513"
    },
    "numero": "2039",
    "responsavel": "Anderson da Silva Castro",
    "cargo": "Pastor Titular",
    "cpfresponsavel": "000.003.00-00",
    "telefoneresponsavel": "(41) 99748-4172",
    "statusIgreja": "ATIVO",
    "membros": [
        {
            "id": "646a12234743086e5c810f7d",
            "nome": "Edimar Árcega",
            "email": "ander.castro@gmail.com",
            "cpf": "009.881.109-00",
            "identidade": "9064754-7",
            "sexo": "M",
            "dataDeNascimento": "1986-12-18T00:00:00.000+00:00",
            "nascionalidade": "Brasileira",
            "endereco": {
                "cep": "83407-325",
                "logradouro": "Rua Gaspar Kania",
                "complemento": "",
                "bairro": "Guaraituba",
                "localidade": "Colombo",
                "uf": "PR",
                "ibge": "4105805",
                "gia": "",
                "ddd": "41",
                "siafi": "7513"
            },
            "numero": "50",
            "complemento": "Apartamento 16",
            "nomeDoPai": "Jose Julho",
            "nomeDaMae": "Sirlei Martins",
            "profissao": "Analista de sistemas",
            "estadoCivil": "CASADO",
            "conjuge": null,
            "dataDoCasamento": null,
            "possuiFilhos": true,
            "portadorDeNecessidadesEspeciais": false,
            "detalhamentoPne": "Não se aplica",
            "filhos": [],
            "dataCadastro": "2023-05-14T18:21:12.189+00:00",
            "dataDaInscricao": "2023-05-14T18:21:12.189+00:00",
            "batizado": true,
            "igrejaAnterior": "Igreja Batista do Bacacheri",
            "igreja": {
                "id": "646a119f4743086e5c810f7c",
                "nome": "Igreja Jardim Maracanã"
            },
            "tipoMembro": "MEMBRO",
            "funcoes": [
                {
                    "id": "646a13654743086e5c810f81",
                    "descricao": "Ministro de Louvor",
                    "tipoFuncao": "VOLUNTARIO",
                    "igreja": {
                        "id": "646a119f4743086e5c810f7c",
                        "nome": "Igreja Jardim Maracanã"
                    }
                }
            ],
            "usuario": null
        }
    ],
    "grupos": [
        {
            "id": "64a2d397b6ad7032c9e07475",
            "igreja": {
                "id": "649f12f1537325637a6cceaa",
                "nome": "Igreja Batista Jardim Maracanã"
            },
            "lider": {
                "idMembro": string;
                "nome": string;
                "tipoMembro": string;
            },
            "viceLider": {
                "idMembro": string;
                "nome": string;
                "tipoMembro": string;
            },
            "participantes": [],
            "statusGrupo": "ATIVO",
            "tipoGrupo": "DEPARTAMENTO",
            "ministerio": {
                "id": "649f398c3d28a4789dfb6635",
                "igreja": {
                    "id": "649f12f1537325637a6cceaa",
                    "nome": "Igreja Batista Jardim Maracanã"
                },
                "lider": {
                    "id": "649f3abd3d28a4789dfb663c",
                    "nome": "EDIMAR DOS SANTOS ÁRCEGA",
                    "tipoMembro": "FREQUENTANTE"
                },
                "viceLider": null,
                "participantes": [],
                "statusGrupo": "ATIVO",
                "tipoGrupo": "MINISTERIO",
                "ministerio": null,
                "funcoes": [],
                "nome": "SERVIÇOS"
            },
            "funcoes": [],
            "nome": "Patrimonio"
        }
    ],
    "classes": [
        {
            "id": "646a13044743086e5c810f80",
            "igreja": {
                "id": "646a119f4743086e5c810f7c",
                "nome": "Igreja Jardim Maracanã"
            },
            "tipoClasse": "ADULTO",
            "professor": null,
            "alunos": [
                {
                    "id": "646a12234743086e5c810f7d",
                    "nome": "Edimar Árcega",
                    "tipoMembro": "MEMBRO"
                }
            ],
            "statusClasse": "ATIVO",
            "nome": "Teste Teste Teste"
        }
    ],
    "filiais": []
}