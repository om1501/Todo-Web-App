package com.app.backend.service.impl;

import com.app.backend.dto.UserDto;
import com.app.backend.entity.User;
import com.app.backend.repo.UserRepo;
import com.app.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private ModelMapper mapper;
    private UserRepo userRepo;

    @Override
    public String registerUser(UserDto user, String username) {
        User userToFind = userRepo.findUserByUsername(username);
        if (userToFind == null) {
            User userToSave = mapper.map(user, User.class);
            userRepo.save(userToSave);
            return "User Registered";
        }
        return "User already exists with username:" + username;
    }

    @Override
    public boolean userLogin(UserDto user, String username) {
        User userToFind = userRepo.findUserByUsername(username);

        if (userToFind != null) {
            // Check username matches and password matches
            return userToFind.getUsername().equals(user.getUsername())
                    && userToFind.getPassword().equals(user.getPassword());
        }

        return false; // User not found
    }

}
