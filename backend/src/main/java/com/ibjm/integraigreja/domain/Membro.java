package com.ibjm.integraigreja.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ibjm.integraigreja.domain.dto.ConjugeDTO;
import com.ibjm.integraigreja.domain.dto.GrupoDTO;
import com.ibjm.integraigreja.domain.dto.IgrejaDTO;
import com.ibjm.integraigreja.domain.enums.EstadoCivil;
import com.ibjm.integraigreja.domain.enums.TipoMembro;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Membro {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String nome;
    private String email;
    private String cpf;
    private String identidade;
    private Character sexo;
    private LocalDate dataDeNascimento;
    private String nascionalidade;
    private Endereco endereco;
    private String numero;
    private String complemento;
    private String nomeDoPai;
    private String nomeDaMae;
    private String profissao;
    private EstadoCivil estadoCivil;
    private ConjugeDTO conjuge;
    private Date dataDoCasamento; // remover este atributo, vai ficar no conjuge
    private String possuiFilhos;
    private String portadorDeNecessidadesEspeciais;
    private String detalhamentoPne;
    @DBRef(lazy = true)
    private List<Filho> filhos = new ArrayList<>();
    private LocalDate dataCadastro;
    private String batizado;
    private String igrejaAnterior;
    private IgrejaDTO igreja;
    private TipoMembro tipoMembro;
    @DBRef
    private List<Funcao> funcoes = new ArrayList<>();
    private Usuario usuario;
    @Transient
    private Integer idade;
    private List<GrupoDTO> grupos = new ArrayList<>();
    private String telefone;

    public Integer getIdade() {
        LocalDate now = LocalDate.now();
        long l = (now.getLong(ChronoField.EPOCH_DAY) - dataDeNascimento.getLong(ChronoField.EPOCH_DAY))/365;
        Integer idade = (Integer.parseInt(String.valueOf(l)));
        return idade;
    }
}
