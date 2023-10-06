package com.ibjm.integraigreja.services;

import com.ibjm.integraigreja.domain.Classe;
import com.ibjm.integraigreja.domain.Grupo;
import com.ibjm.integraigreja.domain.Membro;
import com.ibjm.integraigreja.domain.dto.GrupoDTO;
import com.ibjm.integraigreja.domain.dto.MembroDTO;
import com.ibjm.integraigreja.repositories.GrupoRepository;
import com.ibjm.integraigreja.repositories.MembroRepository;
import com.ibjm.integraigreja.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    @Autowired
    private MembroService membroService;

    @Autowired
    private MembroRepository membroRepository;

    public List<Grupo> consultarTodos() {
        return grupoRepository.findAll();
    }

    // Verificar porque do optional
    public Grupo consultarPorId(String id) {
        Optional<Grupo> grupo = grupoRepository.findById(id);
        return grupo.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public Grupo inserir(Grupo obj) {
        return grupoRepository.insert(obj);
    }

    public Grupo atualiza(String id, Grupo grupo) {
        Grupo newGrupo = consultarPorId(id);
        atualizarDados(newGrupo, grupo);
        return grupoRepository.save(newGrupo);
    }

    private void atualizarDados(Grupo newGrupo, Grupo grupo) {
        newGrupo.setNome(grupo.getNome());
        newGrupo.setStatusGrupo(grupo.getStatusGrupo());
    }

    public Grupo inserirparticipante(String id, Grupo grupo) {
        // Inserir validação se já há um participante com o ID em questão
        Grupo newGrupo = consultarPorId(id);
        List<MembroDTO> list = grupo.getParticipantes();
        List<MembroDTO> participantes = list.stream().map(x -> new MembroDTO(membroService.consultarPorId(x.getIdMembro()))).collect(Collectors.toList());
        newGrupo.getParticipantes().addAll(participantes);
        for (MembroDTO m : participantes) {
            Membro obj = membroService.consultarPorId(m.getIdMembro());
            obj.getGrupos().add(new GrupoDTO(newGrupo));
            membroRepository.save(obj);
        }
        return grupoRepository.save(newGrupo);
    }

    public Grupo inserirlider(String id, Grupo grupo) {
        // Inserir validação se já há um participante com o ID em questão
        Grupo newGrupo = consultarPorId(id);
        newGrupo.setLider(new MembroDTO(membroService.consultarPorId(grupo.getLider().getIdMembro())));
        return grupoRepository.save(newGrupo);
    }

    public Grupo inserirViceLider(String id, Grupo grupo) {
        // Inserir validação se já há um participante com o ID em questão
        Grupo newGrupo = consultarPorId(id);
        newGrupo.setViceLider(new MembroDTO(membroService.consultarPorId(grupo.getLider().getIdMembro())));
        return grupoRepository.save(newGrupo);
    }

    public void delete(String id) {
        consultarPorId(id);
        grupoRepository.deleteById(id);
    }

}
