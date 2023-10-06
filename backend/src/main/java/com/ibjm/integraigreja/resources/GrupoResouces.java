package com.ibjm.integraigreja.resources;

import com.ibjm.integraigreja.domain.*;
import com.ibjm.integraigreja.domain.Grupo;
import com.ibjm.integraigreja.domain.dto.GrupoDTO;
import com.ibjm.integraigreja.domain.dto.IgrejaDTO;
import com.ibjm.integraigreja.domain.dto.MembroDTO;
import com.ibjm.integraigreja.domain.enums.StatusGrupo;
import com.ibjm.integraigreja.domain.enums.TipoGrupo;
import com.ibjm.integraigreja.repositories.MembroRepository;
import com.ibjm.integraigreja.services.GrupoService;
import com.ibjm.integraigreja.services.IgrejaService;
import com.ibjm.integraigreja.services.MembroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/grupos")
public class GrupoResouces {

    @Autowired
    private GrupoService service;

    @Autowired
    IgrejaService igrejaService;

    @Autowired
    MembroService membroService;

    @Autowired
    MembroRepository membroRepository;

    @GetMapping
    public ResponseEntity<List<Grupo>> consultarTodos() {
        List<Grupo> list = service.consultarTodos();
        return ResponseEntity.ok().body(list);
    }

    //@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @GetMapping(value = "/{id}")
    public ResponseEntity<Grupo> consultarPorId(@PathVariable String id) {
        Grupo grupo = service.consultarPorId(id);
        return ResponseEntity.ok().body(grupo);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Grupo grupo) {
        Igreja igreja = igrejaService.consultarPorId(grupo.getIgreja().getId());

        Grupo newGrupo = grupo;

        if (newGrupo.getMinisterio() != null) {
            //Grupo grupoToDto = service.consultarPorId(grupo.getMinisterio().getId());
            newGrupo.setMinisterio(new GrupoDTO(service.consultarPorId(grupo.getMinisterio().getId())));
        }
        grupo = service.inserir(newGrupo);
        igreja.getGrupos().add(grupo);
        igrejaService.atualiza(igreja.getId(), igreja);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(grupo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> atualiza(@RequestBody Grupo grupo, @PathVariable String id) {
        Grupo obj = service.atualiza(id, grupo);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/inserirparticipantes/{id}")
    public ResponseEntity<Void> inserirparticipante(@RequestBody Grupo grupo, @PathVariable String id) {
        Grupo obj = service.inserirparticipante(id, grupo);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/inserirlider/{id}")
    public ResponseEntity<Void> inserirlider(@RequestBody Grupo grupo, @PathVariable String id) {
        Grupo obj = service.inserirlider(id, grupo);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/inserirvicelider/{id}")
    public ResponseEntity<Void> inserirVicelider(@RequestBody Grupo grupo, @PathVariable String id) {
        Grupo obj = service.inserirViceLider(id, grupo);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
