package com.ibjm.integraigreja.resources;

import com.ibjm.integraigreja.domain.Endereco;
import com.ibjm.integraigreja.domain.Funcao;
import com.ibjm.integraigreja.domain.Igreja;
import com.ibjm.integraigreja.domain.Membro;
import com.ibjm.integraigreja.domain.dto.ConjugeDTO;
import com.ibjm.integraigreja.domain.dto.IgrejaDTO;
import com.ibjm.integraigreja.services.EnderecoService;
import com.ibjm.integraigreja.services.IgrejaService;
import com.ibjm.integraigreja.services.MembroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Date;

@RestController
@RequestMapping(value = "/membros")
public class MembroResouces {

    @Autowired
    private MembroService service;

    @Autowired
    private IgrejaService igrejaService;

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<Membro>> consultarTodos() {
        List<Membro> list = service.consultarTodos();
        return ResponseEntity.ok().body(list);
    }

    //@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @GetMapping(value = "/{id}")
    public ResponseEntity<Membro> consultarPorId(@PathVariable String id) {
        Membro membro = service.consultarPorId(id);
        return ResponseEntity.ok().body(membro);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Membro membro) {
        // Necessário criar os metodos de validação de campos obrigatórios
        Endereco endereco = enderecoService.findByCep(membro.getEndereco().getCep());
        Igreja igreja = igrejaService.consultarPorId(membro.getIgreja().getId());
        LocalDate localDate;

        Membro newMembro;
        newMembro = new Membro(null,
                membro.getNome(),
                membro.getEmail(),
                membro.getCpf(),
                membro.getIdentidade(),
                membro.getSexo(),
                localDate = membro.getDataDeNascimento(),
                membro.getNascionalidade(),
                endereco,
                membro.getNumero(),
                membro.getComplemento(),
                membro.getNomeDoPai(),
                membro.getNomeDaMae(),
                membro.getProfissao(),
                membro.getEstadoCivil(),
                membro.getConjuge(),
                membro.getDataDoCasamento(),
                membro.getPossuiFilhos(),
                membro.getPortadorDeNecessidadesEspeciais(),
                membro.getDetalhamentoPne(),
                membro.getFilhos(),
                LocalDate.now(),
                membro.getBatizado(),
                membro.getIgrejaAnterior(),
                new IgrejaDTO(igrejaService.consultarPorId(igreja.getId())),
                membro.getTipoMembro(),
                membro.getFuncoes(),
                membro.getUsuario(),
                null,
                membro.getGrupos(), membro.getTelefone());
        membro = service.inserir(newMembro);

        igreja.getMembros().add(newMembro);
        igrejaService.atualiza(igreja.getId(), igreja);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(membro.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> atualiza(@RequestBody Membro membro, @PathVariable String id) {
        Membro obj = service.atualiza(id, membro);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/addfuncao/{id}")
    public ResponseEntity<Void> atualizaFuncao(@RequestBody Funcao funcao, @PathVariable String id) {
        Membro obj = service.atualizaFuncao(id, funcao);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/addconjuge/{id}")
    public ResponseEntity<Void> addConjuge(@RequestBody ConjugeDTO conjuge, @PathVariable String id) {
        Membro obj = service.addConjuge(id, conjuge);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
