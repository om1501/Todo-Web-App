package com.app.backend.service;

import com.app.backend.dto.UserDto;

public interface UserService {
    String registerUser(UserDto user,String username);
    boolean userLogin(UserDto user,String username);
}
