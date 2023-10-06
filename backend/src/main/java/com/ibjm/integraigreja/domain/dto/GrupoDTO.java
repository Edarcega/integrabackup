package com.ibjm.integraigreja.domain.dto;

import com.ibjm.integraigreja.domain.Grupo;
import com.ibjm.integraigreja.domain.enums.TipoGrupo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class GrupoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String id;
    private String nome;
    private TipoGrupo tipoGrupo;

    public GrupoDTO(Grupo grupo) {
        this.id = grupo.getId();
        this.nome = grupo.getNome();
        this.tipoGrupo = grupo.getTipoGrupo();
    }
}
