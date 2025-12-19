package com.enrollmesh.backend.repository;

import com.enrollmesh.backend.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<Module, Long> {
}
