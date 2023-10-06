package com.ibjm.integraigreja.domain.enums;

public enum TipoGrupo {
    PGM(0), MINISTERIO(1), DEPARTAMENTO(2), CLASSE(3);

    private final int valor;

    TipoGrupo(int valor) {
        this.valor = valor;
    }

    public int getValor() {
        return valor;
    }
}
