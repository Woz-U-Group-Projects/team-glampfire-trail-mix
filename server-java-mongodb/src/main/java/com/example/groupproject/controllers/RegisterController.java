package com.example.groupproject.controllers;

import com.example.groupproject.models.User;
import com.example.groupproject.models.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    private final UsersRepository userRepository;

    @Autowired
    public HomeController(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String createUser(@RequestParam("username") String username, @RequestParam("password") String password, Model model) {
        User foundUser = userRepository.findByUsername(username);
        if (foundUser == null) {
            User newUser = new User();
            newUser.setUsername(username);
            newUser.setPassword(password);
            userRepository.save(newUser);
            return "login";
        } else {
            model.addAttribute("exists", true);
            return "register";
        }
    }
}