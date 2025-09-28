package com.app.backend.controller;

import com.app.backend.dto.UserDto;
import com.app.backend.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @PostMapping("/register/{username}")
    public ResponseEntity<Map<String,String>> registerUser(@RequestBody UserDto user, @PathVariable String username){
        String message = userService.registerUser(user, username);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("message", message));
    }

    @PostMapping("/login/{username}")
    public ResponseEntity<Boolean> loginUser(@RequestBody UserDto user,@PathVariable String username){
        return new ResponseEntity<>(userService.userLogin(user,username),HttpStatus.OK);
    }
}
