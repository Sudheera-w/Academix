package com.enrollmesh.backend.controller;

import com.enrollmesh.backend.entity.Module;
import com.enrollmesh.backend.entity.User;
import com.enrollmesh.backend.repository.ModuleRepository;
import com.enrollmesh.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/enrollments")

public class EnrollmentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModuleRepository moduleRepository;

    // Enroll student in module
    @PostMapping("/{studentId}/{moduleId}")
    public User enrollStudent(@PathVariable Long studentId, @PathVariable Long moduleId) {

        User user = userRepository.findById(studentId).orElse(null);
        Module module = moduleRepository.findById(moduleId).orElse(null);

        if (user == null || module == null) {
            return null;
        }

        // Ensure user is a student
        if (!"student".equalsIgnoreCase(user.getRole())) {
            return null;
        }

        if (user.getModules() == null) {
            user.setModules(new ArrayList<>());
        }
        user.getModules().add(module);
        return userRepository.save(user);
    }

    // Get all modules that student enrolled in
    @GetMapping("/student/{studentId}")
    public List<Module> getModulesOfStudent(@PathVariable Long studentId) {
        User user = userRepository.findById(studentId).orElse(null);
        if (user == null || !"student".equalsIgnoreCase(user.getRole())) return null;
        if (user.getModules() == null) {
            return new ArrayList<>();
        }
        return user.getModules();
    }

    // Get all students of a module
    @GetMapping("/module/{moduleId}")
    public List<User> getStudentsOfModule(@PathVariable Long moduleId) {
        Module module = moduleRepository.findById(moduleId).orElse(null);
        if (module == null) return null;
        return module.getUsers();
    }

    // Unenroll student from module
    @DeleteMapping("/{studentId}/{moduleId}")
    public User unenrollStudent(@PathVariable Long studentId, @PathVariable Long moduleId) {
        User user = userRepository.findById(studentId).orElse(null);
        Module module = moduleRepository.findById(moduleId).orElse(null);

        if (user == null || module == null) {
            return null;
        }

        // Ensure user is a student
        if (!"student".equalsIgnoreCase(user.getRole())) {
            return null;
        }

        if (user.getModules() == null) {
            user.setModules(new ArrayList<>());
        }
        user.getModules().remove(module);
        return userRepository.save(user);
    }

}
