package com.enrollmesh.backend.service;

import com.enrollmesh.backend.entity.User;

import java.util.List;

public interface StudentService {
    List<User> getAllStudents();
    User getStudentById(Long id);
    User createStudent(User user);
    User updateStudent(Long id, User user);
    void deleteStudent(Long id);
}