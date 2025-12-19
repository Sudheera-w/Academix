package com.enrollmesh.backend.service.impl;

import com.enrollmesh.backend.entity.User;
import com.enrollmesh.backend.repository.UserRepository;
import com.enrollmesh.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllStudents() {
        return userRepository.findAll().stream()
                .filter(user -> "student".equalsIgnoreCase(user.getRole()))
                .collect(Collectors.toList());
    }

    @Override
    public User getStudentById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null && "student".equalsIgnoreCase(user.getRole())) {
            return user;
        }
        return null;
    }

    @Override
    public User createStudent(User user) {
        user.setRole("student");
        if (user.getModules() == null) {
            user.setModules(new ArrayList<>());
        }
        return userRepository.save(user);
    }

    @Override
    public User updateStudent(Long id, User user) {
        User existing = userRepository.findById(id).orElse(null);
        if (existing == null || !"student".equalsIgnoreCase(existing.getRole())) {
            return null;
        }
        existing.setName(user.getName());
        existing.setEmail(user.getEmail());
        existing.setDepartment(user.getDepartment());
        existing.setYear(user.getYear());
        return userRepository.save(existing);
    }

    @Override
    public void deleteStudent(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null && "student".equalsIgnoreCase(user.getRole())) {
            userRepository.deleteById(id);
        }
    }
}
