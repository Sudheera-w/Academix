package com.enrollmesh.backend.service;

import com.enrollmesh.backend.entity.Module;
import java.util.List;

public interface ModuleService {
    List<Module> getAllModules();
    Module getModuleById(Long id);
    Module createModule(Module module);
    Module updateModule(Long id, Module module);
    void deleteModule(Long id);
}
