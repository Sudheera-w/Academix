package com.academix.backend.controller;

import com.academix.backend.entity.Module;
import com.academix.backend.entity.Student;
import com.academix.backend.repository.ModuleRepository;
import com.academix.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("api/enrollments")

public class EnrollmentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ModuleRepository moduleRepository;

    // Enroll student in module
    @PostMapping("/{studentId}/{moduleId}")
    public Student enrollStudent(@PathVariable Long studentId, @PathVariable Long moduleId) {

        Student student = studentRepository.findById(studentId).orElse(null);
        Module module = moduleRepository.findById(moduleId).orElse(null);

        if (student == null || module == null) {
            return null;
        }

        student.getModules().add(module);
        return studentRepository.save(student);
    }

    // Get all modules student enrolled in
    @GetMapping("/student/{studentId}")
    public List<Module> getModulesOfStudent(@PathVariable Long studentId) {
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) return null;
        return student.getModules();
    }

    // Get all students of a module
    @GetMapping("/module/{moduleId}")
    public List<Student> getStudentsOfModule(@PathVariable Long moduleId) {
        Module module = moduleRepository.findById(moduleId).orElse(null);
        if (module == null) return null;
        return module.getStudents();
    }

}


