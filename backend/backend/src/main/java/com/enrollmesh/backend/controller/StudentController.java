package com.enrollmesh.backend.controller;

import com.enrollmesh.backend.entity.User;
import com.enrollmesh.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<User> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public User getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping
    public User createStudent(@RequestBody User user) {
        return studentService.createStudent(user);
    }

    @PutMapping("/{id}")
    public User updateStudent(@PathVariable long id, @RequestBody User user) {
        return studentService.updateStudent(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable long id) {
        studentService.deleteStudent(id);
    }
}
