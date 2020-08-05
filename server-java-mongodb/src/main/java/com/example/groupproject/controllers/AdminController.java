package com.example.groupproject.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This controller will be for the Admin portion of the backend (Create posts, edit profile, etc)
@RestController
@RequestMapping("/admin")
public class AdminController {
    @GetMapping()
    public String test() {
        return ("<h1>admin</h1>");
    }
}
