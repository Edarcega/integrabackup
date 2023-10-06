package com.ibjm.integraigreja.resources;

import com.ibjm.integraigreja.domain.Endereco;
import com.ibjm.integraigreja.domain.Filho;
import com.ibjm.integraigreja.domain.Igreja;
import com.ibjm.integraigreja.domain.Usuario;
import com.ibjm.integraigreja.domain.dto.IgrejaDTO;
import com.ibjm.integraigreja.domain.dto.UsuarioDTO;
import com.ibjm.integraigreja.domain.enums.StatusIgreja;
import com.ibjm.integraigreja.services.EnderecoService;
import com.ibjm.integraigreja.services.IgrejaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/igrejas")
public class IgrejaResouces {

    @Autowired
    private IgrejaService service;

    @Autowired
    EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<Igreja>> consultarTodos() {
        List<Igreja> list = service.consultarTodos();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/igrejasdto")
    public ResponseEntity<List<IgrejaDTO>> consultarTodosDTO() {
        List<Igreja> list = service.consultarTodos();
        List<IgrejaDTO> listDto = list.stream().map(x -> new IgrejaDTO(x)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    //@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @GetMapping(value = "/{id}")
    public ResponseEntity<Igreja> consultarPorId(@PathVariable String id) {
        Igreja igreja = service.consultarPorId(id);
        return ResponseEntity.ok().body(igreja);
    }

    @PutMapping(value = "/addgrupo/{id}")
    public ResponseEntity<Void> atualiza(@RequestBody Usuario usuario, @PathVariable String id) {
        System.out.println("Teste");
        return ResponseEntity.noContent().build();
    }

    // Adptar o metodo de criação para quando o CEP não for encontrado
    // Ou verificar se é possível sempre passar o endereço ou ainda as duas coisas dependendo do cenario
    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Igreja igreja) {
        Endereco endereco = enderecoService.findByCep(igreja.getEndereco().getCep());
//        Igreja newIgreja = new Igreja(null, igreja.getNome(), igreja.getRazaosocial(), igreja.getRazaosocial(), igreja.getCnpj(), igreja.getEmail(), igreja.getTelefone(), endereco, igreja.getNumero(),
//                igreja.getResponsavel(), igreja.getCargo(), igreja.getCpfresponsavel(), igreja.getTelefoneresponsavel(), StatusIgreja.ATIVO, igreja.getMembros(),
//                igreja.getGrupos(), igreja.getClasses(), igreja.getFiliais());
        Igreja newIgreja = igreja;
        newIgreja.setStatusIgreja(StatusIgreja.ATIVO);
        newIgreja.setEndereco(enderecoService.findByCep(igreja.getEndereco().getCep()));
        newIgreja.setDataCadastro(LocalDate.now());
        igreja = service.inserir(newIgreja);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(igreja.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> atualiza(@RequestBody Igreja igreja, @PathVariable String id) {
        Igreja obj = service.atualiza(id, igreja);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
