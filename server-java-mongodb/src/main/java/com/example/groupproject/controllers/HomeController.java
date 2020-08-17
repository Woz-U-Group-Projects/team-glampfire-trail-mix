package com.example.groupproject.controllers;

import com.example.groupproject.models.User;
import com.securewebapp.auth.MongoDBProfileDetailsService;
import com.example.groupproject.models.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
        @Autowired
        private UsersRepository userRepository;

    @GetMapping("/")
    public String getHomePage() {
        return "home";
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
        }
        else {
            model.addAttribute("exists", true);
            return "register";
        }
    }
}