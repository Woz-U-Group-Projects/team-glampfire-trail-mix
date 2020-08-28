package com.example.groupproject.controllers;

import com.example.groupproject.models.User;
import com.example.groupproject.models.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {
    private final UsersRepository userRepository;

    @Autowired
    public RegisterController(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User createUser(@RequestBody User user) {
        User foundUser = userRepository.findById("0").orElse(null);

        if (foundUser == null) {
            User newUser = new User();
            newUser.setId("0");
            newUser.setUsername(user.getUsername());
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
            newUser.setPassword(encoder.encode(user.getPassword()));
            userRepository.save(newUser);
            return newUser;
        } else {
            return foundUser;
        }
    }
}