package com.ibjm.integraigreja.domain.dto;

import com.ibjm.integraigreja.domain.Membro;
import com.ibjm.integraigreja.domain.enums.TipoMembro;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class MembroDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String idMembro;
    private String nome;
    private TipoMembro tipoMembro;

    public MembroDTO(Membro membro) {
        this.idMembro = membro.getId();
        this.nome = membro.getNome();
        this.tipoMembro = membro.getTipoMembro();
    }
}
