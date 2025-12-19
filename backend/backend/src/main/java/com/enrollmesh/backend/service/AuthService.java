package com.enrollmesh.backend.service;

import com.enrollmesh.backend.dto.LoginRequest;
import com.enrollmesh.backend.dto.LoginResponse;
import com.enrollmesh.backend.dto.SignupRequest;

public interface AuthService {
    LoginResponse login(LoginRequest request);
    String signup(SignupRequest request);
}
