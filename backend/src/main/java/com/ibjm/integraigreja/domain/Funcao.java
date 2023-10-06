package com.ibjm.integraigreja.domain;

import com.ibjm.integraigreja.domain.dto.GrupoDTO;
import com.ibjm.integraigreja.domain.dto.IgrejaDTO;
import com.ibjm.integraigreja.domain.dto.MembroDTO;
import com.ibjm.integraigreja.domain.enums.TipoFuncao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Funcao {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String descricao;
    private TipoFuncao tipoFuncao;
    private IgrejaDTO igreja;
    private GrupoDTO estrutura;
    private List<MembroDTO> membros = new ArrayList<>();

}
